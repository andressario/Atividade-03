import "./App.css"
import Lista from './Lista'

function App(){
    return( 
       <div>
        <p className='texto'>
           Mais lidas
        </p>  
        <Lista />

        <div className='texto'>
            Mais lidas
        </div>
        <Lista/>  
   
   
       </div>
   );
}
export default App;
