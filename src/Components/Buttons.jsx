import { useEffect, useState } from 'react';

export const Buttons = () => {

    //Valores con lo que se hace las operaciones
    const [valuesInput, setValuesInput] = useState([])
    //Valor resultado de la operacion
    const [resultinput, setResultinput] = useState('')
    // Mostrar en pantalla
    const [displayResult, setDisplayResult] = useState('')

    const handleNumberClick = (number) =>{
        setValuesInput([...valuesInput, number])
    }

    useEffect(() => {
        const miexpresion = valuesInput.join('')
        setDisplayResult(miexpresion)
    }, [valuesInput])
    
    const handleResult = () => {
        const expresion = valuesInput.join('')
        const resultado = eval(expresion)
        setResultinput(resultado)
    }

    const handleResetValue = () => {
        setValuesInput([''])
        setDisplayResult('')
        setResultinput('')

    }


    return (
        <>
            <div className='areaResults container text-center '>
                <div className='container text-center '>
                    <input 
                        type="text" 
                        className="form-control m-2" 
                        placeholder="Values"
                        value={displayResult}
                        readOnly
                         />
                    <input 
                        type="text" 
                        className="form-control m-2" 
                        placeholder="Results"
                        value={resultinput} />
                </div>
            </div>

            <div className='areaButtons d-flex justify-content-center container text-center'>
                <div className='areaNumbers  container text-center'>
                <div className='row'>
                    <button 
                        className='col m-2 btn btn-outline-success'
                        onClick={() => handleNumberClick(1)}
                        >1</button>
                    <button 
                        className='col m-2 btn btn-outline-success'
                        onClick={() => handleNumberClick(2)}
                        >2</button>
                    <button className='col m-2 btn btn-outline-success'
                        onClick={() => handleNumberClick(3)}
                        >   3
                        </button>
                </div>
                <div className='row'>
                    <button className='col m-2 btn btn-outline-success'
                        onClick={() => handleNumberClick(4)}
                        >   4
                        </button>
                    <button className='col m-2 btn btn-outline-success'
                        onClick={() => handleNumberClick(5)}
                        >   5
                        </button>
                    <button className='col m-2 btn btn-outline-success'
                        onClick={() => handleNumberClick(6)}
                        >   6
                        </button>
                </div>
                <div className='row'>
                    <button className='col m-2 btn btn-outline-success'
                        onClick={() => handleNumberClick(7)}
                        >   7
                        </button>
    
                    <button className='col m-2 btn btn-outline-success'
                        onClick={() => handleNumberClick(8)}
                        >   8
                        </button>
                    <button className='col m-2 btn btn-outline-success'
                        onClick={() => handleNumberClick(9)}
                        >   9
                        </button>
                </div>
                <div className='row'>
                    <button className='col m-2 btn btn-outline-success'>😎</button>
                    <button className='col m-2 btn btn-outline-success'
                        onClick={() => handleNumberClick(0)}
                        >   0
                        </button>
                    <button className='col m-2 btn btn-outline-success'
                        onClick={() =>handleNumberClick('.')}
                        >   .
                        </button>
                </div>
                </div>

                <div className='areOperations  container text-center'>
                    <div className='row'>
                        <button 
                            className='col m-2 btn btn-outline-dark'
                            onClick={() => handleNumberClick('')}
                        >   Borrar
                        </button>
                        <button 
                            className='col m-2 btn btn-outline-dark'
                            onClick={() => handleResetValue()}>AC</button>
                    </div>
                    <div className='row'>
                        <button 
                            className='col m-2 btn btn-outline-dark'
                            onClick={() => handleNumberClick('-')}
                        >   -
                        </button>
                        <button 
                            className='col m-2 btn btn-outline-dark'
                            onClick={() => handleNumberClick('*')}
                        >   *
                        </button>
                    </div>
                    <div className='row'>
                        <button 
                            className='col m-2 btn btn-outline-dark'
                            onClick={() => handleNumberClick('+')}
                        >   +
                        </button>
                    </div>
                    <div className='row'>
                        <button className='col m-2 btn btn-outline-dark'>/</button>
                        <button 
                            className='col m-2 btn btn-outline-dark'
                            onClick={() => handleResult()}
                            >   =
                            </button>
                    </div>
                </div>
            </div>

            
        </>
    );
};



// import React, { useState } from 'react';

// export const Buttons = () => {
//     const [valuesInput, setValuesInput] = useState('');
//     const [resultsInput, setResultsInput] = useState('');

//     const handleNumberClick = (number) => {
//         // Al hacer clic en un número, actualizamos el estado del input correspondiente
//         setValuesInput(valuesInput + number);
//     };

//     const handleOperationClick = (operation) => {
//         // Al hacer clic en una operación, puedes manejarlo según tus necesidades
//         // En este ejemplo, simplemente lo agregamos al input de resultados
//         setResultsInput(resultsInput + operation);
//     };

//     return (
//         <>
//             <div className='areaResults container text-center '>
//                 <div className='container text-center '>
//                     <input
//                         type="text"
//                         className="form-control m-2"
//                         placeholder="Values"
//                         value={valuesInput}
//                         readOnly
//                     />
//                     <input
//                         type="text"
//                         className="form-control m-2"
//                         placeholder="Results"
//                         value={resultsInput}
//                         readOnly
//                     />
//                 </div>
//             </div>

//             <div className='areaButtons d-flex justify-content-center container text-center'>
//                 {/* Resto del código */}
//                 {/* ... */}

//                 <div className='areaNumbers  container text-center'>
//                     <div className='row'>
//                         {/* Manejar clic en los números */}
//                         <button
//                             className='col m-2 btn btn-outline-success'
//                             onClick={() => handleNumberClick('1')}
//                         >
//                             1
//                         </button>
//                         <button
//                             className='col m-2 btn btn-outline-success'
//                             onClick={() => handleNumberClick('2')}
//                         >
//                             2
//                         </button>
//                         <button
//                             className='col m-2 btn btn-outline-success'
//                             onClick={() => handleNumberClick('3')}
//                         >
//                             3
//                         </button>
//                     </div>
//                     {/* Resto de los botones numéricos */}
//                     {/* ... */}
//                 </div>

//                 <div className='areOperations  container text-center'>
//                     <div className='row'>
//                         {/* Manejar clic en las operaciones */}
//                         <button
//                             className='col m-2 btn btn-outline-dark'
//                             onClick={() => handleOperationClick('X')}
//                         >
//                             X
//                         </button>
//                         <button
//                             className='col m-2 btn btn-outline-dark'
//                             onClick={() => handleOperationClick('AC')}
//                         >
//                             AC
//                         </button>
//                     </div>
//                     {/* Resto de los botones de operaciones */}
//                     {/* ... */}
//                 </div>
//             </div>
//         </>
//     );
// };
