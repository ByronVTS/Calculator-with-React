import React from 'react';

export const Buttons = () => {
    return (
        <>
            <div className='areaResults container text-center '>
                <div className='container text-center '>
                    <input type="text" className="form-control m-2" placeholder="Values" />
                    <input type="text" className="form-control m-2" placeholder="Results" />
                </div>
            </div>

            <div className='areaButtons d-flex justify-content-center container text-center'>
                <div className='areaNumbers  container text-center'>
                <div className='row'>
                    <button className='col m-2 btn btn-outline-success'>1</button>
                    <button className='col m-2 btn btn-outline-success'>2</button>
                    <button className='col m-2 btn btn-outline-success'>3</button>
                </div>
                <div className='row'>
                    <button className='col m-2 btn btn-outline-success'>4</button>
                    <button className='col m-2 btn btn-outline-success'>5</button>
                    <button className='col m-2 btn btn-outline-success'>6</button>
                </div>
                <div className='row'>
                    <button className='col m-2 btn btn-outline-success'>7</button>
                    <button className='col m-2 btn btn-outline-success'>8</button>
                    <button className='col m-2 btn btn-outline-success'>9</button>
                </div>
                <div className='row'>
                    <button className='col m-2 btn btn-outline-success'>😎</button>
                    <button className='col m-2 btn btn-outline-success'>0</button>
                    <button className='col m-2 btn btn-outline-success'>.</button>
                </div>
                </div>

                <div className='areOperations  container text-center'>
                    <div className='row'>
                        <button className='col m-2 btn btn-outline-dark '>X</button>
                        <button className='col m-2 btn btn-outline-dark'>AC</button>
                    </div>
                    <div className='row'>
                        <button className='col m-2 btn btn-outline-dark'>-</button>
                        <button className='col m-2 btn btn-outline-dark'>*</button>
                    </div>
                    <div className='row'>
                        <button className='col m-2 btn btn-outline-dark'>+</button>
                    </div>
                    <div className='row'>
                        <button className='col m-2 btn btn-outline-dark'>/</button>
                        <button className='col m-2 btn btn-outline-dark'>=</button>
                    </div>
                </div>
            </div>
            
        </>
    );
};
