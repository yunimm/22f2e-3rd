import React from 'react';
const Dialogue = ({ src, chName, children }) => {
    return (
        <>
            <div className="w-full flex items-center gap-5">
                <div className="flex justify-center items-center flex-col gap-1">
                    {src && (
                        <img
                            className="w-[120px]"
                            src={src}
                            alt="po on screen"
                        />
                    )}
                    <span className="text-base">{chName}</span>
                </div>
                {children}
            </div>
        </>
    );
};

export default Dialogue;
