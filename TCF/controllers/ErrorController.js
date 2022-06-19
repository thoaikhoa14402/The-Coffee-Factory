const AppError = require("../utils/AppError")

const HandleValidationError = err => {
    const errors = Object.values(err.errors).map(el => el.message)
    const message = `Invalid input data. ${errors.join('. ')}`
    return new AppError(message, 400)
}

module.exports = (err, req, res, next)=>{
    err.status = err.status || 'error'
    err.statusCode = err.statusCode || 500

    let error = {...err}
    if (error.name === 'ValidationError') error = HandleValidationError(error)

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message
    })
}
