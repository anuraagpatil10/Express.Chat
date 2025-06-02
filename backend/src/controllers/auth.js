import User from '../models/user.js';
import bcrypt from 'bcryptjs';
import { generateToken } from '../lib/utils.js';

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


export const login = (req, res) =>{
    res.send('login route');
};


export const logout = (req, res) =>{
    res.send('logout route');
};