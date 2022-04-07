import React , {Fragment, useState} from "react";

const InputRole = () => {
const [role_name, setRoleName] = useState(""); 
const [role_description, setRoleDescription] = useState(""); 

const onSubmitForm = async e => {
    e.preventDefault(); 
    try {
     const body = { role_name , role_description }; 
        const response = await fetch("http://localhost:5000/roles", {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(body)
            }); 
         window.location="/"; 
   //  console.log(response); 

    } catch (err) {
        console.error(err.message); 
        }}; 

return (
 <Fragment>
        
<h1 className="text-center mt-5"> Role List </h1>
<form className="d-flex mt-5" onSubmit={onSubmitForm}>

<input type="text" className="form-control" id="roleName" value={role_name} onChange={e => setRoleName(e.target.value)}
 /><br/>
<input type="text" className="form-control"  id="roleDesc" value={role_description} onChange={e => setRoleDescription(e.target.value)} /><br/>
<button className="btn btn-success"> Add</button>


</form>

</Fragment>


); 


}; 
export default InputRole; 