import "./App.css";
import Component from "./components/TitleCard";
import Pokedeck from './components/Pokedeck';
import Calculadora from "./components/Calculadora";
function App() {
  return (
    <div style={{display:'flex', width:'100%', height:'100%', background:'grey', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
      <Calculadora/>
    </div>
  );
}

export default App;
