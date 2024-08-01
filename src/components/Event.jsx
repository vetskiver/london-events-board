import React from 'react';

const Event = (props) => {
    return (
        <td className={`Event ${props.category.toLowerCase().replace(/\s+/g, '-')}`}>
            <img src={props.photo} alt={event} className="Event-photo" />
            <h3>{props.event}</h3>
            <p>{props.description}</p>
            <p><strong>Location:</strong> {props.location}</p>
            <p><strong>Category:</strong> {props.category}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer" className="event-link">
                More Info
            </a>
        </td>
    );
}

export default Event;