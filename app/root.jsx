import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styled, { createGlobalStyle } from "styled-components";
import globalStylesUrl from './styles/global.css';

export const links = () => [{ rel: 'stylesheet', href: globalStylesUrl }]

export const meta = () => ({
  charset: "utf-8",
  title: "Infinite Scrolling App",
  viewport: "width=device-width,initial-scale=1",
});

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
  }
`;

export const WrapperImage = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  font-family: 'Oswald', sans-serif;
  margin-bottom: 1em;
`;

export default function App() {
  return (
    <Document>
        <Layout>
          <Outlet />
        </Layout>
    </Document>
  );
}

function Document({children}) {
  return (
    <html lang="en">
    <head>
      <Meta />
      <Links />
    </head>
    <body>
      {children}
      <LiveReload />
    </body>
  </html>
  )
}

function Layout({children}) {
  return (
    <>
      <Header>
        <H1>Photo Album</H1>
        <p>An infinite scroll of high resolution images.</p>
        <p>Images shot by the world's best photographers.</p>
      </Header>
      {/* <div> */}
      {children}
      {/* </div> */}
    </>
  )
}
