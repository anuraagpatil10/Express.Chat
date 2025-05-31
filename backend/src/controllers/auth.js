export const signup = (req, res) =>{
    const {email, userName, password} = req.body;
    try{
        if(password.length<6){
            return res.status(400).json({message: 'Password must be atleast 6 characters long.'});
        }

        
    }
    catch(error){

    }
};


export const login = (req, res) =>{
    res.send('login route');
};


export const logout = (req, res) =>{
    res.send('logout route');
};