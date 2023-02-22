import mario_and_adrian from  "../images/mario_and_adrian.PNG"
import restaurant_chief from  "../images/restaurant_chief.PNG"

export default function AboutSection() {
    return (
      <section
        className="flexbox-container-about-section"
        aria-label="About Us section"
      >
        <div className="flexbox-item-intro-about-section">
          <h1>About Us</h1>
          <p>
            Our passion for great food is<br/>
            reflected in every dish we serve.<br/>
            From the savory aroma of<br/>
            slow-cooked stews,<br/>
            to the bright and bold flavors<br/>
            of fresh salads, we strive to<br/>
            provide an unforgettable dining<br/>
            experience.<br/>
            We believe that eating is a sensory<br/>
            experience and we aim to delight<br/>
            all of your senses with every bite.<br/>
          </p>
        </div>
        <div
          className="flexbox-item-images-about-section"
          aria-label="Images section"
        >
          <div>
            <img
              className="img-1-about-section"
              src={restaurant_chief}
              alt="Little Lemon Restaurant food"
              aria-label="Restaurant Chief Image"
              style={{width: 400, height: 450, verticalAlign:"middle"}}
            >
            </img>
          </div>
          <div>
            <img
              className="img-2-about-section"
              src={mario_and_adrian}
              alt="Little Lemon Restaurant food"
              aria-label="Mario and Adrian Image"
              style={{width: 400, height: 450, verticalAlign:"middle"}}
            >
            </img>
          </div>
        </div>
      </section>
    )
  }