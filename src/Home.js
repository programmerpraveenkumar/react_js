import React, { useContext, useEffect, useState } from 'react';
import {ContextTest} from './ContextTest';
function Home(props) {
    const [name,setName] = useState();
    const [name2,setName2] = useState();
    const [age,setAge] = useState();
    const [salary,setSalary] = useState();
    const contxtValue = useContext(ContextTest);
    const [serverResponse,setServerResponse] = useState();
    
    //2nd param->empty array will work like oninit in function component
    useEffect(function(){
        console.log("lifecycle..");
    },[])
    /*
        ngonint->will call before page loads
        onafteroninit->after contct loads in the page
        ngdestroy->before page gets destroy.
    */
    const updateContextValueFortest = ()=>{
      contxtValue.setName('updated in homecomponent');
    }
   const handleChange=(value)=>{
      setName(value);
   }
   const errorApiHandle=()=>{
     //eror in api from server
     //promise
     fetch("http://localhost:8080/contact/get/error")
     .then((res)=>{
       if(res.status == 200){
         res.json().then(serverRes=>{
           setServerResponse(serverRes.message); 
           setName('');
           setSalary('');
           setAge('');
         })
       }else{
         //promise 
         res.json().then(error=>{
           console.log(error)
           alert("Error "+error);
         }).catch(error=>{
            console.log(error)
            alert("Error  parsing response.....");
        })
       }
     } 
     ).catch(error=>{
       console.log(error)
         alert("Error  in api calling...");
     })
   }
   const sendDataToapi=()=>{
      errorApiHandle();
      updateContextValueFortest();
       console.log("value of name is",name);
       if(name == "" || name == undefined){
           alert("name should not be empty..");
           return;
       }
       if(salary == "" || salary == undefined){
        alert("salary should not be empty..");
        return;
        }
        if(age == "" || age == undefined){
            alert("age should not be empty..");
            return;
        }
       // setName2(name);
       var obj = {"name":name,"salary":salary,"age":age};
       fetch("http://dummy.restapiexample.com/api/v1/create",{method: 'POST',body:JSON.stringify(obj)})
        .then((res)=>{
          if(res.status == 200){
            res.json().then(serverRes=>{
              setServerResponse(serverRes.message); 
              setName('');
              setSalary('');
              setAge('');
            })
          }else{
            res.text().then(error=>{
              console.log(error)
              //alert("Error "+error);
            })
          }
        } 
        ).catch(error=>{
          console.log(error)
            alert("Error  in api calling...");
        })
   }
   
  //no lifecycle->no statemanagemnt
  //hooks
    return (
      <div>
        <h2>value is from {contxtValue.name}</h2>
        <h2>Home from componen {props.name}</h2>
        <input type="text" value={name} placeholder="Enter name" onChange={(e) =>setName(e.target.value)} />
        <input type="text" value={salary} placeholder="Enter Salary"   onChange={(e) =>setSalary(e.target.value)} />
        <input type="text" value={age} placeholder="Enter Age"   onChange={(e) =>setAge(e.target.value)} />
        <button onClick={()=>sendDataToapi()}>Click me to see the name</button>
     
        <h4>{serverResponse}</h4>
      </div>
    );
  }

  /**
   * functional component->
   * class component->
   */
  export default Home;