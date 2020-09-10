import React, {useState} from 'react';
import PropTypes from 'prop-types'

const CounterApp = ({value})=>{

    const [counter, setCounter ] = useState( value );

    

    

    //handleAdd
    const handleAdd = ()=>{
        setCounter(counter + 1)
    }
    //handleReduce
    const handleReduce = ()=>{
        // if(counter > 0){
            setCounter(counter - 1)
        // }

        return
    }
    //handleReset
    const handleReset = ()=>{
        setCounter(value)
    }

    return (<>        
            <h1>Counter App</h1>
            <p>{counter}</p>

            {/* <button onClick={(e) => handleAdd(e)}>+1</button> */}
            {/* Estos ambos funcionan igual, el parametro evento por defecto es enviado en la funcion */}
            
            <button onClick={handleReduce}>-1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleAdd}>+1</button>
    </>)

}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 123
}

export default CounterApp
