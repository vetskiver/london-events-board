import React from 'react';
import Event from './Event';

const Grid = () => {
    const events = [
        { event: 'Museum Visit', description: 'Explore ancient artifacts.', location: 'British Museum', color: 'lightblue', category: 'Cultural' },
        { event: 'Concert', description: 'Live music performance.', location: 'Royal Albert Hall', color: 'lightcoral', category: 'Music' },
        { event: 'Art Exhibition', description: 'Modern art display.', location: 'Tate Modern', color: 'lightgreen', category: 'Cultural' },
        { event: 'Theatre Show', description: 'Watch a classic play.', location: 'National Theatre', color: 'purple', category: 'Cultural' },
        { event: 'Food Market', description: 'Taste local and international dishes.', location: 'Borough Market', color: 'orange', category: 'Markets and Fairs' },
        { event: 'Historical Tour', description: 'Guided tour of London\'s landmarks.', location: 'Westminster Abbey', color: 'yellow', category: 'Cultural' },
        { event: 'Boat Cruise', description: 'Cruise along the River Thames.', location: 'Tower Pier', color: 'lightblue', category: 'Outdoor and Nature' },
        { event: 'Film Festival', description: 'Screenings of independent films.', location: 'BFI Southbank', color: 'lightcoral', category: 'Educational' },
        { event: 'Music Festival', description: 'Various artists performing.', location: 'Hyde Park', color: 'lightgreen', category: 'Music' },
        { event: 'Sports Event', description: 'Watch a football match.', location: 'Wembley Stadium', color: 'purple', category: 'Sports' },
        { event: 'Comedy Night', description: 'Enjoy stand-up comedy.', location: 'The Comedy Store', color: 'pink', category: 'Music' },
        { event: 'Science Museum Visit', description: 'Interactive exhibits and displays.', location: 'Science Museum', color: 'teal', category: 'Educational' },
        { event: 'Garden Walk', description: 'Stroll through beautiful gardens.', location: 'Kew Gardens', color: 'lightgreen', category: 'Outdoor and Nature' },
        { event: 'Opera Performance', description: 'Experience a classic opera.', location: 'Royal Opera House', color: 'darkred', category: 'Cultural' },
        { event: 'Craft Fair', description: 'Handmade crafts and goods.', location: 'Spitalfields Market', color: 'beige', category: 'Markets and Fairs' }
    ];    
    return (
        <div className='Grid'>
            {events.map((event, index) => (
                <Event 
                    key={index} 
                    event={event.event} 
                    description={event.description} 
                    location={event.location} 
                    category={event.category}
                    color={event.color} 
                />
            ))}
        </div>
    );
}

export default Grid;