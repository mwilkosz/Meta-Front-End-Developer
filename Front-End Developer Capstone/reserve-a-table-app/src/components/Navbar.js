import img_logo from  "../images/little_lemon_logo.PNG"

export default function Navbar() {
  return (
    <nav>
      <ul>
          <li>
            <img img src={img_logo} alt="logo" style={{width: 190, height: 60, padding: 20, verticalAlign:"middle"}}></img>
	        </li>
          <li><a href="index.html">Home</a></li>
          <li><a href="products.html">About</a></li>
          <li><a href="index.html">Menu</a></li>
          <li><a href="products.html">Reservations</a></li>
          <li><a href="products.html">Order Online</a></li>
          <li><a href="products.html">Login</a></li>
      </ul>
    </nav>
  )
}