import React from "react";


const Button = ({text,onClick}) => {
    
    return (
    <>
    <button
        class="bg-Mblue text-white py-[18px] px-[60px] rounded-xl shadow-xl shadow-Mblue font-semibold
            hover:bg-Mblue-200 hover:shadow-2xl 
            active:bg-Mblue-300 active:shadow-3xl 
            disabled:bg-Mgray disabled:shadow-none
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


export default Button;