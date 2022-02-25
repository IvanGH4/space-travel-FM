import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from 'remix';
import type { MetaFunction, LinksFunction } from 'remix';
import Navbar from '~/components/Global/Navbar';
import { breakpoints, GlobalStyle } from '~/utils/styles';
import styled from 'styled-components';
import Particles from './components/Global/Particles';

type Props = {
  children: JSX.Element;
};

export const links: LinksFunction = () => [
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap',
  },
];

export const meta: MetaFunction = () => {
  return { title: 'New Remix App' };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <Layout>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

interface BGProps {
  location: string;
}

const BG = styled.div<BGProps>`
  background-image: ${({ location }) =>
    location === ''
      ? `url('/img/background-home-desktop.jpg');`
      : location === 'destination'
      ? `url('/img/background-destination-desktop.jpg');`
      : location === 'crew'
      ? `url('/img/background-crew-desktop.jpg');`
      : `url('/img/background-technology-desktop.jpg');`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;

  @media (max-width: ${breakpoints.tablet}px) {
    background-image: ${({ location }) =>
      location === ''
        ? `url('/img/background-home-tablet.jpg');`
        : location === 'destination'
        ? `url('/img/background-destination-tablet.jpg');`
        : location === 'crew'
        ? `url('/img/background-crew-tablet.jpg');`
        : `url('/img/background-technology-tablet.jpg');`};
  }

  @media (max-width: ${breakpoints.mobile}px) {
    background-image: ${({ location }) =>
      location === ''
        ? `url('/img/background-home-mobile.jpg');`
        : location === 'destination'
        ? `url('/img/background-destination-mobile.jpg');`
        : location === 'crew'
        ? `url('/img/background-crew-mobile.jpg');`
        : `url('/img/background-technology-mobile.jpg');`};
  }
`;

function Layout({ children }: Props) {
  const location = useLocation();

  return (
    <BG location={location.pathname.replace('/', '')}>
      <GlobalStyle />
      <Navbar />
      <Particles />
      <div style={{ maxWidth: '77%', margin: '0 auto' }}>{children}</div>
    </BG>
  );
}
