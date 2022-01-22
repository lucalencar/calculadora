import React from "react";
import * as S from './Calculator.style';

export default function Button({ valor, getValor }) {

    return (
        <div>
            <S.Botao onClick={(e) => getValor(valor)}>{valor}</S.Botao>
        </div>
    );

}