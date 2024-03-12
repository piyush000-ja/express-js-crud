import userpostmodel from '../models/postSchema.js';
const homeController = async(req,res)=>{
    try {
        const allpost = await userpostmodel.find({})
        res.render('home',{'allpost': allpost});
    } catch (error) {
        console.log(error.message)
    }
   



    // res.sendFile(path.join(process.cwd(),'views','home.html'))
}

export {homeController}