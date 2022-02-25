import styled from 'styled-components';
import { breakpoints, colors, fonts } from '~/utils/styles';

const Circle = styled.div`
  .main-circle {
    position: relative;
    z-index: 1500;
    width: 274px;
    height: 274px;
    background-color: ${colors.dark};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      transform: translate(-50%, -50%);
      background-color: ${colors.light};
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: -1;
      transform: translate(-50%, -50%);
      background-color: ${colors.dark};
      width: 274px;
      height: 274px;
      border-radius: 50%;
      transition: all 0.2s ease-in-out;
      transform-origin: center;
    }

    &:hover::after {
      width: 450px;
      height: 450px;
    }

    h4 {
      font-size: ${fonts.h4.size};
      line-height: ${fonts.h4.lineHeight};
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 156px;

    .main-circle {
      background-color: ${colors.light};
      width: 242;
      height: 242;

      &::after,
      &::before {
        display: none;
      }
    }

    h4 {
      letter-spacing: ${fonts.h4.tablet.letterSpacing};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    h4 {
      font-size: ${fonts.h4.mobile.size};
      line-height: ${fonts.h4.mobile.lineHeight};
      letter-spacing: ${fonts.h4.mobile.letterSpacing};
    }
  }
`;

export default function Explore() {
  return (
    <Circle>
      <div className="main-circle">
        <h4>Explore</h4>
      </div>
    </Circle>
  );
}
