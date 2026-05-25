import { createUserService, updateUserService , 
    deleteUserService, getAllUsersByIdService,
     getAllUsersService} from "../models/userModel.js";

const handlRequest = (res, status,message,data = null)=>{
    res.status(status).json({
        status,
        message,
        data,

    });
};

export const createUser = async(req , res, next) =>{
    const {name, email} = req.body;
    try{
        const newUser = await createUserService(name, email);
        handlRequest(res, 201, "User created successfully", newUser);
    }catch(err){
        next(err)
    }
}
export const getAllUsers = async(req , res, next) =>{
    try{
        const users = await getAllUsersService();
        handlRequest(res, 200, "Users fetched successfully ", users);
    }catch(err){
        next(err)
    }
}
export const getUserById = async(req , res, next) =>{
    const {id} = req.params;
    try{
        const newUser = await getAllUsersByIdService(id);
        if(!newUser){
            return handlRequest(res, 404, "User not found");
        }
        handlRequest(res, 200, "User fetched successfully", newUser);
    }catch(err){
        next(err)
    }
}
export const updateUser = async(req , res, next) =>{
    const {id} = req.params;
    const {name, email} = req.body;
    try{
        const newUser = await updateUserService(id, name, email);
        if(!newUser){
            return handlRequest(res, 404, "User not found");
        } 
        handlRequest(res, 200, "User updated successfully", newUser);
    }catch(err){
        next(err)
    }
}

export const deleteUser = async(req , res, next) =>{
    const {id} = req.params;  
    try{
        const deletedUser = await deleteUserService(id);
        if(!deletedUser){
            return handlRequest(res, 404, "User not found");
        }
        handlRequest(res, 200, "User deleted successfully", deletedUser);
    }catch(err){
        next(err)
    }
}
