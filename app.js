var app = require('express')()

app.get("/", (req, res)=>{
    res.sendStatus(200);
})

app.listen(4000, () => {
    console.log(`started at port: ${process.env.PORT || 4000}`)
})

module.exports = app