import React from 'react';
import './styles.css';

const OperationButton = ({ operation, label }) => {
    return (
        <button 
            className="operation-button"
            onClick={operation}
        >
            {label}
        </button>
    );
};

export default OperationButton;
