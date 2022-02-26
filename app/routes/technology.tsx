import { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '~/components/Global/SectionTitle';
import RoundBtn from '~/components/buttons/RoundBtn';
import { breakpoints, colors, fonts } from '~/utils/styles';

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

const Container = styled.section`
  margin-top: 76px;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 137px;

  .info {
    display: flex;
    align-items: flex-start;
  }

  .picture {
    max-width: 515px;

    img {
      width: 100%;
      object-fit: cover;
    }

    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    margin-top: 56px;
    flex-direction: column-reverse;

    .picture {
      max-width: 100%;
      .desktop {
        display: none;
      }
      .mobile {
        display: block;
      }
    }

    .info {
      margin: 56px auto 0 auto;
      flex-direction: column;
      text-align: center;
      align-items: center;
    }

    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 44px;
    }
  }
`;

const Description = styled.div`
  margin-left: 80px;
  max-width: 470px;

  h3 {
    font-size: ${fonts.h3.size};
    line-height: ${fonts.h3.lineHeight};
    color: ${colors.light};
    margin-bottom: 17px;
  }

  p {
    color: ${colors.secondary};
    font-size: ${fonts.bodyText.size};
    line-height: ${fonts.bodyText.lineHeight};
  }

  @media (max-width: ${breakpoints.tablet}px) {
    max-width: unset;
    margin-left: 0;

    h3 {
      font-size: ${fonts.h3.tablet.size};
      line-height: ${fonts.h3.tablet.lineHeight};
      text-align: center;
    }

    p {
      font-size: ${fonts.bodyText.tablet.size};
      line-height: ${fonts.bodyText.tablet.lineHeight};
    }
  }

  @media (max-width: ${breakpoints.mobile}px) {
    h3 {
      font-size: ${fonts.h3.mobile.size};
      line-height: ${fonts.h3.mobile.lineHeight};
    }

    p {
      font-size: ${fonts.bodyText.mobile.size};
      line-height: ${fonts.bodyText.mobile.lineHeight};
    }
  }
`;

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
