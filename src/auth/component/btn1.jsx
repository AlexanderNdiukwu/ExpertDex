import React from "react";

const Btn1 = ({text="Sign Up", style}) =>{
    return(
        <button className="w-full bg-blue-500 p-3 text-white rounded-xl " >
            {text}
        </button>
    )
}

export default Btn1;