import React, { useEffect, useState } from 'react';
export default function Loop(){
    const [people,setPeople] = useState(['1','2','3'])
    const [arrayInput,setArrayInput] = useState('');
    const [peopleDetails,setPeopleDetails] = useState([
        {"name":"test1","age":"12","id":"1"},
        {"name":"test2","age":"13","id":"2"},
        {"name":"test3","age":"14","id":"3"}
    ])
    const [arrayinputList,setArrayinputList] = useState([])
    const  addDatatoArrayFromInput=()=>{
        if(arrayInput != "" &&  arrayInput  != undefined){
            // let tmp = arrayinputList;
            // tmp.push(arrayInput)
            // console.log(tmp);
            let obj = {"name":arrayInput,"status":"incomplete"}
            setArrayinputList([...arrayinputList,obj]);
            setArrayInput('');//clearing input
        }else{
            alert("Please enter some value");
        }
    }
    const toggleTask=(checkBoxIndex)=>{
        //filter->filtering(remove) the array based on values
   // let tmp = arrayinputList.filter((obj,index)=>index == e).map(obj=>{obj.status = 'complete';return obj});        
   //let tmp = arrayinputList.map((value,index)=>{if(index  == e){(value.status =='complete' )?'complete':'incomplete';}return value});        
   let tmp = arrayinputList.map((value,index)=>{
       if(index  == checkBoxIndex){
           //!true
            if(value.status == 'incomplete'){
                value.status = 'complete'
            }
            else{
                value.status = 'incomplete'
            }
        }
        return value
    });        
            console.log(tmp);
        setArrayinputList(tmp);
       
    }
    const deleteTodo=(key)=>{
        if(window.confirm("Are you wanna delete this task..?")){
            let tmp = arrayinputList.filter((obj,index)=>index != key)
            setArrayinputList(tmp); 
        }
      
    }
    const saveAllTaskToApi=()=>{
        if(arrayinputList.length <=0){
            alert("please add atleast one task...");
            return;
        }
        console.log(arrayinputList);
        //send to api....
    }
    return (<div>
        <div className="todo-wrapper border-content">
            <p className="title">Text box and adding array</p>
            <input type="text" name="" value={arrayInput} onChange={(e)=>{setArrayInput(e.target.value)}}/>
            <input type="button" value="CLick to add Array" onClick={addDatatoArrayFromInput}/>
            { arrayinputList.map((value,key)=>{
            return(
                // conditional class
                <div className={value.status} key={key}>
                   <input onClick={()=>toggleTask(key)} type="checkbox"/> {value.name+" "+value.status}<p onClick={()=>deleteTodo(key)} className="deleteIcon">Del</p>
                </div>
                
            )
         
        })
            
            }
            <div><input type="button" onClick={saveAllTaskToApi} value="Save all"/></div>
              </div>
        <div className="border-content">
        <p className="title">Array</p>
        { people.map((value,key)=>{
            return(                
            <li  key={key}>{value}</li>
            )
        })
            
            }
            </div>
            <div className="border-content">
            <p className="title">Array Of Objects</p>
            { peopleDetails.map((value,key)=>{
            return(
                <div key={key}>{value.name+"--"+value.age+"--"+value.id}</div>
                
            )
        })
            
            }
              </div>
              

    </div>)
}