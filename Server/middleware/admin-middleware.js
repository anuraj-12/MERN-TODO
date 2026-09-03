
export const adminMiddleware =  async(req,res,next) =>{

  try {
    const role =  req.user.isAdmin
    if(!role){
    res.status(401).json({message:"Access Denied.Your are not Admin"})
    }
    
  } catch (error) {
    console.log(error)
  }
  next()
}