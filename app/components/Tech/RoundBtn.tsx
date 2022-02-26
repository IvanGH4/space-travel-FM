import styled from 'styled-components';
import { breakpoints, colors, fonts } from '~/utils/styles';

interface Props {
  number_str: string;
  active: boolean;
  onClick: () => void;
}

const Button = styled.button`
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: transparent;
  border: solid 1px #ffffff;
  color: ${colors.light};
  cursor: pointer;
  font-family: 'Bellefair', serif;
  font-size: ${fonts.h4.size};
  line-height: ${fonts.h4.lineHeight};
  letter-spacing: 2px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    background-color: ${colors.light};
    color: #000000;
  }

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    width: 60px;
    height: 60px;
    font-size: 24px;
    line-height: 27.5px;
    letter-spacing: 1.5px;

    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 16px;
    }
  }
`;

export default function RoundBtn({ number_str, active, onClick }: Props) {
  return (
    <Button className={active ? 'active' : ''} onClick={onClick}>
      <span>{number_str}</span>
    </Button>
  );
}
