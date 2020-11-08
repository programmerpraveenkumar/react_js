import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Headercss.css';
export default function ConditionclassPages(){
  const [isRed,setIsRed] = useState(true);
  const [classNameForDiv,setclassNameForDiv] = useState('');
  
    return(
      <div>
          <div>
          <span className={(isRed?'red-color':'blue-color')}>Text</span>
          <div>
          <button onClick={()=>setIsRed(true)}>Red</button>
          <button onClick={()=>setIsRed(false)}>Blue</button>
          </div>
          </div>


          <div className={classNameForDiv}>
          <span>Text</span>
          <div>
          <button onClick={()=>setclassNameForDiv('red')}>Red</button>
          <button onClick={()=>setclassNameForDiv('blue')}>Blue</button>
          <button onClick={()=>setclassNameForDiv('black')}>black</button>
          <button onClick={()=>setclassNameForDiv('green')}>Blue</button>
          </div>
          </div>
       </div>
    )
}