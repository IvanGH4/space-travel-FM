import { useState } from 'react';
import {
  Button,
  Container,
  Options,
  TravelInfo,
} from '~/components/Destinations/StyledComp';
import SectionTitle from '~/components/Global/SectionTitle';
import { getKeyValue } from '~/utils/getKeyValue';

interface Location {
  title: string;
  text: string;
  avg_distance: string;
  est_travel_time: string;
  img: string;
}

const destinations = {
  moon: {
    title: 'moon',
    text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    avg_distance: '384400 km',
    est_travel_time: '3 days',
    img: '/img/image-moon.png',
  },
  mars: {
    title: 'mars',
    text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    avg_distance: '225 mil. km',
    est_travel_time: '9 months',
    img: '/img/image-mars.png',
  },
  europa: {
    title: 'europa',
    text: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    avg_distance: '628 mil km',
    est_travel_time: '3 years',
    img: '/img/image-europa.png',
  },
  titan: {
    title: 'titan',
    text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    avg_distance: '1.6 bil. km',
    est_travel_time: '7 years',
    img: '/img/image-titan.png',
  },
};

type StrLocation = 'moon' | 'mars' | 'europa' | 'titan';

export default function Destination() {
  const [selectedLocation, setSelectedLocation] = useState<StrLocation>('moon');

  const location: Location = getKeyValue(destinations, selectedLocation);

  const handleClick = (str: StrLocation) => {
    setSelectedLocation(str);
  };

  return (
    <Container>
      <div>
        <SectionTitle span_text="01" title="Pick your destination" />
        <div className="location-image">
          <img src={location.img} alt={location.title} />
        </div>
      </div>
      <div className="info">
        <Options>
          {Object.keys(destinations).map((item) => (
            <li key={Math.random() * 100}>
              <Button
                className={item === selectedLocation ? 'active' : ''}
                onClick={() => handleClick(item as StrLocation)}
              >
                {item}
              </Button>
            </li>
          ))}
        </Options>
        <h2>{location.title}</h2>
        <p className="destination-text">{location.text}</p>
        <TravelInfo>
          <div>
            <p>Avg. distance</p>
            <h6>{location.avg_distance}</h6>
          </div>
          <div>
            <p>Est. travel time</p>
            <h6>{location.est_travel_time}</h6>
          </div>
        </TravelInfo>
      </div>
    </Container>
  );
}
