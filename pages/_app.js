import "../styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
    {/* <ThemeProvider defaultTheme={['pink', 'red', 'blue']}attribute="class"> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;