const express = require ('express')
const app = express()
app.use(express.json())
const connection= require("./conexion")
const cors = require("cors")

app.use(cors())

app.get('/',async(require,response)=>{
    await connection.query('SELECT * FROM Products', function (error, results, fields) {
        if (error) 
        {
            console.log(error)
            response.status(500).json({"mensaje":"Error del servidor","description": error})
            return;
        }
        response.status(200).json(results);
      });
       
})
app.post('/',async(require,response)=>{
const {name, price, descrip}= require.body
const sql= `INSERT INTO Products (name, price, descrip) VALUES ('${name}', ${price}, '${descrip}')`;


    await connection.query(sql, [name, price, descrip],function (error, results, fields) {

        if (error) 
        {
            console.log(error)
            return;
        }
        response.status(200).json({"mensaje": 'Se añadio un producto correctamente'});
      });
})

app.listen (3000,()=>{
    console.log("servidor en el puerto 3000");
})