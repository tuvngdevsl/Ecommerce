import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

const userController = {
  register: async (req, res) => {
    const { email, firstname, lastname, password, phone } = req.body;
    const findUser = await User.findOne({ email });
    const findPhone = await User.findOne({ phone });
    if (!findUser && !findPhone) {
      // Register a new user
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const registerUser = await User.create({
        firstname,
        lastname,
        email,
        phone,
        password: hashedPassword
      });

      res.status(200).json({
        message: "Register user successfully",
        data: registerUser
      });
    } else {
      // User existed
      res.status(500).json({
        message: "User already Exists or Phone already Exists"
      });
    }
  },

  login: async () => {}
};

export default userController;
