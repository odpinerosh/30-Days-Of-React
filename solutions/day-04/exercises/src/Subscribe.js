import React from "react";
import SubsForm from "./SubsForm";
import './Subscribe.css';

const Subscribe = () => {

    return (
        <section className='subs-container'>
            <h2 className="subs-h2">subscribe</h2>
            <p className="subs-p">Sign up with your email address to receive news and updates.</p>
            <SubsForm />
        </section>
    );

}

export default Subscribe;