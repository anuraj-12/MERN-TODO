
export const validate  =  (schema) => async(req,res,next )=>{
    try {
        
        const bodyParse =  await schema.parseAsync(req.body)
        req.body =  bodyParse
        next()
    } catch (err) {

        const status = 422
        const message =  err.issues[0].message
        const extraMessage =  "Please fill the data properly"
        
        const error = {
           status,
           message,
           extraMessage
        }

        next(error)
    }
}