const OtpService = require("../services/otpService");


exports.sendOtp = (req,res) =>{

    //logic 
    console.log(req.body);

    // if(!phone){
    //     res.status(400).json({message: 'Phone field is required'});
    // }

    const otp = OtpService.generateOtp();
    res.json({otp: otp})
}