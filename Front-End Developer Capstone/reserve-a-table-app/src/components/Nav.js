import img_logo from  "../images/little_lemon_logo.PNG"
import navObject from './utils';

export default function Nav() {
  return (
    <nav>
      <ul>
          <li>
            <img img src={img_logo} alt="logo" style={{width: 190, height: 60, verticalAlign:"middle"}}></img>
	        </li>
          {navObject.map(({ display, url }) => (
                <li><a href={url}>
                {display}
                </a></li>
          ))}
      </ul>
    </nav>
  )
}