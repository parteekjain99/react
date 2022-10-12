import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";


const Data = ({m}) => {
    const [user,setUser] = useState([])
    // let history = useNavigate();
    const { index } = useParams();

    const { name} = user;
  let loadUser = async () => {
    const result = await axios.get(`https://swapi.dev/api/people/?page=${index}`);
    setUser(result.data.results);
  }


      useEffect(() => {
        loadUser(m);
      }, [m]);
  return (
    <div className="main">
            
        <div className="card-box" >
             
               <h1>{name}</h1>
               {/* <h2>{hair_color}</h2>
               <h2>{skin_color}</h2>
               <h2>{eye_color}</h2> */}
           </div>
    </div>
  )
}

export default Data