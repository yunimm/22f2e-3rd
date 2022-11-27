import React from 'react';

const ButtonSelect = ({ text, onAnswerQuestion }) => {
    return (
        <>
            <button
                className="button-select"
                type="button"
                onClick={onAnswerQuestion}
            >
                {text}
            </button>
        </>
    );
};

const ButtonSelectError = ({ text, onAnswerQuestion }) => {
    return (
        <>
            <button
                className="button-select border-Mred"
                type="button"
                onClick={onAnswerQuestion}
            >
                {text}
            </button>
        </>
    );
};

export { ButtonSelect, ButtonSelectError };
