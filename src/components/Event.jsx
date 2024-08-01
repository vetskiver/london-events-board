import React from 'react';

const Event = (props) => {
    return (
        <td className={`Event ${props.category.toLowerCase().replace(/\s+/g, '-')}`}>
            <h4>{props.event}</h4>
            <p>{props.description}</p>
            <p><strong>Location:</strong> {props.location}</p>
            <p><strong>Category:</strong> {props.category}</p>
        </td>
    );
}

export default Event;