import{render, fireEvent, screen} from '@testing-library/react'
import Calculadora from '../../components/Calculadora';

test("Sumar dos enteros positivos y mostrar el resultado", () =>{
    render(<Calculadora/>);
    const mas = screen.getByText("+");
    const igual = screen.getByText("=");
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(mas);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(igual);
    const respuesta = screen.getByText('26');
    expect(respuesta).toBeTruthy();
});

test("No poner caracteres especiales juntos", () =>{
    render(<Calculadora/>);
    const mas = screen.getByText("+");
    const punto = screen.getByText(".");
    fireEvent.click(mas);
    fireEvent.click(punto);
    const respuesta = screen.getByText('ERROR: Operacion no valida');
    expect(respuesta).toBeTruthy();
});

test("No permitir errores de sintaxis", () =>{
    render(<Calculadora/>);
    const mas = screen.getByText("+");
    const punto = screen.getByText(".");
    const igual = screen.getByText("=");
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(punto);
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(punto);
    fireEvent.click(mas);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(igual);
    const respuesta = screen.getByText('ERROR: Sintaxis incorrecta');
    expect(respuesta).toBeTruthy();
});

test("Respuestas negativas", () =>{
    render(<Calculadora/>);
    const menos = screen.getByText("-");
    const igual = screen.getByText("=");
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(menos);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(igual);
    const respuesta = screen.getByText('-2');
    expect(respuesta).toBeTruthy();
});

test("Suma de decimales", () =>{
    render(<Calculadora/>);
    const mas = screen.getByText("+");
    const igual = screen.getByText("=");
    const punto = screen.getByText(".");
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(punto);
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(mas);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(punto);
    fireEvent.click(screen.getByText("4"));
    fireEvent.click(igual);
    const respuesta = screen.getByText('2.6');
    expect(respuesta).toBeTruthy();
});