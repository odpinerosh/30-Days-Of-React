import React from "react";
import cssLogo from './images/css_logo.png';
import jsLogo from './images/js_logo.png';
import htmlLogo from './images/html_logo.png';
import reactLogo from './images/react_logo.png';
import './FrontEnd.css';

const FrontEnd = () => {
    
    return (
        <section className = 'fe-tech'>
            <p>Front End Technologies</p>
            <div className="img-container">
                <ul className="img-list">
                    <li><img src={htmlLogo} className="img-tech" alt="html logo"></img></li>
                    <li><img src={cssLogo} className="img-tech" alt="css logo"></img></li>
                    <li><img src={jsLogo} className="img-tech" alt="js logo"></img></li>
                    <li><img src={reactLogo} className="img-tech" alt="react logo"></img></li>
                </ul>
            </div>
        </section>
    );
}

export default FrontEnd;