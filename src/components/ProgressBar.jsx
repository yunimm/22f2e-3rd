import React from 'react';

const ProgressBar = ({ step }) => {
    return (
        <ul>
            <li
                data-active={step === 1}
                className="bg-Mgray-200 w-3.5 h-3.5 rounded-full mb-3"
            />
            <li
                data-active={step === 2}
                className="bg-Mgray-200 w-3.5 h-3.5 rounded-full mb-3"
            />
            <li
                data-active={step === 3}
                className="bg-Mgray-200 w-3.5 h-3.5 rounded-full mb-3"
            />
            <li className="bg-Mgray-200 w-3.5 h-3.5 rounded-full mb-3" />
            <li className="bg-Mgray-200 w-3.5 h-3.5 rounded-full mb-3" />
            <li className="bg-Mgray-200 w-3.5 h-3.5 rounded-full mb-3" />
            <li className="bg-Mgray-200 w-3.5 h-3.5 rounded-full mb-3" />
            <li className="bg-Mgray-200 w-3.5 h-3.5 rounded-full" />
        </ul>
    );
};

export default ProgressBar;
