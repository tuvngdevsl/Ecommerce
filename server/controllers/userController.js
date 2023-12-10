import User from "../models/UserModel.js";
import asyncHandle from "express-async-handler";
import httpStatusCode from "../utils/httpStatusCode.js";
import { generateToken, generateRefreshToken } from "../config/jwt.js";
import validateId from "../utils/validateId.js";
import jwt from "jsonwebtoken";

const userController = {
  register: asyncHandle(async (req, res) => {
    const { email, firstname, lastname, password, phone } = req.body;
    const findUser = await User.findOne({ email });
    const findPhone = await User.findOne({ phone });
    if (!findUser && !findPhone) {
      // Register a new user

      const registerUser = await User.create({
        firstname,
        lastname,
        fullname: firstname + " " + lastname,
        email,
        phone,
        password
      });

      res.status(httpStatusCode.Created).json({
        message: "Register user successfully",
        data: registerUser
      });
    } else {
      // User existed
      throw new Error("User already Exists or Phone already Exists");
    }
  }),

  login: asyncHandle(async (req, res) => {
    const { email, password } = req.body;
    //Check user if user exists or not
    const findUser = await User.findOne({ email });
    if (findUser && (await findUser.isPasswordMatched(password))) {
      const token = generateToken(findUser?._id);
      const refreshToken = await generateRefreshToken(findUser?._id);
      const updateUser = await User.findByIdAndUpdate(
        findUser?.id,
        {
          refreshToken: refreshToken
        },
        { new: true }
      );

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 72 * 60 * 60 * 1000
      });
      return res.status(httpStatusCode.OK).json({
        message: "Login successfully",
        token: token
      });
    } else {
      throw new Error("Invalid Credentials");
    }
  }),

  // Get all user
  getAllUser: asyncHandle(async (req, res) => {
    try {
      const getAllUser = await User.find();
      res.status(httpStatusCode.OK).json({
        message: "Get all User successfully",
        data: getAllUser
      });
    } catch (error) {
      throw new Error(error);
    }
  }),
  // Get user by id
  getUserById: asyncHandle(async (req, res) => {
    const { id } = req.params;
    validateId(id);
    try {
      const getUserById = await User.findById(id);

      res.status(httpStatusCode.OK).json({
        message: "Get user successfully",
        data: getUserById
      });
    } catch (error) {
      throw new Error("User not found");
    }
  }),

  //handle refresh token
  handleRefreshToken: asyncHandle(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) throw new Error("No refreshToken present in db or not matched");
    jwt.verify(refreshToken, process.env.JWT_SECRET, (error, decoded) => {
      if (error || user.id !== decoded.id) {
        throw new Error("There is something wrong with refresh token");
      }
      const accessToken = generateToken(user?.id);
      res.status(httpStatusCode.OK).json({
        Token: accessToken
      });
    });
  }),
  //Update User
  updateUser: asyncHandle(async (req, res) => {
    const { _id } = req.user;
    validateId(_id);
    const { firstname, lastname, email, password, fullname, phone } = req.body;
    try {
      const updateUser = await User.findByIdAndUpdate(
        _id,
        {
          firstname,
          lastname,
          email,
          fullname: firstname + lastname,
          phone
        },
        {
          new: true
        }
      );
      res.status(httpStatusCode.OK).json({
        message: "Update User successfully",
        data: updateUser
      });
    } catch (error) {
      throw new Error(error);
    }
  }),

  //Delete User
  deleteUser: asyncHandle(async (req, res) => {
    const { id } = req.params;
    validateId(id);
    try {
      const deleteUser = await User.findByIdAndDelete(id);

      res.status(httpStatusCode.OK).json({
        message: "Delete user successfully",
        deleteUser
      });
    } catch (error) {
      throw new Error("User not found");
    }
  }),
  // Delete all user
  deleteAllUser: asyncHandle(async (req, res) => {
    try {
      const deleteAllUser = await User.deleteMany();
      res.status(httpStatusCode.OK).json({
        message: "Delete all user successfully",
        data: deleteAllUser
      });
    } catch (error) {
      throw new Error(error);
    }
  }),
  blockUser: asyncHandle(async (req, res) => {
    const { id } = req.params;
    validateId(id);
    try {
      const block = await User.findByIdAndUpdate(
        id,
        {
          isBlocked: true
        },
        {
          new: true
        }
      );
      res.status(httpStatusCode.OK).json({
        message: "Block user successfully!",
        data: block
      });
    } catch (error) {
      throw new Error(error);
    }
  }),

  unblockUser: asyncHandle(async (req, res) => {
    const { id } = req.params;
    validateId(id);
    try {
      const unblock = await User.findByIdAndUpdate(
        id,
        {
          isBlocked: false
        },
        {
          new: true
        }
      );
      res.status(httpStatusCode.OK).json({
        message: "Unblock user successfully!",
        data: unblock
      });
    } catch (error) {
      throw new Error(error);
    }
  }),

  //Logout Function
  logout: asyncHandle(async (req, res) => {
    const cookie = req.cookies;
    if (!cookie?.refreshToken) throw new Error("No Refresh Token in Cookies");
    const refreshToken = cookie.refreshToken;
    const user = await User.findOne({ refreshToken });
    if (!user) {
      res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: true
      });
      return res.sendStatus(204);
    }
    await User.findOneAndUpdate(
      { refreshToken: refreshToken },
      {
        refreshToken: ""
      }
    );
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true
    });

    return res.sendStatus(204);
  })
};

export default userController;
