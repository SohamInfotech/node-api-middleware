const model = require("../modal/friend");
const jwt = require('jsonwebtoken')

exports.createcatagory = async (req, res,next) => {
  const data = req.body;
  try {
    const createcatagory = await model.create(data);
    res.status(200).json({
      status: "success",
      Message: "data enter succes",
      Data: createcatagory,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      Message:  error.Message,
    })
  }
};