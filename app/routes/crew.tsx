import styled from 'styled-components';
import SectionTitle from '~/components/Global/SectionTitle';
import { breakpoints, colors, fonts } from '~/utils/styles';
import { useEffect, useState } from 'react';

const crew_members = {
  1: {
    role: 'Commander',
    name: 'Douglas Hurley',
    description:
      'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    img: '/img/image-douglas-hurley.png',
  },
  2: {
    role: 'Mission Specialist ',
    name: 'MARK SHUTTLEWORTH',
    description:
      'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    img: '/img/image-mark-shuttleworth.png',
  },
  3: {
    role: 'PILOT',
    name: 'Victor Glover',
    description:
      'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
    img: '/img/image-victor-glover.png',
  },
  4: {
    role: 'Flight Engineer',
    name: 'Anousheh Ansari',
    description:
      'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
    img: '/img/image-anousheh-ansari.png',
  },
};

const Container = styled.section`
  margin-top: 76px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    max-width: 550px;

    h4 {
      font-size: ${fonts.h4.size};
      line-height: ${fonts.h4.lineHeight};
      color: rgba(255, 255, 255, 0.5);
    }

    h3 {
      font-size: ${fonts.h3.size};
      line-height: ${fonts.h3.lineHeight};
      color: ${colors.light};
      margin: 15px 0 27px 0;
    }

    p {
      color: ${colors.secondary};
      font-size: ${fonts.bodyText.size};
      line-height: ${fonts.bodyText.lineHeight};
    }

    .dots {
      margin-top: 80px;
    }
  }

  .crew-image {
    max-width: 570px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;
    .info {
      text-align: center;
      h4 {
        letter-spacing: ${fonts.h4.tablet.letterSpacing};
      }

      h3 {
        font-size: ${fonts.h3.tablet.size};
        line-height: ${fonts.h3.tablet.lineHeight};
      }

      p {
        font-size: ${fonts.bodyText.tablet.size};
        line-height: ${fonts.bodyText.tablet.lineHeight};
      }

      .dots {
        margin-bottom: 40px;
      }
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    .info {
      h4 {
        letter-spacing: ${fonts.h4.mobile.letterSpacing};
        line-height: ${fonts.h4.mobile.lineHeight};
        font-size: ${fonts.h4.mobile.size};
      }

      h3 {
        font-size: ${fonts.h3.mobile.size};
        line-height: ${fonts.h3.mobile.lineHeight};
      }

      p {
        font-size: ${fonts.bodyText.mobile.size};
        line-height: ${fonts.bodyText.mobile.lineHeight};
      }
    }
  }
`;

const Dot = styled.button`
  border: none;
  background: rgba(255, 255, 255, 0.1);
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 24px;
  }

  &.active {
    background: rgba(255, 255, 255, 1);
  }
`;

type MembersOptions = 1 | 2 | 3 | 4;

export default function Crew() {
  const [selectedMember, setSelectedMember] = useState<MembersOptions>(1);

  const crewMember = crew_members[selectedMember];

  const handleClick = (n: MembersOptions) => {
    setSelectedMember(n);
  };

  return (
    <Container>
      <SectionTitle span_text="02" title="meet your crew" />
      <Content>
        <div className="info">
          <h4>{crewMember.role}</h4>
          <h3>{crewMember.name}</h3>
          <p>{crewMember.description}</p>
          <div className="dots">
            {[1, 2, 3, 4].map((item) => (
              <Dot
                key={item}
                className={selectedMember === item ? 'active' : ''}
                onClick={() => handleClick(item as MembersOptions)}
              />
            ))}
          </div>
        </div>
        <div className="crew-image">
          <img src={crewMember.img} alt={crewMember.name} />
        </div>
      </Content>
    </Container>
  );
}
