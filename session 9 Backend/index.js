const exp = require('express');
const app = exp();
const mysql = require('mysql2');
const bodyparser = require('body-parser')

app.use(bodyparser.json())

//Database server
const db = mysql.createPool({
    port:3306,
    host:'localhost',
    user:'root',
    password:'root',
    database:'employee'
})

//application server
app.listen(8000,()=>{
    console.log('server is running on port 8000');
})

//check connection
db.getConnection((err)=>{
    if(err)
    {
        console.log("Database not connected");
    }
    else{
        console.log("Database is Connected");
    }
})

//select
app.get('/alluser',(req,res)=>{
    const que = 'select * from emp';
    db.query(que,(err,result)=>{
        if(err)
        {
            return res.send("DataBase error");
        }
        res.send(result);
    })
})


app.post('/singleuser',(req,res)=>{
    const {empno} = req.body;
    if(empno<7369){
        return res.send("Emeployee doesn't exist")
    }
    const que='select * from emp where empno=?';
    db.query(que,[empno],(err,result)=>{
        if(err)
        {
            return res.send("DataBase error");
        }
        res.send(result);
    })
})


app.post('/sendData',(req,res)=>{
    const {empid,name,job} = req.body;
    const que = "INSERT INTO emp (empno, ename, job) VALUES (?,?,?)"
    db.query(que,[empid,name,job],(err,result)=>{
        if(err)
        {
            return res.send("Database error");
        }
        return res.send("Data is Inserted");
    })
})