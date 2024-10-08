import logo from './logo.svg';
import './App.css';

function App() {
  var name = "Bipul";
  let l = [10,20,30];
  let obj = {
    'name': "Bipul",
    age : 24
  }

  let status = true;
  return (
    <div className="App">
     <h1>Wellcome {name}</h1>
     {l.map((v)=>{
      return(
        <div>{v}</div>
      )
     })}

     <div>
      {obj.name}
     </div>
     {(status) ? <h1 style={{color:"red", backgroundColor:"yellow"}}>fuck you </h1> : "" }
     
    </div>
  
    
  );
}

export default App;
