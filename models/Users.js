import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: 
    {
        type: String,
        required: true
    },
    email: 
    {
        type: String,
        required: true,
        unique: true
    },
    password: 
    {
        type: String,
        required: true
    }
});

const P1User = mongoose.model('P1user', UserSchema);

export default P1User;