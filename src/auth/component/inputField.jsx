import React from "react";

const InputField = ({name}) =>{
    return(
        <div className="flex flex-col w-full h-[70px] rounded-2xl my-5">
            <p>{name}</p>
            <input className="w-full border-2 border-black h-[70px] font-semibold rounded-xl p-2"/>
        </div>
    )
}

export default InputField