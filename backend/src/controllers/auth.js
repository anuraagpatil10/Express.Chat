import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/utils.js';
import cloudinary from '../lib/cloudinary.js'; 


export const signup = async (req, res) =>{
    const {email, userName, password} = req.body;
    try{

        if(!email || !userName || !password){
            return res.status(400).json({message: 'Please fill all the fields'});
        }

        if(password.length<6){
            return res.status(400).json({message: 'Password must be atleast 6 characters long.'});
        }
        
        const user = await User.findOne({email});

        if (user){
            return res.status(400).json({message: "User already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            userName: userName,
            email: email,
            password: hashedPassword,
        })

        if(newUser){

            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                email: newUser.email,
                userName: newUser.userName,
                profilePic: newUser.profilePic,
                message: "User created successfully"
            });

        }
        else{
            return res.status(400).json({message: "Invalid user data"});
        }


    }
    catch(error){
        console.log('Error in signup controller', error.message);
        res.status(500).json({message:'Internal server error'});
    }
};


export const login = async (req, res) =>{
    const {email, password} = req.body;

    try{
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid Credentials"});
        }

        generateToken(user._id, res);
        res.status(200).json({
            _id: user._id,
            email: user.email,
            userName: user.userName,
            message: "User logged in successfully"
        });
    }
    catch(error){
        console.log('Error in login controller', error.message);
        res.status(500).json({message:'Internal server error'});
    }
};


export const logout = (req, res) =>{
    try{
        res.cookie("jwt", "", {maxAge:0});
        res.status(200).json({message:"Logged out successfully"});
    }
    catch(error){
        console.log("Error in logout controller", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
};



export const updateProfile = async (req, res) =>{
    try{
        const {profilePic} = req.body;
        const userId = req.user._id;

        if(!profilePic){
            return res.status(400).json({message:"Profile picture not provided"});
        }
        
        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        const updatedUser = await User.findByIdAndUpdate(userId, {profilePic: uploadResponse.secure_url}, {new:true});

        res.status(200).json({
            _id: updatedUser._id,
            email: updatedUser.email,
            userName: updatedUser.userName,
            profilePic: updatedUser.profilePic,
            message: "Profile updated successfully"
        });

    }
    catch(error){
        console.log("Error in updateProfile controller", error.message);
        res.status(500).json({message: 'Internal server error'});
    }
};


export const checkAuth = (req, res) =>{
    try{
        res.status(200).json(req.user);        
    }
    catch(error){
        console.log("Error in checkAuth controller", error.message);
        res.status(500).json({message: 'Internal server error'});
    }

}