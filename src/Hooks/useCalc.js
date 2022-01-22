import React, { useState } from "react";

export default function useCalc() {

    const [display, setDisplay] = useState('');

    function getValor(e) {
        setDisplay(display + e)
    }

    function resultado() {
        setDisplay(eval(display));
    }

    function clearDisplay() {
        setDisplay('');
    }

    return {
        display,
        getValor,
        resultado,
        clearDisplay
    }

}