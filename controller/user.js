const User = require('../model/user')

exports.createUser = async(req,res)=>{

    try {
        console.log(req.body);
        let user = await User(req.body)
        await user.save()
        res.send(user)
        
    } catch (error) {
        
    }
}