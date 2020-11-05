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
            let obj = {"name":arrayInput,"status":"complete"}
            setArrayinputList([...arrayinputList,obj]);
        }else{
            alert("Please enter some value");
        }
    }
    const toggleTask=(e)=>{
        let tmp = arrayinputList.filter(obj=>obj.key == e).forEach(obj=>obj.status="complete")
        console.log(tmp)
        //setArrayinputList(tmp);
       
    }
    return (<div>
        <div className="todo-wrapper border-content">
            <p className="title">Text box and adding array</p>
            <input type="text" name="" value={arrayInput} onChange={(e)=>{setArrayInput(e.target.value)}}/>
            <input type="button" value="CLick to add Array" onClick={addDatatoArrayFromInput}/>
            { arrayinputList.map((value,key)=>{
            return(
                <div className={value.status} key={key}>
                   <input onClick={()=>toggleTask(key)} type="checkbox"/> {value.name+" "+value.status}
                </div>
            )
        })
            
            }
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