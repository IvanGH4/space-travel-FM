import { useState } from 'react';
import SectionTitle from '~/components/Global/SectionTitle';
import RoundBtn from '~/components/buttons/RoundBtn';
import { Container, Content, Description } from '~/components/tech/StyledComp';

const Techs = {
  1: {
    title: 'LAUNCH VEHICLE',
    text: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from the surface of Earth to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it is quite an awe-inspiring sight on the launch pad!',
    img: '/img/image-launch-vehicle-portrait.jpg',
    img_mobile: '/img/image-launch-vehicle-landscape.jpg',
  },
  2: {
    title: 'SPACEPORT',
    text: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    img: '/img/image-spaceport-portrait.jpg',
    img_mobile: '/img/image-spaceport-landscape.jpg',
  },
  3: {
    title: 'SPACE CAPSULE',
    text: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the  atmosphere of the Earth without wings. Our capsule is where you will spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
    img: '/img/image-space-capsule-portrait.jpg',
    img_mobile: '/img/image-space-capsule-landscape.jpg',
  },
};

export default function Technology() {
  const [selectedTech, setSelectedTech] = useState<1 | 2 | 3>(1);

  const tech = Techs[selectedTech];

  return (
    <Container>
      <SectionTitle span_text="03" title="SPACE LAUNCH 101" />
      <Content>
        <div className="info">
          <div className="buttons">
            <RoundBtn
              number_str="1"
              active={selectedTech === 1}
              onClick={() => setSelectedTech(1)}
            />
            <RoundBtn
              number_str="2"
              active={selectedTech === 2}
              onClick={() => setSelectedTech(2)}
            />
            <RoundBtn
              number_str="3"
              active={selectedTech === 3}
              onClick={() => setSelectedTech(3)}
            />
          </div>
          <Description>
            <h3>{tech.title}</h3>
            <p>{tech.text}</p>
          </Description>
        </div>
        <div className="picture">
          <img className="desktop" src={tech.img} alt={tech.title} />
          <img className="mobile" src={tech.img_mobile} alt={tech.title} />
        </div>
      </Content>
    </Container>
  );
}
