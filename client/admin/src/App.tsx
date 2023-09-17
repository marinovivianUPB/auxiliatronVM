import "./App.css";
import Calculadora from "./components/Calculadora";
function App() {
  return (
    <div style={{width:'40em', background:'grey', flexDirection:'column', alignItems:'center', justifyContent:'center', alignSelf:'center'}}>
      <Calculadora/>
    </div>
  );
}

export default App;
