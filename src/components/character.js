import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '../pagination/Pagination';
import './character.css'
const HomePage = ({ p }) => {
    // const [search,setSearch]=useState('');


    // const [counter , setCounter] = useState(1)





    
    //used to copy p to be used for searching purposes...
    const[peopleData2,setPeopleData2]=useState([]);

    useEffect(()=>{
        setPeopleData2(p)
    },[p]);
    




    return (
        <>
            <div className='main-card-box'>
                {/*GENERATING CARDS*/}
                {peopleData2.length>0 ?
                    peopleData2.map((person,index)=>(
                        <li key={index+1} style={{ listStyleType: "none" }}>
                            <div className='card-box'>
                                <div className='card-header'>
                                    {/*ICON TO GO TO CARD PAGE*/}
                                    <p className='card-name-text'>{person.name}</p>
                                </div>
                                <div className='card-info'>
                                    <div className='card-info-header'>
                                        <p className='card-info-header-text'>
                                            {/* <img src={require('../resources/Interview Assets/Gender-Male.svg').default} alt='icon' height={16} width={16}/> */}
                                            {person.birth_year}
                                        </p>
                                        <p className='card-info-header-text'>{person.species}</p>
                                    </div>
                                    <div className='card-info-main'>
                                        <div className='info-box'>
                                            <p className='info-header-text'>
                                                {/* <img src={require('../resources/Interview Assets/Homeworld.svg').default} alt='icon' height={16} width={16}/> */}
                                            HOMEWORLD</p>
                                            <p className='info-value-text'>{person.homeworld}</p>
                                        </div>
                                        <div className='info-box'>
                                            <p className='info-header-text'>
                                                {/* <img src={require('../resources/Interview Assets/Vehicle.svg').default} alt='icon' height={16} width={16}/> */}
                                                VEHICLES
                                                </p>
                                            <p className='info-value-text'>{person.vehicles.length}</p>
                                        </div>
                         
                                        <div className='info-box'>
                                            <p className='info-header-text'>
                                                {/* <img src={require('../resources/Interview Assets/Starship.svg').default} alt='icon' height={16} width={16}/> */}
                                            STARSHIPS</p>
                                            <p className='info-value-text'>{person.starships.length}</p>
                                            <Link className='btn btn-primary' to={`/${index+1}`}>view
                                        {/* <img className='card-header-icon' alt='icon' src={require('../resources/Interview Assets/Card.svg').default} height={16} width={16}/> */}
                                    </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                    :
                    /*to inform user that data is loading/info is not available (if it takes too long to load)*/
                    <p className='load-text'>Loading data...<br/><br/>Or, info is not available.</p>
                    
                }
            </div>
 <Pagination/>
      </>
    )
}

export default HomePage