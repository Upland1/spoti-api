import userModel from "../models/userModel.js";


const userController = {
    getAllUsers: async(_, res) => {
        try {
            const users = await userModel.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            console.error('Error fetching users:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    getUserById: async (req, res) => {
        const {id} = req.params;
        console.log(req)
        try {
            const user = await userModel.getUserById(id)
            res.status(200).json(user);
        } catch (error) {
            console.error('Error fetching user:', error);
            return { status: 500, message: 'Internal Server Error' };
        }
    },
    createUser: async (req, res) => {
        const userData = req.body;
        console.log(req.body)
        try {
            const newUser = await userModel.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
    updateUser: async (req, res) => {
        const { id } = req.params;
        const userData = req.body;
        try {
            const updateUser = await userModel.updateUser(id, userData);
            res.status(200).json(updateUser);
        } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}

export default userController;