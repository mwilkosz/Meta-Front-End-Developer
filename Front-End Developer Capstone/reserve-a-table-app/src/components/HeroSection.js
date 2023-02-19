import img_food from  "../images/restaurant_food.jpg"

const handleClick = (event) => {
  event.preventDefault();
  document.getElementById('reservations-section').scrollIntoView({ behavior: 'smooth' });
  };

export default function HeroSection() {
    return (
      <section class="flexbox-container-hero-section">
        <div class="flexbox-item-1-hero-section">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned <br/>
            Mediterranean restaurant,<br/>
            focused on traditional<br/>
            recipes served with a modern<br/>
            twist.
          </p>
          <button onClick={(event) => handleClick(event)}>Reserve a Table</button>
        </div>
        <div class="flexbox-item-2-hero-section">
          <img src={img_food} alt="little lemon restaurant food" style={{width: 400, height: 450, verticalAlign:"middle"}}></img>
        </div>
      </section>
    )
  }