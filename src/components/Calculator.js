import React, { useState } from "react";
import Button from "./Button";
import Tela from "./Tela";
import useCalc from "../Hooks/useCalc";
import * as S from './Calculator.style';

export default function Calculator() {

  const { display, getValor, resultado, clearDisplay } = useCalc();

  return (
    <S.Box>
      <h1>Calculator</h1>
    <table>
      <tr>
        <td colSpan="3"><Tela valor={display} /></td>
        <td><Button valor='c' getValor={clearDisplay} /> </td>
        <td><Button valor='=' getValor={resultado} /></td>
      </tr>
      <tr>
        <td><Button valor='1' getValor={getValor} /></td>
        <td><Button valor='2' getValor={getValor} /></td>
        <td><Button valor='3' getValor={getValor} /></td>
        <td><Button valor='/' getValor={getValor} /></td>
      </tr>
      <tr>
        <td><Button valor='4' getValor={getValor} /></td>
        <td><Button valor='5' getValor={getValor} /></td>
        <td><Button valor='6' getValor={getValor} /></td>
        <td><Button valor='-' getValor={getValor} /></td>
      </tr>
      <tr>
        <td><Button valor='7' getValor={getValor} /></td>
        <td><Button valor='8' getValor={getValor} /></td>
        <td><Button valor='9' getValor={getValor} /></td>
        <td><Button valor='+' getValor={getValor} /></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td><Button valor='0' getValor={getValor} /></td>
        <td><Button valor='*' getValor={getValor} /></td>
      </tr>
    </table>
    </S.Box>
  );

}