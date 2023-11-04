import mongoose from "mongoose";
import { IUser } from "../common/interafce/userInterface";
import User from "../models/user";

export const createUser = async (body: IUser) => {
  try {
    const response = await User.find(body)
    if(response.length) {
        throw ({message :"Already exists"})
    }
    const newUser = new User(body);
    const res = await newUser.save();
    return res
  } catch (error) {
    throw (error)
  }
};

export const getUser = async (params: IUser) => {
  try {
    const response = await User.find(params);
    return response
  } catch (error) {
    throw (error)
  }
};

export const editUser = async (oldData:IUser, updatedData: IUser) => {
  try {
    const oldResponse = await User.find(oldData)
    if(!oldResponse.length) {
        throw ({message :"No user with this param"})
    }
    const response = await User.findOneAndUpdate(oldData,updatedData);
    return response
  } catch (error) {
    throw (error)
  }
};

export const deleteUser = async (oldData:IUser) => {
  try {
    const oldResponse = await User.find(oldData)
    if(!oldResponse.length) {
        throw ({message :"No user with this param"})
    }
    const response = await User.deleteOne(oldData);
    return response
  } catch (error) {
    throw (error)
  }
};
