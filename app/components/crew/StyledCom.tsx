import styled from 'styled-components';
import { breakpoints, colors, fonts } from '~/utils/styles';

export const Container = styled.section`
  margin-top: 76px;
`;

export const Content = styled.div`
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

export const Dot = styled.button`
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
