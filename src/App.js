
import './App.css';
import ChildA from './ChildA';
import { createContext } from 'react';

const nameContext = createContext();
const userNameContext= createContext();
function App() {
  const name ="Admin";
  const userName= "Demo";
  return (
   <>
   <nameContext.Provider value={name}>
   <userNameContext.Provider value={userName}>
   <ChildA></ChildA>
   </userNameContext.Provider>
   </nameContext.Provider>
   </>
  );
}

export default App;
export {nameContext, userNameContext}