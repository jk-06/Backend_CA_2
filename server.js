const express=require("express");
const app=express();
const PORT=3000;
app.use(express.json());

const users=[
    {username: "Jk", age:19, email:"jk1@gmail.com"},
    {username: "Jkay", age:18, email:"jk2@gmail.com"}
]

app.get("/search", (req,res) => {
    try{
    const {username, age, email} = req.query;

    if(!username){
        return res.status(404).json({message: "User parameter cannot be empty", success:false})
    }

    const usernames=users.find((user)=>user.username===username);
    if(!usernames){
        return res.status(404).json({message: "User not found", success:false})
    }

    const useremail=users.find((user)=>user.email===email);
    if(!useremail){
        return res.status(404).json({message: "User not found", success:false})
    }

    return res.status(200).json({message: "User found", usernames, useremail, success:true})
}   
    catch(error){
        console.log(error.message);
        return res.status(500).json({message:"Internal server error", success:false})
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on port http://localhost:${PORT}`);
})