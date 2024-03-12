import  express  from "express";
const router = express.Router()
import { homeController } from "../controller/homeController.js";
import { dashboardController,  registerControllerDB, successUserlogincontroller, userLogin, userRegisteration, userlogoutcontroller } from "../controller/registerControllerDB.js";
import { IsLogin,IsLogout,registerMid } from "../middlware/middleware.js";
import { successuserpostController, totalpostcontroller, userpostController } from "../controller/userpostController.js";




router.get('/', homeController)

router.get('/register',registerMid, registerControllerDB)
router.post('/register',userRegisteration)

router.get('/login',IsLogout, userLogin)
router.post('/login', successUserlogincontroller)

router.get('/dashboard',IsLogin, dashboardController)

router.get('/logout',IsLogin, userlogoutcontroller )

router.get('/userpost', IsLogin, successuserpostController)
router.post('/userpost', IsLogin, userpostController)

router.get('/totalpost',IsLogin,totalpostcontroller )
router.post('/')

    // router.get('*',(req,res)=>{
    //     res.render('Login')
    // })

export default router