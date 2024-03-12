import mongoose from 'mongoose';
const connectDB = async(DATABASE_URL)=>{
    try {
        const DB_OPTIONS ={
            dbname :"laptop"
        }
        await mongoose.connect(DATABASE_URL,DB_OPTIONS)
        console.log('mongoDB connected')
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDB


























