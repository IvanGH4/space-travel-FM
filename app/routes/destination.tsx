import { useState } from 'react';
import styled from 'styled-components';
import { getKeyValue } from '~/utils/getKeyValue';
import { breakpoints, colors, fonts } from '~/utils/styles';

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

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 76px;

  .info {
    max-width: 445px;

    h2 {
      font-size: ${fonts.h2.size};
      line-height: ${fonts.h2.lineHeight};
      color: ${colors.light};
      margin: 37px 0 14px 0;
    }

    p {
      color: ${colors.secondary};
      font-size: ${fonts.bodyText.size};
      line-height: ${fonts.bodyText.lineHeight};
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    justify-content: center;

    .info {
      text-align: center;
      h2 {
        font-size: ${fonts.h2.tablet.size};
        line-height: ${fonts.h2.tablet.lineHeight};
        color: ${colors.light};
        margin: 37px 0 14px 0;
      }

      p {
        color: ${colors.secondary};
        font-size: ${fonts.bodyText.tablet.size};
        line-height: ${fonts.bodyText.tablet.lineHeight};
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    .info {
      h2 {
        font-size: ${fonts.h2.mobile.size};
        line-height: ${fonts.h2.mobile.lineHeight};
        color: ${colors.light};
        margin: 37px 0 14px 0;
      }

      p {
        color: ${colors.secondary};
        font-size: ${fonts.bodyText.mobile.size};
        line-height: ${fonts.bodyText.mobile.lineHeight};
      }
    }
  }
`;

const ImageWrapper = styled.div`
  h5 {
    font-size: ${fonts.h5.size};
    line-height: ${fonts.h5.lineHeight};
    letter-spacing: ${fonts.h5.letterSpacing};
    color: ${colors.light};
    margin-bottom: 97px;

    span {
      color: rgba(255, 255, 255, 0.2);
      margin-right: 28px;
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    h5 {
      font-size: ${fonts.h5.tablet.size};
      line-height: ${fonts.h5.tablet.lineHeight};
      letter-spacing: ${fonts.h5.tablet.letterSpacing};
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    h5 {
      font-size: ${fonts.h5.mobile.size};
      line-height: ${fonts.h5.mobile.lineHeight};
      letter-spacing: ${fonts.h5.mobile.letterSpacing};
    }
  }
`;

const Options = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 285px;

  li {
    margin-right: 35px;

    &:last-child {
      margin-right: 0;
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    margin: 0 auto;
  }
`;

const Button = styled.button`
  text-transform: uppercase;
  background: none;
  border: none;
  border-bottom: solid 3px transparent;
  color: ${colors.secondary};
  padding-bottom: 12px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 35px;
  }

  &.active {
    color: ${colors.light};
    border-bottom: solid 3px ${colors.light};
  }
`;

type StrLocation = 'moon' | 'mars' | 'europa' | 'titan';

export default function Destination() {
  const [selectedLocation, setSelectedLocation] = useState<StrLocation>('moon');

  const location: Location = getKeyValue(destinations, selectedLocation);

  return (
    <Container>
      <ImageWrapper>
        <h5>
          <span>01</span>Pick your destination
        </h5>
        <img src={location.img} alt={location.title} />
      </ImageWrapper>
      <div className="info">
        <Options>
          {Object.keys(destinations).map((item) => (
            <li>
              <Button
                className={item === selectedLocation ? 'active' : ''}
                onClick={() => setSelectedLocation(item as StrLocation)}
              >
                {item}
              </Button>
            </li>
          ))}
        </Options>
        <h2>{location.title}</h2>
        <p>{location.text}</p>
      </div>
    </Container>
  );
}
