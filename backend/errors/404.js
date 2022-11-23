const err404 = (req, res) => {
    res.status(404).json({
        success: false,
        message: '404 Not Found'
    })
};

module.exports = err404;