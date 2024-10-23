const jwt = require('jsonwebtoken')
const Usermodal = require('../modal/UserM')

exports.tokensecure = async (req, res, next) => {
    try {
        const token = req.header.authorization
        if (!token) throw new Error('attach tokken')
        const tokenverify = jwt.verify(token, 'surat')
        const userverify = await model.findbyid(tokenverify.id)
        if (!userverify) throw new Error('user not found')
        next()


    } catch (error) {
        res.status(400).json({
            status:"fail",
            message:error.message
        })
    }
}