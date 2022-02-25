import { Link } from 'remix';
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
  padding: 39px 165px 38px 123px;

  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);

  li {
    text-transform: uppercase;

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
  return (
    <Nav>
      <div>
        <img src="/img/logo.svg" alt="Logo" />
      </div>
      <NavItems>
        <li>
          <Link to="/">00 Home</Link>
        </li>
        <li>
          <Link to="/destination">01 Destination</Link>
        </li>
        <li>
          <Link to="/crew">02 Crew</Link>
        </li>
        <li>
          <Link to="/technology">03 Technology</Link>
        </li>
      </NavItems>
    </Nav>
  );
}
