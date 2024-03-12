import mongoose from "mongoose";
const registrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        
    },

    age: {
        type: String,
        required: true,
        
    },

    email:{
        type: String,
        required: true,
        
    },

    password: {
        type: String,
        required: true,

    },

    city: {
        type: String,
        required: true,
        
    },
});

// model

const registermodel = mongoose.model('userRegistration',registrationSchema)

export default registermodel;

















