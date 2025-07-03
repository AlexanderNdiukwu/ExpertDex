import React from "react";
import InputField from "./component/inputField";
import CountryInputField from "./component/countryInputField";
import Btn1 from "./component/btn1";
import GoogleBtn from "./component/googlebtn";

const SignUp = () =>{
    return(

        <div>

            <div className="hidden md:block">
                this is the desktop
            </div>


        <div className="lg:hidden block" >
             <div className="bg-white justify-center  items-center flex pt-13 flex-col">
            <h1 className="text-[45px] block font-semibold">ExpertDEX</h1>
            <div className="w-full  p-3   ">
                <InputField name={"First Name"}/>
                <InputField name={"Second Name"}/>
                <InputField name={"Email"}/>
                <CountryInputField />
                <div className="flex gap-3 w-full justify-center items-center font-small my-5 mt-5">
                    <input type="checkbox"/>
                    <p>I agree with <span className="text-blue-700">terms and conditions</span></p>
                </div>
                <Btn1 />
                <div className="flex gap-3 w-full justify-center items-center font-small my-5 mt-5">
                    <p>Already have an account?<span className="text-blue-700">Login</span></p>
                </div>
                <div className="flex w-full   justify-center items-center">
                    <hr className="w-[50%] mr-2"/>
                    or
                    <hr className="w-[50%] ml-2"/>
                </div>
                <GoogleBtn text={" continue with Google "} />
                <GoogleBtn text={" continue with Apple "} />
            </div>
        </div>

        </div>
       


        </div>

        


    )
}

export default SignUp