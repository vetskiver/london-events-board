import React from 'react';
import Event from './Event';
import britishMuseumImg from '../assets/british_museum.png'
import royalAlbertHallImg from '../assets/royal_albert_hall.jpg'
import tateModernImg from '../assets/tate_modern.jpg'
import nationalTheatreImg from '../assets/national_theatre.jpg'
import boroughMarketImg from '../assets/borough_market.jpeg'
import westminsterAbbeyImg from '../assets/westminster_abbey.jpg'
import towerPierImg from '../assets/tower_pier.jpg'
import BFIsouthbankImg from '../assets/BFI_southbank.jpeg'
import hydeParkImg from '../assets/hyde_park.jpg'
import wembleyStadiumImg from '../assets/wembley_stadium.jpg'
import comedyStoreImg from '../assets/comedy_store.jpg'
import scienceMuseumImg from '../assets/science_museum.jpg'
import kewGardensImg from '../assets/kew_gardens.jpeg'
import royalOperaHouseImg from '../assets/royal_opera_house.jpg'
import spitalfieldsMarketsImg from '../assets/spitalfields_markets.jpg'



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
            photo: royalAlbertHallImg,
            link: 'https://www.royalalberthall.com'
        },
        {
            event: 'Art Exhibition',
            description: 'Modern art display.',
            location: 'Tate Modern',
            color: 'lightgreen',
            category: 'Cultural',
            photo: tateModernImg,
            link: 'https://www.tate.org.uk'
        },
        {
            event: 'Theatre Show',
            description: 'Watch a classic play.',
            location: 'National Theatre',
            color: 'purple',
            category: 'Cultural',
            photo: nationalTheatreImg,
            link: 'https://www.nationaltheatre.org.uk'
        },
        {
            event: 'Food Market',
            description: 'Taste local and international dishes.',
            location: 'Borough Market',
            color: 'orange',
            category: 'Markets and Fairs',
            photo: boroughMarketImg,
            link: 'https://www.boroughmarket.org.uk'
        },
        {
            event: 'Historical Tour',
            description: 'Guided tour of London\'s landmarks.',
            location: 'Westminster Abbey',
            color: 'yellow',
            category: 'Cultural',
            photo: westminsterAbbeyImg,
            link: 'https://www.westminster-abbey.org'
        },
        {
            event: 'Boat Cruise',
            description: 'Cruise along the River Thames.',
            location: 'Tower Pier',
            color: 'lightblue',
            category: 'Outdoor and Nature',
            photo: towerPierImg,
            link: 'https://www.thamesclippers.com'
        },
        {
            event: 'Film Festival',
            description: 'Screenings of independent films.',
            location: 'BFI Southbank',
            color: 'lightcoral',
            category: 'Educational',
            photo: BFIsouthbankImg,
            link: 'https://www.bfi.org.uk'
        },
        {
            event: 'Music Festival',
            description: 'Various artists performing.',
            location: 'Hyde Park',
            color: 'lightgreen',
            category: 'Music',
            photo: hydeParkImg,
            link: 'https://www.hydeparkwinterwonderland.com'
        },
        {
            event: 'Sports Event',
            description: 'Watch a football match.',
            location: 'Wembley Stadium',
            color: 'purple',
            category: 'Sports',
            photo: wembleyStadiumImg,
            link: 'https://www.wembleystadium.com'
        },
        {
            event: 'Comedy Night',
            description: 'Enjoy stand-up comedy.',
            location: 'The Comedy Store',
            color: 'pink',
            category: 'Music',
            photo: comedyStoreImg,
            link: 'https://thecomedystore.co.uk'
        },
        {
            event: 'Science Museum Visit',
            description: 'Interactive exhibits and displays.',
            location: 'Science Museum',
            color: 'teal',
            category: 'Educational',
            photo: scienceMuseumImg,
            link: 'https://www.sciencemuseum.org.uk'
        },
        {
            event: 'Garden Walk',
            description: 'Stroll through beautiful gardens.',
            location: 'Kew Gardens',
            color: 'lightgreen',
            category: 'Outdoor and Nature',
            photo: kewGardensImg,
            link: 'https://www.kew.org'
        },
        {
            event: 'Opera Performance',
            description: 'Experience a classic opera.',
            location: 'Royal Opera House',
            color: 'darkred',
            category: 'Cultural',
            photo: royalOperaHouseImg,
            link: 'https://www.roh.org.uk'
        },
        {
            event: 'Craft Fair',
            description: 'Handmade crafts and goods.',
            location: 'Spitalfields Market',
            color: 'beige',
            category: 'Markets and Fairs',
            photo: spitalfieldsMarketsImg,
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