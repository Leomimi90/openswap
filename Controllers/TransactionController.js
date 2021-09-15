
module.exports = {
  send: (req, res, next) => {
    res.json({ success: true, data: [], message: "Sale successfully made" })
    next()
  },
  purchase: (req, res, next) => {
    res.json({ success: true, data: [], message: "Successful Purchase " })
    next()
  }
}
