var express= require('express');//data base eka coonect karanna ganna frame work
var pg = require('pg');//pg admin eke header file eka
var app = express();//express js eka athule tiyena eka  function1. eka ona wena eka witharai
var connection = process.env.DATABASE_URL || 'postgres://postgres:123@localhost:5432/phoenix payroll';//db ekata yana path 1
const client = new pg.Client(connection);//path eka pg ekata denawa
client.connect(function(error){
    if(!!error){
        console.log("not connect");
    }
    else{
        console.log("connected");
    }
}) 

app.use(function (req, res, next) {//header files

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



app.post('/api/login', function (req, res) {

var data=req.body;
var un=data.userName;
var pw=data.password;
 client.query("select * from user where userName='"+un+"' & password='"+pw+"'", function(error,rows,fields){
        if(error){
            console.log("can not get data");
        }
        else{
            if(rows!=null){
                 res.json("ok");
            }else{
                res.json("err");
            }
           
            
        }
    })

    console.log("okkk");
 res.json('ok');
});

app.get('/employee',function(req,res){
    //res.send("hiiiiii");

    client.query("select * from employee", function(error,rows,fields){
        if(error){
            console.log("can not get data");
        }
        else{
            console.log("can get data");
            res.send(rows.rows);
        }
    })
});

app.post('/api/insertEmp',function(req,res){
    //res.send("hiiiiii");
var newUser=req.body;
var email="Email@com";
var id=456;
var firstname='ishani';
var lastname='senadheera';
var name = firstname+" "+lastname;



    client.query("INSERT INTO employee(emp_id,emp_name) VALUES('"+id+"','"+name+"')", function(error,rows,fields){
        if(error){
            console.log("eror");
        }
        else{
           
            res.send("ok");
        }
    })
   

});

app.get('/api/insert',function(req,res){
    client.query("insert into employee(empname,empid) values('Rangika','01')",function(error){

        if(error){           
            res.json("error");
        }
        else{
            res.json("success");
        }
    })
   
});


app.get('/api/viewemp',function(req,res){

    client.query("select * from employee",function(error,rows,field){
        if(error){
            res.json("error");
        }
        else{
            res.json(rows.rows);
        }
    })
});

app.post('/api/EPF',function(req,res){
var data=req.body;
    client.query("insert into employee(empId,empName,basicsalary,ETF,EPF) values('"+data.empId+"','"+data.empName+"','"+data.basicsalary+"','"+data,ETF+"','"+data.EPF+"')",function(error,rows,field){
        if(erorr){
            res.json("error");
        }
        else{
            res.json(rows.rows)
        }
    });


    
})
app.listen(3000);//run wena port eka