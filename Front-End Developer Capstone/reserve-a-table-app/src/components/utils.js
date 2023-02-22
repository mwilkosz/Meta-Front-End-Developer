export const navObject = [
  {
    display: 'Home',
    id: 'home-section'
  },
  {
    display: 'About',
    id: 'about-section'
  },
  {
    display: 'Menu',
    id: 'menu-section'
  },
  {
    display: 'Reservations',
    id: 'reservations-section'
  },
  {
    display: 'Order Online',
    id: 'order-online-section'
  },
  {
    display: 'Login',
    id: 'login-section'
  },
];

export const handleClick = (event, id) => {
  event.preventDefault();
  if (id === 'about-section' || id === 'reservations-section') {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
};