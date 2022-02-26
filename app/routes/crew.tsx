import SectionTitle from '~/components/Global/SectionTitle';
import { useState } from 'react';
import { Container, Content, Dot } from '~/components/crew/StyledCom';

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
