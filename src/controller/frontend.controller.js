const frontend = async(req , res) => {
    const {name}= req.body
    const fullname = "Khan" + name
    
return res.status(200).json(`your full name is ${fullname}`);
}

export {frontend}