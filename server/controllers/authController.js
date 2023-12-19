const User = require('../models/user')
const {hashPassword,comparePassword} = require('../helpers/auth')
const jwt = require('jsonwebtoken')
const test = (req,res)=>{
    res.json('this is a test')
}




    


  

const registerUser = async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        //check if name was entered
        if(!name){
            return res.json({
                error : 'name is required'
            })
        };
        //check is password is good
        if(!password || password.length < 6){
            return res.json({
                error : 'enter a strong password with atleast 6 characters long!'
            })
        }
        //check existing emails
        const exist = await User.findOne({email})
        if(exist){
            return res.json({
                error : 'Email is taken'
            })
        }
        const hashedPassword = await hashPassword(password)

        const user = await User.create({
            name,
            email,
            password : hashedPassword,
        })


        return res.json(user)
    }catch(err){
        console.log(err)
    }
}


const loginUser = async (req,res) =>{
    try{
        const {email,password} = req.body;
        
        
        //check if user exist
        const user  = await User.findOne({email});

        if(!user){
            return res.json({
                error : "User not registered"
            })
        }
        

        //check password match
        const match = await comparePassword(password,user.password)

        if(match){
            jwt.sign({email : user.email, id : user._id, name: user.name },process.env.JWT_SECRET,{},(err,token)=>{
                if(err) throw err;
                res.cookie('token',token).json(user)
            })
        }else{
            return res.json({
                error : "Invalid Passowrd"
            })

        }

        


    }catch(err){
        console.log(err)
    }
}



module.exports = {
    test,
    registerUser,
    loginUser,
}