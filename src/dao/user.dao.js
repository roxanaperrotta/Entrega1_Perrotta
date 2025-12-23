import {User} from "../models/user.model.js";

class UserDao{

    async findById(id){
        return await User.findById(id);
    };

    async findOne(query){
        return await User.findOne(query);
    };

    async save(userData){
        const user = new UserModel(userData);
        return await user.save();
    };

    async update(id, userData){
        return await User.findByIdAndUpdate(id, userData);
    };

    async delete(id){
        return await User.findByIdAndDelete(id);

    }

}

export default UserDao;