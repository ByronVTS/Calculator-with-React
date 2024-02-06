import { useEffect, useState } from 'react';
import { CalculatorLogic } from './CalculatorLogic';
import { CreateButtons } from './CreateButtons';

export const Buttons = ({ isDarkMode }) => {

        const {

          displayResult,
          resultInput,
          registroEntries,
          handleButtonClick,
          handleDelete,
          handleResetValue,
          handleResult,

        } = CalculatorLogic();

        return(
        <>
            <div className={`d-flex justify-content-center container text-center ${isDarkMode ? 'text-white' : ''}`}>
                <div className='areaLog mt-2'>
                    <ul className='list-group'>
                    <li class="list-group-item active bg-success border-0" aria-current="true">Operation Log</li>
                        {registroEntries.map(({ value, result }, index) => (
                            <li 
                            className={`${isDarkMode ? 'bg-dark-subtle' : ''} text-start list-group-item`}
                            key={index}>
                            {value} =     {result}
                            </li>
                        ))}
                    </ul>
                </div>
                
                <div>
                    <div className='areaResults container text-center '>
                        <div className='container text-center '>
                            <input 
                                type="text" 
                                className={`${isDarkMode ? 'bg-dark-subtle' : ''} form-control m-2`}
                                placeholder="Values"
                                defaultValue={displayResult}
                                readOnly
                            />
                            <input 
                                type="text" 
                                className={`${isDarkMode ? 'bg-dark-subtle' : ''} form-control m-2`}
                                placeholder="Results"
                                value={resultInput}
                                onChange={(e) => {}}
                            />
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
                                >   Delete
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
                </div>
                
            </div>

        </>
    );
};


