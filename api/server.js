const app = require("./app")
const DbConnection = require("./db/conn")

DbConnection();  //calling function to connect with database

// listening the requests
app.listen(process.env.PORT, () => {
    console.log(`server is listening on port `, process.env.PORT)
})