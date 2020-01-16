const User = require('../models/User');
const crypto = require('crypto');

module.exports = {

    async index(req, res) {
        const users = await User.findAll({
            attributes: { exclude: ['password'] }
        });

        return res.json(users);
    },

    async find(req, res) {

        const { user_id } = req.params;

        const userFind = await User.findByPk(user_id, { 
            attributes: { exclude: ['password'] }
         });

        if (!userFind) {
            res.status(404).json({'msg': 'User not found!'});
        }

        return res.json(userFind);

    },

    async store(req, res) {
        const user = req.body;
        user.password = crypto.createHash('md5').update(user.password).digest('hex');

        const newUser = await User.create(user);

        return res.json(newUser);
    },

    async update(req, res) {
        const user = req.body;
        const { user_id } = req.params;

        const userFind = await User.findByPk(user_id);

        if (!userFind) {
            res.status(404).json({'msg': 'User not found!'});
        }

        const userUpdated = await userFind.update(user);

        return res.json(userUpdated);
    },

    async destroy(req, res) {
        const { user_id } = req.params;

        const userFind = await User.findByPk(user_id);

        if (!userFind) {
            res.status(404).json({'msg': 'User not found!'});
        }

        userFind.destroy(user_id);
    },

};