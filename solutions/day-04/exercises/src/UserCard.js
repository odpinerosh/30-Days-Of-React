import React from "react";
import './UserCard.css';
import Users from './data/Users';

const UserCard = (props) => {

    const arrSkills = Users.skills.slice();
    const skillsList = arrSkills.map( skill => <li key={skill}>{skill}</li>);

    return (
        <section className="card-container">
            <img src={Users.photo} alt={Users.name} className="user-image"/>
            <p className="user-name">{Users.name}</p>
            <p className="user-position">{Users.position}, {Users.origin}</p>
            <p className="user-skills"><strong>SKILLS</strong>
                <ul className="skills-list">
                    {skillsList}
                </ul>
            </p>
            <p className="user-joined">Joined on {Users.joined}</p>
        </section>
    );

}

export default UserCard;