import img_logo from  "../images/little_lemon_logo.PNG";
import { navObject, handleClick } from './utils.js';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <img
            src={img_logo}
            alt="logo"
            style={{ width: 190, height: 60, verticalAlign: "middle" }}
          />
        </li>
        {navObject.map(({ display, url, id }) => (
          <li key={id}>
            <a href={url} onClick={(event) => handleClick(event, id, url)}>
              {display}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}