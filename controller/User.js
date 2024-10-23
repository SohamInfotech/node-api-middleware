
let Usermodal = require('../modal/UserM')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { token } = require('morgan')


exports.createdata = async (req, res) => {
    const data = req.body
    try {
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const createdata = await Usermodal.create(data)
        res.status(200).json({
            status: "success",
            Message: 'data enter succes',
            Data: createdata
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: "not enter"
        })

    }
}

exports.showdata = async (req, res) => {
    const showdata = await Usermodal.find()

    try {
        res.status(200).json({
            status: "success",
            Message: 'all data show',
            Data: showdata
        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: error.Message,
            data: []
        })
    }
}

exports.deletedata = async (req, res) => {
    const deletid = req.params.id
    console.log("hrlooooo");

    console.log(deletid);
    await Usermodal.findByIdAndDelete(deletid)

    try {
        res.status(200).json({
            status: "success",
            Message: 'data delete',

        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: error.Message,
            data: []

        })
    }

}


exports.editdata = async (req, res) => {
    const edite = req.params.id
    console.log("hrlooooo");

    console.log(edite);
    await Usermodal.findByIdAndUpdate(edite, req.body)

    try {
        res.status(200).json({
            status: "success",
            Message: 'data update',

        })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: error.Message,
            data: []

        })
    }

}
exports.userlogin = async (req, res) => {
    try {
        const logindata = await Usermodal.findOne({ email: req.body.email })
        if (!logindata) throw new Error('inavalid email')
        const veryfidepassword = bcrypt.compare(req.body.password, logindata.password)
        if (!veryfidepassword) throw new Error('inavalid password')


            var token = jwt.sign({id:logindata._id},'surat')

            res.status(200).json({
                status: "success",
                Message: 'login success',
                data: logindata,
                token
                
            })
    } catch (error) {
        res.status(404).json({
            status: "fail",
            Message: 'error massage ',
        })
    }
}
