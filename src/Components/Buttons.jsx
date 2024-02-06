import { useEffect, useState } from 'react';
import { CalculatorLogic } from './CalculatorLogic';
import { CreateButtons } from './CreateButtons';

export const Buttons = () => {

        const {

          displayResult,
          resultInput,
        //   result,
          handleButtonClick,
          handleDelete,
          handleResetValue,
          handleResult,

        } = CalculatorLogic();

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
                        value={resultInput} />
                </div>
            </div>

            <div className='areaButtons d-flex justify-content-center container text-center'>
            
                <div className='areaNumbers  container text-center'>
                    <CreateButtons handleNumberClick={handleButtonClick} numbers={[1,2,3]}/>
                    <CreateButtons handleNumberClick={handleButtonClick} numbers={[4,5,6]}/>
                    <CreateButtons handleNumberClick={handleButtonClick} numbers={[7,8,9]}/>
                    <CreateButtons handleNumberClick={handleButtonClick} numbers={['😎',0,'.']}/>
                </div>

                <div className='areOperations  container text-center'>
                    <div className='row'>
                        <button 
                            className='col m-2 btn btn-outline-success'
                            onClick={() => handleDelete()}
                        >   BORRAR
                        </button>
                        <button 
                            className='col m-2 btn btn-outline-success'
                            onClick={() => handleResetValue()}
                        >   AC
                        </button>
                    </div>

                    <CreateButtons handleNumberClick={handleButtonClick} numbers={['/','*']}/>
                    <CreateButtons handleNumberClick={handleButtonClick} numbers={['+']}/>

                    <div className='row'>
                        <button 
                            className='col m-2 btn btn-outline-success'
                            onClick={() => handleButtonClick('-')}
                        >   -
                        </button>
                        <button 
                            className='col m-2 btn btn-outline-success'
                            onClick={() => {
                                handleResult();
                                }}
                        >   =
                        </button>
                    </div>
                </div>
            </div>

            
        </>
    );
};


