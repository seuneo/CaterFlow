import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username:{
        type: String
    },
    password:{
        type: String
    },
    role:{
        type: String,
        enum: ["admin", "staff"],
        default: "staff"
    }

}, {
    timestamps: true //createdAt updatedAt
});

const User = mongoose.model('User', userSchema);

export default User;