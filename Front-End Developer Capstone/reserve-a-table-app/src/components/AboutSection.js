import mario_and_adrian from  "../images/mario_and_adrian.PNG"
import restaurant_chief from  "../images/restaurant_chief.PNG"

export default function AboutSection() {
    return (
      <section class="flexbox-container-about-section" id="about-section">
        <div class="flexbox-item-1-about-section">
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
        <div class="flexbox-item-2-about-section">
          <div><img class="img-1-about-section" src={restaurant_chief} alt="little lemon restaurant food" style={{width: 400, height: 450, verticalAlign:"middle"}}></img></div>
          <div><img class="img-2-about-section" src={mario_and_adrian} alt="little lemon restaurant food" style={{width: 400, height: 450, verticalAlign:"middle"}}></img></div>
        </div>
      </section>
    )
  }