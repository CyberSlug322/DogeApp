import './TableHeader.css';
function TableHeader(props) {
 
    return (
        <table > 
          <tbody>
            <tr>
                <th className='table-title'> Title </th>
                <th className='table-breed'> Breed</th>
                <th className='table-image'> Image</th>
            </tr>
          </tbody>
        </table> 
    )
  }
  
  export default TableHeader;
  