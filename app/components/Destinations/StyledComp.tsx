import styled from 'styled-components';
import { breakpoints, colors, fonts } from '~/utils/styles';

export const Container = styled.section`
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

      &.destination-text {
        padding-bottom: 54px;
        border-bottom: solid 1px hsla(231, 15%, 26%, 1);
      }
    }
  }

  .location-image {
    img {
      width: 100%;
      object-fit: cover;
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

export const Options = styled.ul`
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

export const Button = styled.button`
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

  &:hover {
    border-bottom: solid 3px rgba(255, 255, 255, 0.5);
  }

  &.active {
    color: ${colors.light};
    border-bottom: solid 3px ${colors.light};
  }
`;

export const TravelInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-transform: uppercase;

  p {
    color: ${colors.secondary};
    font-size: ${fonts.subH2.size};
    line-height: ${fonts.subH2.lineHeight};
    letter-spacing: ${fonts.subH2.letterSpacing};
    margin: 28px 0 12px 0;
  }

  h6 {
    color: ${colors.light};
    font-size: ${fonts.subH1.size};
    line-height: ${fonts.subH1.lineHeight};
  }

  & > div:first-child {
    margin-right: 80px;
  }

  @media (max-width: ${breakpoints.tablet}px) {
    flex-direction: column;

    & > div:first-child {
      margin-right: 0;
    }
  }
`;
