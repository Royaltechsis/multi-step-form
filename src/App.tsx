import react,  { ReactNode } from "react";
import Form from "./Components/form";
import "./App.css"


function App({children}:{children:ReactNode}){
  return(
    <>
<Form>{children}</Form>
    </>
  );
}

export default App;