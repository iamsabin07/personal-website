import Theme from '../styles/theme';
import '../components/About/About.css';
import '../components/About/Card.css';
export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 