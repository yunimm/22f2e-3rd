import React from "react";


const ButtonSelect = ({text,onClick}) => {
    
    return (
    <>
    <button
        class="bg-white text-Mblue-300 py-5 w-full border border-Mblue rounded-xl font-semibold text-center 
            hover:bg-Mblue-100
            active:bg-Mblue active:text-white
            disabled:text-Mgray
            transition ease-in-out"
        type="button"
        //disabled
        onClick={onClick}
        >

        {text}
        
    </button>     
    </>
);
}


export default ButtonSelect;