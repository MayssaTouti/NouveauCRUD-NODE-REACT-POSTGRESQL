const express =require("express"); 
const app=express(); 
const cors= require("cors"); 
const pool= require("./db"); 
const { Pool } = require("pg");


//midelware
app.use(cors()); 
app.use(express.json()); 
//Routes //




//create a role  
app.post("/roles", async(req,res) => {

    //await 
    try {
    console.log(req.body); 
    const {role_name , role_description} = req.body; 
    const newRole = await pool.query(
        `INSERT INTO role("role_name", "role_description") VALUES ($1, $2) `, [role_name, role_description]
    ); 
    res.json(newRole.rows[0]); 
        
    } catch (err) {
        console.error(err.message); 
    }

})

// get a role
 app.get("/roles/:id" , async(req, res) => {
try {
 
  const {id} = req.params; 
  const role= await pool.query
   ("SELECT * FROM role WHERE role_id = $1",
    [id]); 
  res.json(role.rows[0]); 


} catch (err) {
    console.error(err.message);
} })

app.get("/roles", async (req,res) => {

try {
const allRoles = await pool.query ("SELECT * FROM role"); 
res.json(allRoles.rows); 

}catch (err) {
    console.error(err.message); 
    
}})

//update a role 

app.put("/roles/:id", async (req, res) => {

try {
  
const {id} = req.params; 
const {role_name , role_description} = req.body; 
const updateRole = await  pool.query(`UPDATE "role"
 SET "role_name" = $1 , "role_description"= $2 WHERE "role_id" = $3 `, [role_name, role_description , id]); 

 res.json("Role was updated "); 

    
} catch (err) {
    console.error(err.message); 
}

})




//delete a role
app.delete("/roles/:id", async(req, res)=> {
try {
    
const {id} = req.params; 
const  deleteRole= await pool.query("DELETE FROM role WHERE  role_id = $1", [id] ); 
res.json(" role was deleted !"); 

} catch (err) {
    console.error(err.message); 
}

} )


app.listen(5000,() => {

    console.log("server hos started on port 5000"); 

}); 
