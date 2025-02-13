const Registration = async (req, res) => {
  const { email, Phone, Password } = req.body;
  //validation is done below
  if (!Password || !email || !Phone){
    res.status(400).json({
        message: "Invalid Credentials!",
    })
  }
  if (Password !== await Password){
    res.status(400).json("Password Do not Match!")
  }
  return res.status(200).json("login Successful!!!")
};
