import styled from 'styled-components';
import { breakpoints, colors, fonts } from '~/utils/styles';

interface Props {
  small_title: string;
  title: string;
  text: string;
}

const Container = styled.div`
  max-width: 450px;
  margin-top: 250px;

  @media (max-width: ${breakpoints.tablet}px) {
    margin-top: 106px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${breakpoints.mobile}px) {
    margin-top: 48px;
  }
`;

const SmallTitle = styled.h5`
  font-size: ${fonts.h5.size};
  line-height: ${fonts.h5.lineHeight};
  letter-spacing: ${fonts.h5.letterSpacing};
  color: ${colors.secondary};

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: ${fonts.h5.tablet.size};
    line-height: ${fonts.h5.tablet.lineHeight};
    letter-spacing: ${fonts.h5.tablet.letterSpacing};
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: ${fonts.h5.mobile.size};
    line-height: ${fonts.h5.mobile.lineHeight};
    letter-spacing: ${fonts.h5.mobile.letterSpacing};
  }
`;

const Title = styled.h1`
  font-size: ${fonts.h1.size};
  line-height: ${fonts.h1.lineHeight};
  color: ${colors.light};
  margin: 24px 0;

  @media (max-width: ${breakpoints.tablet}px) {
    line-height: ${fonts.h1.tablet.lineHeight};
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: ${fonts.h1.mobile.size};
    line-height: ${fonts.h1.mobile.lineHeight};
  }
`;

const Text = styled.p`
  font-size: ${fonts.bodyText.size};
  line-height: ${fonts.bodyText.lineHeight};
  color: ${colors.secondary};

  @media (max-width: ${breakpoints.tablet}px) {
    font-size: ${fonts.bodyText.tablet.size};
    line-height: ${fonts.bodyText.tablet.lineHeight};
  }

  @media (max-width: ${breakpoints.mobile}px) {
    font-size: ${fonts.bodyText.mobile.size};
    line-height: ${fonts.bodyText.mobile.lineHeight};
  }
`;

export default function Intro({ small_title, title, text }: Props) {
  return (
    <Container>
      <SmallTitle>{small_title}</SmallTitle>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Container>
  );
}
