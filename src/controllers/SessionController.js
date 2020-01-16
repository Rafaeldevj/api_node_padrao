const User = require('../models/User');
const crypto = require('crypto');

module.exports = {

    async store(req, res) {
        let { email, password } = req.body;
        password = crypto.createHash('md5').update(password).digest('hex');

        const user = await User.findOne({
            where: {
                email,
                password
            }
        })

        if (!user) {
            res.status(404).json({'msg': 'User not found!'});
        }

        return res.json(user);
    }

};