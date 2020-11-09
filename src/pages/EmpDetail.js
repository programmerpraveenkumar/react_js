import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
export default function EmpDetail({ match }){
    const[empDetails,setEmpDetails]= useState();
    let params = useParams();
    //EmpDetail
    const getData=()=>{        
        let emp_id = params.emp_id ;
        fetch("http://dummy.restapiexample.com/api/v1/employee/"+emp_id)
         .then((res)=>res.json())
         .then((res)=>{
           //json to strinfy
           console.log(res);
           setEmpDetails(JSON.stringify(res.data));
         //  setEmpList(res.data);            
            //  setSalary('');
            //  setAge('');
         })
      }
      useEffect(function(){
            getData();
      },[])
    return (<div>
            {empDetails}
    </div>)
    //
}