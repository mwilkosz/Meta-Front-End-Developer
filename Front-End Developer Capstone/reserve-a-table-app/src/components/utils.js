export const navObject = [
  {
    display: 'Home',
    url: 'home.html',
    id: 'home-section'
  },
  {
    display: 'About',
    url: 'about.html',
    id: 'about-section'
  },
  {
    display: 'Menu',
    url: 'menu.html',
    id: 'menu-section'
  },
  {
    display: 'Reservations',
    url: 'reservations.html',
    id: 'reservations-section'
  },
  {
    display: 'Order Online',
    url: 'order-online.html',
    id: 'order-online-section'
  },
  {
    display: 'Login',
    url: 'login.html',
    id: 'login-section'
  },
];

export const handleClick = (event, id, url) => {
  event.preventDefault();
  if (id === 'about-section' || id === 'reservations-section') {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.assign(url);
  }
};