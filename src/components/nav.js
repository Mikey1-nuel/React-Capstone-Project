import { Link, useMatch } from 'react-router-dom';
import { BsFillBackspaceFill } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { BiMicrophone } from 'react-icons/bi';

const Header = () => {
  const match = useMatch('/country/:name');
  return (
    <nav className="nav-bar">
      <div className="navbar-container">
        {match && (
          <Link className="nav-button" to="/">
            <BsFillBackspaceFill className="icon" />
          </Link>
        )}
        <h2 className="europe-data">World Countries</h2>
        <div className="Eu-setting">
          <BiMicrophone className="microphone" size="1.5rem" />
          <FiSettings className="setting-icon" size="1.5rem" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
