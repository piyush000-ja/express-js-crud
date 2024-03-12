import express from 'express'
import router from './router/web.js';
//path for express-session
import session from 'express-session';
import { secretkey } from './config/config.js';
// path for static file
import path from 'path';
const app = express();
const port = process.env.PORT || 9000
import connectDB from './db/connectDB.js'
// for connecting mongoDB   
const DATABASE_URL = process.env.DATABASE_URL ||'mongodb://127.0.0.1:27017'
connectDB(DATABASE_URL);

// session-setup
app.use(session({secret:secretkey}))

//userpost import code
app.use(express.urlencoded({extended:false}))

// attech static file
app.use(express.static(path.join(process.cwd(),'public')))

// setup ejs file
app.set('views','./views')
app.set('view engine', 'ejs')

app.use('/', router)


app.listen(port , (req,res)=>{
    console.log(`server is running on port http://localhost${port}`)
})


