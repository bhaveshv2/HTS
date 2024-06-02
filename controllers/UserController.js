const User = require('../models/user');

module.exports.signup = async function(req,res){
    try{
        let user = await User.create({
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            password:req.body.password
        })

        return res.status(200).json({
            user,
            message:"User Created Successfully!"
        })
    }catch(err){
        console.log('*****',err);
        return res.status(500).json({
            message:"Internal Server Error"
        });
    }
}

module.exports.signin = async (req,res)=>{
    try{
        let user = await User.findOne({email:req.body.email});
        
        if(user && user.password===req.body.password){
            return res.status(200).json({
                message:"Sign in successful!",
                user
            });
        }else{
            return res.status(422).json({
                message:"Invalid username or password"
            });
        }
    }catch(err){
        console.log('*****',err);
        return res.status(500).json({
            message:"Internal Server Error"
        });
    }
}