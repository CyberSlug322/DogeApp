import {getData} from './api';
import {useEffect, useState} from 'react';

 function App() {
   const [result,setResult] = useState('');
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
    </div>
  );
}

export default App;
