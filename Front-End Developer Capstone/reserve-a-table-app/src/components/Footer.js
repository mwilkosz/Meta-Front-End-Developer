import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import little_lemon_logo_vertical from  "../images/little_lemon_logo_vertical.PNG"
import { navObject, handleClick } from './utils.js';

const socials = [
  {
    icon: faFacebook,
    url: 'https://facebook.com/littlelemon',
  },
  {
    icon: faYoutube,
    url: 'https://youtube.com/littlelemon',
  },
  {
    icon: faTwitter,
    url: 'https://twitter.com/littlelemon',
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="flexbox-item-img-footer">
        <img src={little_lemon_logo_vertical} alt="little lemon restaurant" style={{width: 100, height: 150, verticalAlign:"middle"}}></img>
      </div>
      <div className="flexbox-item-navigation-footer" aria-labelledby="navigation-heading">
        <h3 id="navigation-heading">Navigation</h3>
        <ul>
          {navObject.map(({ display, url, id }) => (
            <li key={id}>
              <a href={url} onClick={(event) => handleClick(event, id, url)}>
                {display}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flexbox-item-contact-footer" aria-labelledby="contact-heading">
        <h3 id="contact-heading">Contact</h3>
        <p>
          Little Lemon<br/>
          805 S State St,<br/>
          Chicago<br/>
          IL 60605<br/>
        </p>
      </div>
      <div className="flexbox-item-media-footer" aria-labelledby="media-heading">
        <h3 id="media-heading">Social Media</h3>
        <ul>
        {socials.map(({ icon, url }, index) => (
                <li key={index}>
                <a href={url}>
                  <FontAwesomeIcon color="black" icon={icon} size="2x" />
                </a>
                </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
