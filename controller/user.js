const User = require('../model/user');

module.exports.contact = async (req, res) => {
    console.log("Request for contact");
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).send('All fields are required');
    }

    try {
        const newUser = new User({
            name: name,
            email: email,
            message: message
        });

        await newUser.save();
        return res.status(200).send('Message Sent');
    } catch (error) {
        console.error("Error saving user:", error);
        return res.status(500).send('Internal Server Error');
    }
};
