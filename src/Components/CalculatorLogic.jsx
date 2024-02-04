import { useEffect, useState } from 'react';

export const CalculatorLogic = () => {
  const [valuesInput, setValuesInput] = useState([]);
  const [resultInput, setResultInput] = useState('');
  const [displayResult, setDisplayResult] = useState('');

  const handleButtonClick = (value) => {
    setValuesInput([...valuesInput, value]);
  };

  const handleResult = () => {
    try {
      const expression = valuesInput.join('');
      const result = eval(expression);
      setResultInput(result);
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
    handleButtonClick,
    handleDelete,
    handleResetValue,
    handleResult,
  };
};
