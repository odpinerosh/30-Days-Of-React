import React from "react";
import './UserCard.css';
import Users from './data/Users';

const UserCard = (props) => {

    const arrSkills = Users.skills.slice();
    const skillsList = arrSkills.map( skill => <li key={skill}>{skill}</li>);

    return (
        <section className="card-container">
            <img src={Users.photo} alt={Users.name} className="user-image"/>
            <h3 className="user-name">{Users.name} <span className="user-check">&#10003;</span></h3>
            <p className="user-position">{Users.position}, {Users.origin}</p>
            <p className="user-skills"><strong>SKILLS</strong></p>
            <ul className="skills-list">
                {skillsList}
            </ul>
            
            <p className="user-joined">Joined on {Users.joined}</p>
        </section>
    );

}

export default UserCard;