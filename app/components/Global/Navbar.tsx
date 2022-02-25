import { Link, useLocation } from 'remix';
import styled from 'styled-components';
import { colors } from '~/utils/styles';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 55px;
`;

const NavItems = styled.ul`
  display: flex;
  padding: 39px 165px 0px 123px;

  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);

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
`;

export default function Navbar() {
  const location = useLocation();

  return (
    <Nav>
      <div>
        <img src="/img/logo.svg" alt="Logo" />
      </div>
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
    </Nav>
  );
}
