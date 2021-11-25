import './Cell.css';
function Cell({image, breed, title}) {
  const cellContent = breed ?? title;
    if (cellContent) {
      return ( <td className = 'cell' height='350px' width='250px'>{cellContent}</td>)
    } else {
        return (<td className = 'cell' height='350px' width='550px'><img src={image} /></td>)
    } 
  }
  
  export default Cell;
  