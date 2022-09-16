import React from 'react'


function Buton(props) {

    const isOperator = (e) => {
        return isNaN(e) && (e != '.') && (e != "=")
    }

    return (
        <React.Fragment>
            <div className={`keyBottons-cont ${isOperator(props.children) ? 'operations' : ''}`.trimEnd()}
                onClick={() => props.numbers(props.children)}>
                {props.children}
            </div>
        </React.Fragment>
    )
}

export default Buton;