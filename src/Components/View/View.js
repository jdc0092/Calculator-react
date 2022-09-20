import React, { useState } from 'react'
import Buton from '../KeyBoardButtons/Buton';
import PantallaNumeric from '../PantallaNumeric/PantallaNumeric';
import ButtonClear from '../ButtonClear/ButtonClear';
import '../css/index.css'
import { evaluate } from 'mathjs'

function View() {

    // const [printNumb, setPrimNumb] = useState()
    const [numeric, setNumeric] = useState('');


    const insertNumbers = (val) => {
        setNumeric(numeric + val)
    }


    const calResult = () => {

        if (numeric) {
            setNumeric(evaluate(numeric))
        } else{
            alert('No hay valor para carcular!')
        }
    }




    // console.log(betaClick)

    return (
        <React.Fragment>
            <div className='calculator-contGlobal'>
                <div className='calculator-conInfo'>
                    <div>
                        <PantallaNumeric
                            numeric={numeric}
                        />
                    </div>

                    <div className='calculator-contKeyBoard'>
                        <div className='calculator-fila'>
                            <Buton numbers={insertNumbers}>1</Buton>
                            <Buton numbers={insertNumbers}>2</Buton>
                            <Buton numbers={insertNumbers}>3</Buton>
                            <Buton numbers={insertNumbers}>+</Buton>
                        </div>
                        <div className='calculator-fila'>
                        </div>
                        <div className='calculator-fila'>
                            <Buton numbers={insertNumbers}>4</Buton>
                            <Buton numbers={insertNumbers}>5</Buton>
                            <Buton numbers={insertNumbers}>6</Buton>
                            <Buton numbers={insertNumbers}>-</Buton>
                        </div>
                        <div className='calculator-fila'>
                            <Buton numbers={insertNumbers}>7</Buton>
                            <Buton numbers={insertNumbers}>8</Buton>
                            <Buton numbers={insertNumbers}>9</Buton>
                            <Buton numbers={insertNumbers}>*</Buton>
                        </div>
                        <div className='calculator-fila'>
                            <Buton numbers={insertNumbers}>.</Buton>
                            <Buton numbers={insertNumbers}>0</Buton>
                            <Buton numbers={() => calResult()}>=</Buton>
                            <Buton numbers={insertNumbers}>/</Buton>
                            {/* <Buton numbers={insertNumbers}>/</Buton> */}
                        </div>
                        <div className='calculator-fila'>
                            <ButtonClear BtnClear={() => setNumeric('')}>Clear</ButtonClear>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Buton
                eventsClick={printNumbers}
                texto={'='}
            /> */}
        </React.Fragment>
    )
}

export default View;