import img_food from  "../images/restaurant_food.jpg"

const handleClick = (event) => {
  event.preventDefault();
  document.getElementById('reservations-section').scrollIntoView({ behavior: 'smooth' });
  };

export default function HeroSection() {
    return (
      <section className="flexbox-container-hero-section">
        <div className="flexbox-item-intro-hero-section">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned <br/>
            Mediterranean restaurant,<br/>
            focused on traditional<br/>
            recipes served with a modern<br/>
            twist.
          </p>
          <button
            onClick={(event) => handleClick(event)} 
            aria-label="Reserve a Table">
            Reserve a Table
          </button>
        </div>
        <div className="flexbox-item-img-hero-section">
          <img
            src={img_food}
            alt="little lemon restaurant food"
            aria-label="Little Lemon Restaurant"
            style={{width: 400, height: 450, verticalAlign:"middle"}}
          >
          </img>
        </div>
      </section>
    )
  }