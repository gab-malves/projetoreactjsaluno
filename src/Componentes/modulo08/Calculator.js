import React, { useState } from 'react';
import OperationButton from './OperationButton';
import './styles.css';

const Calculator = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [result, setResult] = useState(null);

    // Functions to be passed as props
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => b !== 0 ? a / b : 'Não é possível dividir por zero';

    // Function to handle the operation execution
    const executeOperation = (operation, operationName) => {
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);

        if (isNaN(num1) || isNaN(num2)) {
            setResult('Por favor, insira números válidos');
            return;
        }

        const calculatedResult = operation(num1, num2);
        setResult(`${operationName}: ${calculatedResult}`);
    };

    return (
        <div className="function-demo-container">
            <h2 className="title">Calculadora com Funções como Props</h2>
            
            <p className="description">
                Este é um exemplo de como passar funções como props entre componentes React.
                Cada operação matemática é uma função que é passada para o componente OperationButton.
            </p>

            <div className="calculator-section">
                <input
                    type="number"
                    value={number1}
                    onChange={(e) => setNumber1(e.target.value)}
                    placeholder="Digite o primeiro número"
                    className="number-input"
                />
                
                <input
                    type="number"
                    value={number2}
                    onChange={(e) => setNumber2(e.target.value)}
                    placeholder="Digite o segundo número"
                    className="number-input"
                />

                <div className="operation-buttons">
                    <OperationButton
                        operation={() => executeOperation(add, 'Soma')}
                        label="Somar"
                    />
                    <OperationButton
                        operation={() => executeOperation(subtract, 'Subtração')}
                        label="Subtrair"
                    />
                    <OperationButton
                        operation={() => executeOperation(multiply, 'Multiplicação')}
                        label="Multiplicar"
                    />
                    <OperationButton
                        operation={() => executeOperation(divide, 'Divisão')}
                        label="Dividir"
                    />
                </div>

                {result && (
                    <div className="result-display">
                        <strong>Resultado:</strong> {result}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Calculator;
