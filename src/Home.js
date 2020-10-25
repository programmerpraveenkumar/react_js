import React, { useEffect, useState } from 'react';
function Home() {
    const [name,setName] = useState();
    const [age,setAge] = useState();
    const [salary,setSalary] = useState();
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

   const handleChange=(value)=>{
      setName(value);
   }
   const sendDataToapi=()=>{
       console.log("value of name is",name);
       if(name == ""){
           alert("name should not be empty..");
           return;
       }
       if(salary == ""){
        alert("salary should not be empty..");
        return;
        }
        if(age == ""){
            alert("age should not be empty..");
            return;
        }
       var obj = {"name":name,"salary":salary,"age":age};
       fetch("http://dummy.restapiexample.com/api/v1/create",{method: 'POST',body:JSON.stringify(obj)})
        .then((res)=>res.json())
        .then((res)=>{
            setServerResponse(res.message); 
            setName('');
            setSalary('');
            setAge('');
        })
   }
   
  //no lifecycle->no statemanagemnt
  //hooks
    return (
      <div>
        <h2>Home from componen {name}</h2>
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