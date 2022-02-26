import { Dispatch, SetStateAction, useEffect } from 'react';
import { Link, useLocation } from 'remix';
import styled from 'styled-components';
import { breakpoints, colors, fonts } from '~/utils/styles';

interface Props {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const NavItems = styled.ul`
  position: fixed;
  top: 0;
  right: 0;
  padding: 34px 0 0 32px;
  height: 100vh;
  background: hsl(0 0% 100% / 0.1);
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
  display: block;
  transform: translateX(100%);
  transition: all 0.2s ease-in-out;

  &.show {
    transform: translateX(0);
  }

  li {
    padding-right: 92px;

    &.close-menu-icon {
      padding-right: 27px;
    }

    &:not(:last-child) {
      margin-bottom: 32px;
    }

    &.active {
      border-right: solid 3px ${colors.light};
    }
  }

  .close-btn {
    display: block;
    margin-left: auto;
    background: none;
    border: none;
    cursor: pointer;
  }

  li a {
    font-size: ${fonts.navText.size};
    line-height: ${fonts.navText.lineHeight};
    letter-spacing: ${fonts.navText.letterSpacing};
    color: ${colors.light};
    text-decoration: none;
    text-transform: uppercase;
    font-family: 'Barlow Condensed', sans-serif;

    span {
      font-weight: bold;
    }
  }

  @media (mix-width: 650px) {
    display: none;
  }
`;

export default function MobileNav({ isMenuOpen, setIsMenuOpen }: Props) {
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <NavItems className={isMenuOpen ? 'show' : ''}>
      <li className="close-menu-icon">
        <button className="close-btn" onClick={() => setIsMenuOpen(false)}>
          <img src="/img/icon-close.svg" alt="Close menu icon" />
        </button>
      </li>
      <li className={location.pathname === '/' ? 'active' : ''}>
        <Link to="/">
          <span>00</span> Home
        </Link>
      </li>
      <li className={location.pathname === '/destination' ? 'active' : ''}>
        <Link to="/destination">
          <span>01</span> Destination
        </Link>
      </li>
      <li className={location.pathname === '/crew' ? 'active' : ''}>
        <Link to="/crew">
          <span>02</span> Crew
        </Link>
      </li>
      <li className={location.pathname === '/technology' ? 'active' : ''}>
        <Link to="/technology">
          <span>03</span> Technology
        </Link>
      </li>
    </NavItems>
  );
}
