// import logo from './logo.svg';
import './App.css';
import Character from './components/character';
import { BrowserRouter,  Route ,Routes } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Getdata from './components/Getdata';
// import Pagination from './pagination/Pagination';
// import Data from './pagination/data';

// import {  } from 'react-q'
function App() {

  const [peopleData,setPeopleData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage, setPostsPerPage] = useState(8);
 
    //  const pagination = async() =>{
    //   await axios.get('https://swapi.dev/api/people')
      
    //  }

  const loadAllPeople= async ()=>{
    await axios.get('https://swapi.dev/api/people')
      .then((response)=>{
        var peopleCopy = response.data.results;
        let promises = [];
        for(let person of peopleCopy){
          promises.push(
            //homeworld call (get the names from given api call)
            axios.get(person.homeworld)
              .then((response)=>{
                person.homeworld = response.data.name;
              }),
              // axios.get(person.films)
              // .then((response)=>{
              //   person.films = response.data.title;
              // }),
            //species call (get the names from given api call)
            person.species.length > 0 ?
              axios.get(person.species[0])
                .then((response)=>{
                  person.species = response.data.name;
                })
            : person.species = 'Human'
          )
        }
        //waits until all http requests have been loaded properly one by one
        Promise.all(promises).then(() => {setPeopleData(peopleCopy)});
      })
      .catch((error)=>{
        alert('error loading data')
      })
  }

  //loads the card data when app is launched and updates the homeworld and species names then set the data to peopleData state
  useEffect(()=>{
    loadAllPeople();
  },[]);

  
  return (
 
     <BrowserRouter>
     <Routes>
   
     <Route path='/' element={<Character p ={peopleData}/>}/>
     <Route path='/:index' element={ <Getdata />}/>
     {/* <Route path='/page/:count' element={ <Pagination props={pagination}/>}/> */}
     </Routes>
   </BrowserRouter>
  );
}

export default App;
