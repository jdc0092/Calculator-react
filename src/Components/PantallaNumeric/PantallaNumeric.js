import React from 'react'


function PantallaNumeric({ numeric }) {

    return (
        <React.Fragment>
            <div className='calculator-view'>
                {numeric.toLocaleString('es-Us')}
            </div>
        </React.Fragment>
    )
}

export default PantallaNumeric;