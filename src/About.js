import React, { useEffect, useState } from 'react';

// class About extends React.Component{
//     //statemanagement
//     //const [name,setname]=usestate()
//     render({
//         return "<div>sample formabout </div>";
//     }
// }


function About(props){
    const[name,setName]=useState('');
    return(
    <div><h1>About test</h1>
    <p>{props.name}</p></div>
    )
}
export default About;