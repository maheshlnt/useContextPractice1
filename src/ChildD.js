import React, { useContext }  from "react";
import  {nameContext, userNameContext} from './App'

const ChildD=()=>{
    const FirstName=useContext(nameContext);
    const userName=useContext(userNameContext)
    return <>
    Child Component: 4444 Last One Using usecontext in this<br/>
    <p>This is dummy {FirstName} and user is {userName}</p>
    
    </>
}
export default ChildD;