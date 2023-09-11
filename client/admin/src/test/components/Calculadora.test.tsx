import{render, fireEvent, screen} from '@testing-library/react'
import Calculadora from '../../components/Calculadora';

test("Sumar dos enteros positivos y mostrar el resultado", () =>{
    render(<Calculadora/>);
    const primerNumero = screen.getAllByPlaceholderText("Ingrese un número")[0];
    const segundoNumero = screen.getAllByPlaceholderText("Ingrese un número")[1];
    const boton = screen.getByText("Sumar");
    fireEvent.change(primerNumero, {target:{value:'300'}});
    fireEvent.change(segundoNumero, {target:{value:'123'}});
    fireEvent.click(boton);
    const respuesta = screen.getByText('Resultado: 423');
    expect(respuesta).toBeTruthy();
});

test("Sumar dos enteros negativos y mostrar el resultado", () =>{
    render(<Calculadora/>);
    const primerNumero = screen.getAllByPlaceholderText("Ingrese un número")[0];
    const segundoNumero = screen.getAllByPlaceholderText("Ingrese un número")[1];
    const boton = screen.getByText("Sumar");
    fireEvent.change(primerNumero, {target:{value:'-300'}});
    fireEvent.change(segundoNumero, {target:{value:'-123'}});
    fireEvent.click(boton);
    const respuesta = screen.getByText('Resultado: -423');
    expect(respuesta).toBeTruthy();
});

test("Sumar un entero positivo y uno negativo y mostrar el resultado", () =>{
    render(<Calculadora/>);
    const primerNumero = screen.getAllByPlaceholderText("Ingrese un número")[0];
    const segundoNumero = screen.getAllByPlaceholderText("Ingrese un número")[1];
    const boton = screen.getByText("Sumar");
    fireEvent.change(primerNumero, {target:{value:'-300'}});
    fireEvent.change(segundoNumero, {target:{value:'100'}});
    fireEvent.click(boton);
    const respuesta = screen.getByText('Resultado: -200');
    expect(respuesta).toBeTruthy();
});

test("Sumar un decimal negativo con un entero positivo y mostrar resultado", () =>{
    render(<Calculadora/>);
    const primerNumero = screen.getAllByPlaceholderText("Ingrese un número")[0];
    const segundoNumero = screen.getAllByPlaceholderText("Ingrese un número")[1];
    const boton = screen.getByText("Sumar");
    fireEvent.change(primerNumero, {target:{value:'-300.20'}});
    fireEvent.change(segundoNumero, {target:{value:'100'}});
    fireEvent.click(boton);
    const respuesta = screen.getByText('Resultado: -200.2');
    expect(respuesta).toBeTruthy();
});

test("Sumar dos e's y mostrar error", () =>{
    render(<Calculadora/>);
    const primerNumero = screen.getAllByPlaceholderText("Ingrese un número")[0];
    const segundoNumero = screen.getAllByPlaceholderText("Ingrese un número")[1];
    const boton = screen.getByText("Sumar");
    fireEvent.change(primerNumero, {target:{value:'e'}});
    fireEvent.change(segundoNumero, {target:{value:'e'}});
    fireEvent.click(boton);
    const respuesta = screen.getByText('ERROR: No se ingresaron números válidos');
    expect(respuesta).toBeTruthy();
});