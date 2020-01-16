const User = require('../models/User');
const crypto = require('crypto');

module.exports = {

    async store(req, res) {
        const user = req.body;
        user.password = crypto.createHash('md5').update(user.password).digest('hex');

        const newUser = await User.create(user);

        return res.json(newUser);
    }

};