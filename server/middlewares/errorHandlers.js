module.exports = function (err, req, res, next) {
    let statusCode = 500
    let errorCode = "Internal server error"
    let message = ''
    console.log(err)

    if (err.name == 'SequelizeValidationError') {
        statusCode = 400
        errorCode = 'VALIDATION_ERROR'
        message = 'Incomplete data or Wrong Input'
    }
    else if (err.name == 'LoginValidationError') {
        statusCode = 404
        errorCode = 'VALIDATION_ERROR'
        message = 'Invalid email or password'
    }
    res.status(statusCode).json({errorCode, message})
}