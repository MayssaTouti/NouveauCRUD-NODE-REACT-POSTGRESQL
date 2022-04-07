import React, { Fragment , useEffect , useState }  from "react";
import EditRole from "./EditRole";
const ListRole = () => {
  const [roles, setRoles] = useState([]); 
  //delete function 
  const deleteRoles = async (id) => {
      try {
       const deleteRoles = await fetch(`http://localhost:5000/roles/${id}`,{
           method: "DELETE"
       }); 
       // console.log(deleteRole); 
       setRoles(roles.filter(role => role.role_id !== id)) 
      } catch (err) {
          console.error(err.message); 
      }
  }; 

const getRoles = async () => {
    try {
        const response = await fetch("http://localhost:5000/roles"); 
        const jsonData = await response.json(); 

    setRoles(jsonData); 

       // console.log(jsonData); 
    } catch (err) {
        console.log(err.message); 
        
    }
}
    useEffect(() => {
        getRoles();
    }, []); 

    console.log(roles); 

return (

<Fragment>
    {""}
<table className="table mt-5 text-center">
    <thead>
      <tr>
        <th>id Role  </th>
        <th>Role Name </th>
        <th>Role description</th>
        <th> Action </th>
      </tr>
    </thead>
    <tbody>
        
      {/* <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
    */}
    
  {roles.map(role => (
     <tr key={role.role_id}>
           <td>{ role.role_id }</td>
         <td>{ role.role_name }</td>
         <td> {role.role_description}</td>
         <td> <EditRole role={role} />  </td>
         <td> <button className="btn btn-danger" onClick={()=> deleteRoles(role.role_id)}> Delete </button>  </td>
     </tr> 
  ) )}

    </tbody>
  </table>



</Fragment>

)


}
export default ListRole ; 