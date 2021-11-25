import {getData} from './api';
import {useEffect, useState} from 'react';
import dogComponent from './dogComponent';

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
   {console.log('result',result)}
   {result.map( (element, pos, arr) => {
     
   } )}
    </div>
  );
}

export default App;
//<dogComponent title = {} image = {} breed = {} />