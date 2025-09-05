import { Accordion } from './components/Accordion';
import { AlertBox } from './components/AlertBox';
import { Footer } from './components/Footer';
import { Footerr } from './components/Footerr';
import { Interests } from './components/Interests';
import { Navbar } from './components/Navbar';
import { Post } from './components/Post';
import { Profile } from './components/Profile';
import { Upcoming } from './components/Upcoming ';

function App() {
  return (
    <>
      <Navbar />
      <div
        className="w3-container w3-content"
        style={{ "maxWidth": '1400px', "marginTop": '80px' }}
      >
        <div className="w3-row">
          <div className="w3-col m3">
            <Profile />
            <Accordion />
            <Interests />
            <AlertBox />
          </div>
          <div className="w3-col m7">
            <Post />
          </div>
          <div className="w3-col m2">
            <Upcoming />
          </div>
        </div>
      </div>
      <br />
      <Footerr />
      <Footer />
    </>
  );
}

export default App;
