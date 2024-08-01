import React from 'react';
import Event from './Event';
import britishMuseumImg from '../assets/british_museum.png'

const Grid = () => {
    const events = [
        {
            event: 'Museum Visit',
            description: 'Explore ancient artifacts.',
            location: 'British Museum',
            color: 'lightblue',
            category: 'Cultural',
            photo: britishMuseumImg,
            link: 'https://www.britishmuseum.org'
        },
        {
            event: 'Concert',
            description: 'Live music performance.',
            location: 'Royal Albert Hall',
            color: 'lightcoral',
            category: 'Music',
            link: 'https://www.royalalberthall.com'
        },
        {
            event: 'Art Exhibition',
            description: 'Modern art display.',
            location: 'Tate Modern',
            color: 'lightgreen',
            category: 'Cultural',
            link: 'https://www.tate.org.uk'
        },
        {
            event: 'Theatre Show',
            description: 'Watch a classic play.',
            location: 'National Theatre',
            color: 'purple',
            category: 'Cultural',
            link: 'https://www.nationaltheatre.org.uk'
        },
        {
            event: 'Food Market',
            description: 'Taste local and international dishes.',
            location: 'Borough Market',
            color: 'orange',
            category: 'Markets and Fairs',
            link: 'https://www.boroughmarket.org.uk'
        },
        {
            event: 'Historical Tour',
            description: 'Guided tour of London\'s landmarks.',
            location: 'Westminster Abbey',
            color: 'yellow',
            category: 'Cultural',
            link: 'https://www.westminster-abbey.org'
        },
        {
            event: 'Boat Cruise',
            description: 'Cruise along the River Thames.',
            location: 'Tower Pier',
            color: 'lightblue',
            category: 'Outdoor and Nature',
            link: 'https://www.thamesclippers.com'
        },
        {
            event: 'Film Festival',
            description: 'Screenings of independent films.',
            location: 'BFI Southbank',
            color: 'lightcoral',
            category: 'Educational',
            link: 'https://www.bfi.org.uk'
        },
        {
            event: 'Music Festival',
            description: 'Various artists performing.',
            location: 'Hyde Park',
            color: 'lightgreen',
            category: 'Music',
            link: 'https://www.hydeparkwinterwonderland.com'
        },
        {
            event: 'Sports Event',
            description: 'Watch a football match.',
            location: 'Wembley Stadium',
            color: 'purple',
            category: 'Sports',
            link: 'https://www.wembleystadium.com'
        },
        {
            event: 'Comedy Night',
            description: 'Enjoy stand-up comedy.',
            location: 'The Comedy Store',
            color: 'pink',
            category: 'Music',
            link: 'https://thecomedystore.co.uk'
        },
        {
            event: 'Science Museum Visit',
            description: 'Interactive exhibits and displays.',
            location: 'Science Museum',
            color: 'teal',
            category: 'Educational',
            link: 'https://www.sciencemuseum.org.uk'
        },
        {
            event: 'Garden Walk',
            description: 'Stroll through beautiful gardens.',
            location: 'Kew Gardens',
            color: 'lightgreen',
            category: 'Outdoor and Nature',
            link: 'https://www.kew.org'
        },
        {
            event: 'Opera Performance',
            description: 'Experience a classic opera.',
            location: 'Royal Opera House',
            color: 'darkred',
            category: 'Cultural',
            link: 'https://www.roh.org.uk'
        },
        {
            event: 'Craft Fair',
            description: 'Handmade crafts and goods.',
            location: 'Spitalfields Market',
            color: 'beige',
            category: 'Markets and Fairs',
            link: 'https://www.spitalfields.co.uk'
        }
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
                    photo={event.photo}
                    link={event.link}
                />
            ))}
        </div>
    );
}

export default Grid;