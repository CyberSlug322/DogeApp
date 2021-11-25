import Cell from "./Cell";
import './DogComponent.css';
function DogComponent({title, breed, image}) {
 
   return (
     <div className="Dog-component">
       <table>
         <tbody>
          <tr>
             <Cell title = {title} />
             <Cell breed = {breed} />
             <Cell image = {image} />
           </tr>
         </tbody>
       </table>
     </div>
   );
 }
 
 export default DogComponent;
 