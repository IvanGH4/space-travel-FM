import { Link, useLocation } from 'remix';
import styled from 'styled-components';
import { breakpoints, colors } from '~/utils/styles';

const NavItems = styled.ul`
  display: flex;
  padding: 39px 165px 0px 123px;

  background: hsl(0 0% 100% / 0.1);
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);

  li {
    text-transform: uppercase;
    padding-bottom: 38px;

    &.active {
      border-bottom: solid 3px ${colors.light};
    }

    &:not(:last-child) {
      margin-right: 48px;
    }

    a {
      text-decoration: none;
      color: ${colors.light};
      font-family: 'Barlow Condensed', sans-serif;
    }
  }

  @media (max-width: ${breakpoints.tablet}px) {
    padding-right: 20px;
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

export default function DesktopNav() {
  const location = useLocation();
  return (
    <NavItems>
      <li className={location.pathname === '/' ? 'active' : ''}>
        <Link to="/">00 Home</Link>
      </li>
      <li className={location.pathname === '/destination' ? 'active' : ''}>
        <Link to="/destination">01 Destination</Link>
      </li>
      <li className={location.pathname === '/crew' ? 'active' : ''}>
        <Link to="/crew">02 Crew</Link>
      </li>
      <li className={location.pathname === '/technology' ? 'active' : ''}>
        <Link to="/technology">03 Technology</Link>
      </li>
    </NavItems>
  );
}
