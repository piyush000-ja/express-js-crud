// IsLogin middleware
const IsLogin = async(req,res,next) =>{
    try{
        if(req.session.user_id){
        }else{
            res.redirect('/login')
        }
        next()
    }catch(error){
        console.log(error.message)
    }
}

// IsLogout middleware

const IsLogout = async(req,res,next) =>{
    try {
        if (req.session.user_id) {
            res.redirect('/dashboard')
        } else {
            res.render('Login')
        }
        next()
    } catch (error) {
        console.log(error.message)
    }
}


//user Register middleware

const registerMid = async(req,res,next) =>{
    try {
        if (req.session.user_id) {
            res.redirect('/dashboard')
        } else {
            res.render('register')
        }
        next()
    } catch (error) {
        console.log(error.message)
    }
}

export {IsLogin,IsLogout,registerMid}