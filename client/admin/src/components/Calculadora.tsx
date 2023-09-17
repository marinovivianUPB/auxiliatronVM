import { useState } from "react";

const Calculadora = () => {
    const [respuesta, setRespuesta] = useState('');
    const [input, setInput] = useState('')
    const [error, setError] = useState('')

    const add = (caracter:string) =>{
        if((caracter === "+" || caracter === "-" ||caracter === ".") && (input.substring(input.length-1)==="+" || input.substring(input.length-1)==="-" || input.substring(input.length-1)===".")){
            setError('ERROR: Operacion no valida')
        } else {
            setError('')
            setInput(input.concat(caracter))
        }
        
    }

    const evaluate = () =>{
        try {
            const result = Math.round(eval(input)*100)/100;
            setRespuesta(`${result}`);
        } catch (e) {
            setError('ERROR: Sintaxis incorrecta')
        }
    }

    const del = () =>{
        setInput('')
        setError('')
        setRespuesta('')
    }

    return (
        <>
        <div style={{gap:'1.5em', display:'flex', width:'100%', height:'80%', background:'grey', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'1.25em'}}>
            <h1 style={{fontSize:'2em'}}>Calculadora</h1>
            <div id='input' style={{gap:'1em',display:'flex', width:'100%', height:'100%', background:'white', alignItems:'center', justifyContent:'right', color:'black'}}>
                <p>{input}</p>
            </div>
            <div id='output' style={{gap:'1em',display:'flex', width:'100%', height:'100%', background:'white', alignItems:'center', justifyContent:'right', color:'black'}}>
                <p>{respuesta}</p>
            </div>
            <p>{error}</p>
            <div style={{display:"flex", flexDirection:"column", width:'100%', alignItems:'center', justifyContent:'center'}}>
                <div  style={{display:"flex", flexDirection:"row", width:'100%', alignItems:'center', justifyContent:'center'}}>
                    <button id='mas' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={() => add('+')}>
                        +
                    </button>
                    <button id='menos' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={() => add('-')}>
                        -
                    </button>
                    <button id='igual' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={evaluate}>
                        =
                    </button>
                </div>
                <div style={{display:"flex", flexDirection:"row", width:'100%', alignItems:'center', justifyContent:'center'}}>
                    <button id='1' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={() => add('1')}>
                        1
                    </button>
                    <button id='2' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={() => add('2')}>
                        2
                    </button>
                    <button id='3' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={() => add('3')}>
                        3
                    </button>
                </div>
                <div style={{display:"flex", flexDirection:"row", width:'100%',alignItems:'center', justifyContent:'center'}}>
                    <button id='4' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={() => add('4')}>
                        4
                    </button>
                    <button id='5' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={() => add('5')}>
                        5
                    </button>
                    <button id='6' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={() => add('6')}>
                        6
                    </button>
                </div>
                <div style={{display:"flex", flexDirection:"row", width:'100%',alignItems:'center', justifyContent:'center'}}>
                    <button id='7' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={() => add('7')}>
                        7
                    </button>
                    <button id='8' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={() => add('8')}>
                        8
                    </button>
                    <button id='9' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={() => add('9')}>
                        9
                    </button>
                </div>
                <div style={{display:"flex", flexDirection:"row", width:'100%',alignItems:'center', justifyContent:'center'}}>
                    <button id='C' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={del}>
                        C
                    </button>
                    <button id='0' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={() => add('0')}>
                        0
                    </button>
                    <button id='punto' style={{display:'flex', width:'30%', background:'black', flexDirection:'column', alignItems:'center', justifyContent:'center', color:'white'}} onClick={() => add('.')}>
                        .
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Calculadora;