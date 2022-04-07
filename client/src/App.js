import React, {Fragment} from "react"; 

import './App.css';
//components 
import InputRole from "./components/InputRole";
import ListRole  from "./components/ListeRole";

function App() {
  return (
   <Fragment>
    <div className="container" >
     <InputRole />
     <ListRole />


     </div>
   </Fragment>
  );
}

export default App;
