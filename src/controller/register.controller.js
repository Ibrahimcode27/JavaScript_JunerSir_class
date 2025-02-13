const Registration = async(req , res) => {
    const {firstName, LastName, email, Phone, NewPassword, ConfirmPassword} = req.body
    //validation is done below
    if ( !email || !Phone || NewPassword || ConfirmPassword) {
        res.status(400).json({
            message: "Credentials not Provided!"})
    }
    if (NewPassword !== ConfirmPassword){
        res.status(400).json({message: "Password Do not Match!"})
    }
    console.log(firstName, LastName, email, Phone, NewPassword, ConfirmPassword);
    return res.status(200).json(
      {
        message: `Your credentials are - ${firstName, LastName, email, Phone, NewPassword, ConfirmPassword}`
      }
    );

};