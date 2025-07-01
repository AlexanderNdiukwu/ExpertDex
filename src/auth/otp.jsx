import React from "react";
import InputField from "./component/inputField";
import CountryInputField from "./component/countryInputField";
import Btn1 from "./component/btn1";
import GoogleBtn from "./component/googlebtn";

const Otp = () =>{
    return(
        <div className="bg-white justify-center items-center flex pt-15 flex-col">
            <h1 className="text-[45px] block font-semibold">ExpertDEX</h1>
            <p className="mt-3">Enter the OTP sent to your email</p>
            <div className="w-full  p-3   ">
                <InputField name={"Enter OTP"}/>
                <div className="  pt-4">

                 <Btn1 text="continue" />
                </div>
                 
            </div>
        </div>
    )
}

export default Otp