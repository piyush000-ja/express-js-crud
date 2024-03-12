import userpostmodel from "../models/postSchema.js"
import registermodel from "../models/registrationSchema.js"
const successuserpostController = async(req,res) =>{
    try {
        if(req.session.user_id){
        const userdata = await registermodel.findById({_id:req.session.user_id})

        res.render('userpost', {'name': userdata.name})
        }
    } catch (error) {
        console.log(error.message)
    }
}


//get post
const userpostController = async(req,res) => {
    try {
        const postdata  = await new userpostmodel({
            title:req.body.title,
            description:req.body.description,
        })
        await postdata.save();
        console.log('post saved')
        res.redirect('/dashboard')
    } catch (error) {
        console.log(error.message)
    }
}

//total post

const totalpostcontroller = async(req,res) =>{
    const allpost = await userpostmodel.find({})
    res.render('totalpost',{'allpost': allpost});  
}

export {userpostController , successuserpostController,totalpostcontroller}