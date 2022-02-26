import styled from 'styled-components';
import { breakpoints, colors, fonts } from '~/utils/styles';

interface Props {
  span_text: string;
  title: string;
}

const Title = styled.h5`
  font-size: ${fonts.h5.size};
  line-height: ${fonts.h5.lineHeight};
  letter-spacing: ${fonts.h5.letterSpacing};
  color: ${colors.light};
  margin-bottom: 97px;

  span {
    color: rgba(255, 255, 255, 0.2);
    margin-right: 28px;
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

export default function SectionTitle({ span_text, title }: Props) {
  return (
    <Title>
      <span>{span_text}</span>
      {title}
    </Title>
  );
}
