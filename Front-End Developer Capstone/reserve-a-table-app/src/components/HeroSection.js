import img_food from  "../images/restaurant_food.jpg"

export default function Header() {
    return (
      <div class="flexbox-container-hero-section">
        <div class="flexbox-item-1-hero-section">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned <br></br>
            Mediterranean restaurant,<br></br>
            focused on traditional<br></br>
            recipes served with a modern<br></br>
            twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <div class="flexbox-item-2-hero-section">
          <img src={img_food} alt="little lemon restaurant food" style={{width: 400, height: 450, verticalAlign:"middle"}}></img>
        </div>
      </div>
    )
  }


  // style={{width: 190, height: 60, padding: 10, verticalAlign:"middle"}}