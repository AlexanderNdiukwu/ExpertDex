import React from "react";

const CountryInputField = ({name="Country"}) =>{
    return(
        <div className="flex flex-col w-full h-[70px] rounded-2xl my-5">
            <p>{name}</p>
            <div>

            <input className="w-full border border-black h-[50px] rounded-xl px-3"  placeholder="Select country"/>
            </div>
        </div>
    )
}

export default CountryInputField;