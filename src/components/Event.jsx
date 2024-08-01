import React from 'react';

const Event = ({ title, description, data, location }) => {
    return (
        <div className="event">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Location:</strong> {location}</p>
        </div>
    )
}

export default Event;