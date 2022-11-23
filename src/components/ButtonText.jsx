import React from "react";


const ButtonText = ({text,onClick}) => {
    
    return (
    <>
    <button
        class="text-Mblue font-semibold flex items-center gap-2
            hover:text-Mblue-200
            active:text-Mblue-300
            disabled:text-Mgray
            transition ease-in-out"
        type="button"
        //disabled
        onClick={onClick}
        >

        {text}

        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
        
    </button>     
    </>
);
}


export default ButtonText;