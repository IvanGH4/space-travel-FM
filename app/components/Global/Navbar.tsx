import { useState } from 'react';
import styled from 'styled-components';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 55px;
  position: relative;

  .open-menu-icon {
    display: none;

    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  @media (max-width: 650px) {
    padding-top: 24px;
    padding-right: 24px;

    .open-menu-icon {
      display: block;
    }
  }
`;

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Nav>
      <div>
        <img src="/img/logo.svg" alt="Logo" />
      </div>
      {!isMenuOpen && (
        <div className="open-menu-icon">
          <button onClick={() => setIsMenuOpen(true)}>
            <img src="/img/icon-hamburger.svg" alt="Open menu icon" />
          </button>
        </div>
      )}
      <DesktopNav />
      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </Nav>
  );
}
