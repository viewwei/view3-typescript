module.exports = app => {
  app.post("/api/user/login", (req, res) => {
      res.json({
        code: 200,
        msg: "login success",
        data: true
      })
      res.status = 200
  })

}