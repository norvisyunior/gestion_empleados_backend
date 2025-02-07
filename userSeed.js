import User from "./models/User.js"
import bcrypt from "bcrypt"
import connectToDataBase from "./db/db.js"

const userRegister = async () => {
    connectToDataBase()
    try {
        const hashPassword = await bcrypt.hash("admin", 10)
        const newUser = new User({
            name: "Norvis",
            email: "norvis@gmail.com",
            password: hashPassword,
            role: "admin"
        })
        await newUser.save()
    } catch (error) {
        console.log(error)
    }
}

userRegister();