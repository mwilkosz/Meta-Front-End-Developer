import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import little_lemon_logo_vertical from  "../images/little_lemon_logo_vertical.PNG"
import navObject from './utils';

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
        <div class="flexbox-item-1-footer">
            <img src={little_lemon_logo_vertical} alt="little lemon restaurant" style={{width: 100, height: 150, verticalAlign:"middle"}}></img>
        </div>
        <div class="flexbox-item-2-footer">
          <h3>Navigation</h3>
          {navObject.map(({ display, url }) => (
                <li><a href={url}>
                {display}
                </a></li>
          ))}
        </div>
        <div class="flexbox-item-3-footer">
          <h3>Contact</h3>
          <p>
            Little Lemon<br/>
            805 S State St,<br/>
            Chicago<br/>
            IL 60605<br/>
          </p>
        </div>
        <div class="flexbox-item-4-footer">
          <h3>Social Media</h3>
          {socials.map(({ icon, url }) => (
                <a href={url}>
                  <FontAwesomeIcon color="black" icon={icon} size="2x" />
                </a>
          ))}
        </div>
      </footer>
    )
  }