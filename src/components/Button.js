import React from "react";
import * as S from './Calculator.style';

export default function Button({ valor, getValor }) {

    return (
        <div>
            <S.Botao onClick={() => getValor(valor)}>{valor}</S.Botao>
        </div>
    );

}
