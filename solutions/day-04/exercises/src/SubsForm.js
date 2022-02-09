import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import './SubsForm.css';


const SubsForm = () => {

    return (
        <form className='subs-form'>
           <InputField inputID="First Name" gridArea="first" /> 
           <InputField inputID="Last Name"  gridArea="last"/> 
           <InputField inputID="Email" gridArea="mail" /> 
           <Button gridArea="button"/>
        </form>
    );

}

export default SubsForm;

