import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useParams } from "react-router-dom";


const Getdata = ({p}) => {
    const [user,setUser] = useState([])
    // let history = useNavigate();
    const { index } = useParams();

    const { name,hair_color,skin_color,eye_color,height,mass,birth_year} = user;
  let loadUser = async () => {
    const result = await axios.get(`https://swapi.dev/api/people/${index}`);
    setUser(result.data);
  }


      useEffect(() => {
        loadUser(p);
      }, [p]);
  return (
    <div className="main">
            
        <div className="ca" >
               <h1>name:{name}</h1>
           </div>
           <ul>
      <li>hair:        {hair_color}</li>
      <li>skin_color:  {skin_color}</li>
      <li>eye_color:    {eye_color}</li>
      <li>height:    {height}</li>
      <li>weight:    {mass}</li>
      <li>birth_year:    {birth_year}</li>
      {/* <li>birth_year:    {films}</li>
      <li>Ac tristique libero volutpat at</li> */}
    </ul>
    </div>
  )
}

export default Getdata