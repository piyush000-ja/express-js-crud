import registermodel from "../models/registrationSchema.js";
import bcrypt from 'bcryptjs';

const registerControllerDB = (req,res) =>{
    res.render('register')
}

// bcrypt password
// const hashpassword = async(password) =>{
//     try {
//         const bcryptpassword = await bcrypt.hash(password,10);
//         return bcryptpassword
//     } catch (error) {
//         console.log(error.message)
//     }
// }

//resgistration
const userRegisteration = async(req,res) =>{
    try {
        const hashpsw =  bcrypt.hashSync(req.body.pwd,10);
        console.log(hashpsw)
    // console.log(req.body)
    // console.log(req.body.name)
    const data = new registermodel({
        name:req.body.name,
        age:req.body.age,
        email:req.body.email,
        password:hashpsw,
        city:req.body.city
    })
    await data.save()
    console.log('data save')
    console.log('userRegistration successfully')
    res.render('register')
   } catch (error) {
    console.log(error.message)
        
   }
}

//login 
const userLogin = async(req,res) =>{
    try {
        res.render('Login')
    } catch (error) {
        console.log(error.message)
        
    }
}

//login success
    const successUserlogincontroller = async(req,res)=>{

        try {
            // console.log(req.body.email)
            // console.log(req.body.pwd)
            const email = req.body.email;
            const password = req.body.pwd;
            const userdata = await registermodel.findOne({email:email})         
            if(userdata){  
                const newpassword = await bcrypt.compare(password,userdata.password)
                if(newpassword){
                    req.session.user_id = userdata._id;
                    console.log(req.session.user_id)
                // if (data.password==passoword) {
                    res.redirect('/dashboard')
                } else {
                    res.render('Login')
                }
            }else{
                res.redirect('/login')
            }
            console.log(userdata)
        } catch (error) {
            console.log(error.message) 
           
            
        }       
    }

    const dashboardController = async(req,res) =>{
        try {
            if(req.session.user_id){
                const userdata = await registermodel.findById({_id:req.session.user_id})
                console.log(userdata)
                res.render('dashboard',{'name':userdata.name})
                    
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const userlogoutcontroller = async(req,res) =>{
        try {
            if (req.session.user_id) {
                req.session.destroy()
                res.redirect('/Login')
            }
        } catch (error) {
            console.log(error.message)
        }
    }



    export {registerControllerDB,userRegisteration,userLogin,successUserlogincontroller,dashboardController,userlogoutcontroller}



