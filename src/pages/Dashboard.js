import React, { useEffect, useState } from 'react';
export default function Dashboard(props){
    const[empList,setEmpList]= useState();
    const getData=()=>{ 
        fetch("http://dummy.restapiexample.com/api/v1/employees")
         .then((res)=>res.json())
         .then((res)=>{
           //json to strinfy
           setEmpList(res.data);            
            //  setSalary('');
            //  setAge('');
         })
      }
      useEffect(function(){
            getData();
      },[])
    return (<div>
        <ul className="empdetails">
            {
                empList && empList.map((obj)=>{
                    return(
                        <li key={obj.id}><a href={"/pages/emp/"+obj.id}>{obj.employee_name}</a></li>
                    )                        
                })
             }           

        </ul>
    </div>)
    //
}