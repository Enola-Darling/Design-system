import { useState } from 'react';
import './App.css';
import "./App.scss";
import Button from './assets/components/button';
import {InputText, InputPassword}from "./assets/components/Form";
import Header from './assets/components/header';


function App() {
  const [inputTextValue, setInputTextValue] = useState();
  const [inputPasswordValue, setInputPasswordValue] = useState();
  
  return (
    <div>
      <Header/>
    </div>
  //   <div>
  //     <>
  //     <InputText 
  //     name="name"
  //     placeholder="Your Name" 
  //     id={"name"} 
  //     label={"name"}
  //     errorMessage={"name"}
  //     handleChange={setInputTextValue}
  //     />
  //     </>
  //     <>
  //     <InputPassword
  //     name="password"
  //     placeholder="Your password" 
  //     id={"password"} 
  //     label={"password"}
  //     handleChange={setInputPasswordValue}
  //     />
  //     </>
  //  </div>
    
    // <div className="container">
    //   <div className="row-g">
    //     <div className="col-1 ">col1</div>
    //     <div className="col-1">col1</div>
    //     <div className="col-1">col1</div>
    //     <div className="col-1">col1</div>
    //     <div className="col-1">col1</div>
    //     <div className="col-1">col1</div>
    //     <div className="col-1">col1</div>
    //     <div className="col-1">col1</div>
    //     <div className="col-1">col1</div>
    //     <div className="col-1">col1</div>
    //     <div className="col-1">col1</div>
    //     <div className="col-1">col1</div>
    //   </div>
    //   <div className="row-g">
    //     <div className="col-2">col2</div>
    //     <div className="col-2">col2</div>
    //     <div className="col-2">col2</div>
    //     <div className="col-2">col2</div>
    //     <div className="col-2">col2</div>
    //     <div className="col-2">col2</div>
    //   </div>
    //   <div className="row-g">
    //     <div className="col-3">col3</div>
    //     <div className="col-3">col3</div>
    //     <div className="col-3">col3</div>
    //     <div className="col-3">col3</div>
    //   </div>
    //   <div className="row-g">
    //     <div className="col-4">col4</div>
    //     <div className="col-4">col4</div>
    //     <div className="col-4">col4</div>
    //   </div>
    //   <div className="row-g">
    //     <div className="col-5">col5</div>
    //     <div className="col-7">col7</div>
    //   </div>
    //   <div className="row-g">
    //     <div className="col-12">col12</div>
    //   </div>
    //   <div className="row-g">
    //     <div className="col-3">col3</div>
    //     <div className="col-3">col3</div>
    //     <div className="col-6">col6</div>
    //   </div>
    //   <div className="row-g">
    //     <div className="col-1">col1</div>
    //     <div className="col-1">col1</div>
    //   </div>
    //   <div className="row-g">
    //     <div className="col-4">col4</div>
    //     <div className="col-8">col8</div>
    //   </div>
    //   <div>
    //     <Button label= "go to" outline size="xl" square />
    //   </div>
    // </div>
    
  );
}
export default App;