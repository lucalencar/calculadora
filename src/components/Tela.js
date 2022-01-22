import React from "react";
import * as S from './Calculator.style';

export default function Tela({ valor }) {

    return (
        <div>
            <S.Input type="text" value={valor} />
        </div>
    );

}