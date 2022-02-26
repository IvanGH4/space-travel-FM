import styled from 'styled-components';
import { breakpoints, colors, fonts } from '~/utils/styles';

export const Container = styled.section`
  margin-top: 76px;
`;

export const Content = styled.div`
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

export const Description = styled.div`
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
