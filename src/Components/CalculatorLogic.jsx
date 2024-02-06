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

  const [registroEntries, setRegistroEntries] = useState([])

       useEffect(() => {
        // Actualizar el estado con los objetos que contienen solo 'value' y 'result'
        const newRegistroEntries = Object.values(operationsLogs).map(({ value, result }) => ({
          value,
          result,
        }));
        setRegistroEntries(newRegistroEntries);
      }, [operationsLogs]);

  return {
    displayResult,
    resultInput,
    operationsLogs,
    registroEntries,
    handleButtonClick,
    handleDelete,
    handleResetValue,
    handleResult,
  };
};
