import React from 'react';

const ButtonText = ({ text, addStep }) => {
    return (
        <>
            <button
                className="w-[100px] text-Mblue font-semibold flex items-center gap-2
            hover:text-Mblue-200
            active:text-Mblue-300
            disabled:text-Mgray
            transition ease-in-out"
                type="button"
                onClick={addStep}
            >
                <span>{text}</span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-[30%]"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                </svg>
            </button>
        </>
    );
};

export default ButtonText;
