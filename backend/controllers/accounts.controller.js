const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

/* Models Imports */
const accountModel = require('../models/accounts.model');

const accountCtrl = {

    /* POST */
    postRegister: async (req, res) => {
        try {
                /* Account already exists in MongoDB Collection */
            /* Conflict; Status Code: 409 */
            const existingAccount = await accountModel.findOne({ email: req.body.email });
            if (existingAccount) {
                return res.status(409).json({
                    success: false,
                    message: 'Account already exists'
                });
            };

            /* Password Hashing */
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
            const data = { ...req.body, password: hashedPassword };

            accountModel.create(data, (err, data) => {
                if (!err) {
                    res.status(201).json({
                        success: true,
                        data: data
                    });
                } else {
                    /* MongoDB Mongoose Model Validation Error */
                    /* Bad Request; Status Code: 400 */
                    if (err.name === 'ValidationError') {
                        res.status(400).json({
                            success: false,
                            message: err.message
                        });
                    } else {
                        res.status(500).json({
                            success: false,
                            message: `Internal Server Error: ${err.message}`
                        });
                    }
                }
            });
        }
        catch {
            res.status(500).json({
                success: false,
                message: 'Internal Server Error'
            });
        }
    },


    postLogin: async (req, res) => {
        try {
            console.log(req.body)
            const account = await accountModel.findOne({ email: req.body.account });
            /* Account does not exist */
            /* Not Found; Status Code: 404 */
            if (!account) {
                res.status(404).json({
                    success: false,
                    message: 'Account does not exist'
                });
            }
            /* Account exists */
            else {
                /* Check Password */
                // bcrypt.compare(Plaintext Password, Hashed Password, Callback)
                bcrypt.compare(req.body.password, account.password, (_, success) => {
                    /* Correct Password */
                    if (success) {
                        /* JWTs*/
                        const accessToken = jwt.sign(
                            { username: account.username, email: account.email },
                            process.env.JWT_ACCESS_TOKEN_SECRET,
                            { expiresIn: '5m' }
                        );

                        res.status(200).json({
                            success: true,
                            message: { ...account._doc, accessToken: accessToken }
                        });
                    }
                    /* Incorrect Password */
                    /* Unauthorized; Status Code: 401 */
                    else {
                        res.status(401).json({
                            success: false,
                            message: 'Incorrect Password'
                        });
                    }
                })
            }
        }
        catch {
            res.status(500).json({
                success: false,
                message: 'Internal Server Error'
            });
        }
    },

    postForgotPassword: async (req, res) => {
        const account = await accountModel.findOne({ email: req.body.email });
        if (account) {
            res.status(200).json({
                success: true,
                message: 'Account exists'
            });
        } else {
            res.status(404).json({
                success: true,
                message: 'Account does not exist'
            });
        }
    }
};

module.exports = accountCtrl;