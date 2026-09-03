export const errorMiddleware = (err , req , res, next) =>{
    const status = err.status || 500
    const message  = err.message || "Internal Server Error "
    const extraMessage =  err.extraMessage || "Something went wrong on our end"

    return res.status(status).json({
        status,
        message,
        extraMessage
    })
}