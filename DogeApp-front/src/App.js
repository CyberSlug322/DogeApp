import {getData} from './api';
import {useEffect, useState} from 'react';
import DogComponent from './DogComponent';
import TableHeader from './TableHeader';
import './App.css';

 function App() {
   const [result,setResult] = useState([]);
   useEffect(
    async () =>{
      const res = await getData()
      setResult(res);
    }
    ,[]
   )

  return (
    <div className="App">
      <TableHeader/>
      {result.map( (element, pos) => ( <DogComponent title = {element.title} image = {element.image} breed = {element.breed} key = {pos}/>))}
    </div>
  );
}

export default App;
