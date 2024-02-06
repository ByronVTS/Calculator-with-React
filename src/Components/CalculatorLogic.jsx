import { useEffect, useState } from 'react';

export const CalculatorLogic = () => {
  const [valuesInput, setValuesInput] = useState([]);
  const [resultInput, setResultInput] = useState('');
  const [displayResult, setDisplayResult] = useState('');
  const [operationsLogs, setOperationsLogs] = useState({})

  useEffect(() => {
    const storedOperations = JSON.parse(localStorage.getItem('registroDeOperaciones')) || {};
    setOperationsLogs(storedOperations);
  }, []);


  useEffect( () => {
    localStorage.setItem('registroDeOperaciones', JSON.stringify(operationsLogs))
    console.log(operationsLogs);
  },[operationsLogs])


  const handleDatesChange = (valor, resultado) => {
    const newOperation ={
        id:Date.now(),
        value: valor,
        result: resultado
    }   

    setOperationsLogs(prevState => ({
        ...prevState,
        [newOperation.id]:newOperation
    }))
  };

  const handleButtonClick = (value) => {
    if (/[0-9+\-*/.]/.test(value)) {
      setValuesInput([...valuesInput, value]);
    }
  };

  const handleResult = () => {
    try {
      const expression = valuesInput.join('');
      const result = eval(expression);
      setResultInput(result);
      console.log(resultInput);
      console.log(result);
      handleDatesChange(displayResult,result)
    } catch (error) {
      setResultInput('Error');
    }
  };
  

  const handleResetValue = () => {
    setValuesInput([]);
    setDisplayResult('');
    setResultInput('');
  };

  const handleDelete = () => {
    const updatedValues = [...valuesInput];
    updatedValues.pop();
    setValuesInput(updatedValues);
  };

  useEffect(() => {
    const expression = valuesInput.join('');
    setDisplayResult(expression);
  }, [valuesInput]);

  return {
    displayResult,
    resultInput,
    // result,
    handleButtonClick,
    handleDelete,
    handleResetValue,
    handleResult,
  };
};
