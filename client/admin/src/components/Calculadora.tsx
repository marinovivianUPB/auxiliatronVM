import { useState } from "react";

const Calculadora = () => {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [respuesta, setRespuesta] = useState('');

    const suma = () =>{
        const a = parseFloat(numero1);
        const b = parseFloat(numero2);

        if(isNaN(a) || isNaN(b)){
            setRespuesta('ERROR: No se ingresaron números válidos');
        } else{
            const aux = a+b;
            setRespuesta(`Resultado: ${aux}`);
        }
    };

    return (
        <>
        <div style={{gap:'1.5em', display:'flex', width:'50%', height:'50%', background:'grey', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'1.25em'}}>
            <h1 style={{fontSize:'2em'}}>Calculadora</h1>
            <div style={{gap:'1em',display:'flex', width:'100%', height:'100%', background:'grey', alignItems:'center', justifyContent:'center'}}>
                <input type="number" placeholder="Ingrese un número" value={numero1} onChange={(e)=> setNumero1(e.target.value)}/>
                <input type="number" placeholder="Ingrese un número" value={numero2} onChange={(e)=> setNumero2(e.target.value)}/>
            </div>
            <button style={{display:'flex', width:'50%', height:'50%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={suma}>
                Sumar
            </button>
            <p style={{fontSize:'1.25em', background:'white'}}>{respuesta}</p>
        </div>
        </>
    );
}

export default Calculadora;