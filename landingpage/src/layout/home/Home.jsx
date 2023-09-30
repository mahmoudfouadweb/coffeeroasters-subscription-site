import "./main.css";
import Logo from "../../assets/shared/desktop/logo.svg";
import LogoWhite from "../../assets/shared/desktop/logo-white.svg";
import granEspresso from "../../assets/home/desktop/image-gran-espresso.png";
import planalto from "../../assets/home/desktop/image-planalto.png";
import Piccollo from "../../assets/home/desktop/image-Piccollo.png";
import Danche from "../../assets/home/desktop/image-danche.png";
import Coffee from "../../assets/home/desktop/icon-coffee-bean.svg";
import benefits from "../../assets/home/desktop/icon-gift.svg";
import shipping from "../../assets/home/desktop/icon-truck.svg";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";

const main = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={Logo} alt="aaa" />
        </div>
        <ul className="nav_list">
          <li>home</li>
          <li>about us</li>
          <li>create your plan</li>
        </ul>
      </nav>

      <header className="header">
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button>Create your plan</button>
      </header>

      <div className="collection">
        <h2>our collection</h2>
        <div className="cards">
          <div className="collection_card">
            <img src={granEspresso} alt="gran Espresso" />
            <h3>Gran Espresso</h3>
            <p>
              Light and flavorful blend with cocoa and black pepper for an
              intense experience
            </p>
          </div>
          <div className="collection_card">
            <img src={planalto} alt="planalto" />
            <h3>planalto</h3>
            <p>
              Brazilian dark roast with rich and velvety body, and hints of
              fruits and nuts
            </p>
          </div>
          <div className="collection_card">
            <img src={Piccollo} alt="Piccollo" />
            <h3>Piccollo</h3>
            <p>
              Mild and smooth blend featuring notes of toasted almond and dried
              cherry
            </p>
          </div>
          <div className="collection_card">
            <img src={Danche} alt="Danche" />
            <h3>Danche</h3>
            <p>
              Ethiopian hand-harvested blend densely packed with vibrant fruit
              notes
            </p>
          </div>
        </div>
      </div>

      {/* Why choose us? */}
      <section className="why_choose_us">
        <h2>Why choose us?</h2>
        <p>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>

        <div className="why_choose_us_cards">
          <div className="why_choose_us_card">
            <img src={Coffee} alt="Coffee" />
            <h3>Best quality</h3>
            <p>
              Discover an endless variety of the world’s best artisan coffee
              from each of our roasters.
            </p>
          </div>
          <div className="why_choose_us_card">
            <img src={benefits} alt="benefits" />
            <h3>Exclusive benefits</h3>
            <p>
              Special offers and swag when you subscribe, including 30% off your
              first shipment.
            </p>
          </div>
          <div className="why_choose_us_card">
            <img src={shipping} alt="Coffee" />
            <h3>Free shipping</h3>
            <p>
              We cover the cost and coffee is delivered fast. Peak freshness:
              guaranteed.
            </p>
          </div>
        </div>
      </section>
      <section className="how_works">
        <h3>How it works</h3>
        <div className="steps">
          <div className="steps_card">
            <div className="step_number">01</div>
            <h2 className="step_title">Pick your coffee</h2>
            <p>
              Select from our evolving range of artisan coffees. Our beans are
              ethically sourced and we pay fair prices for them. There are new
              coffees in all profiles every month for you to try out.
            </p>
          </div>
          <div className="steps_card">
            <div className="step_number">02</div>
            <h2 className="step_title">Choose the frequency</h2>
            <p>
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="steps_card">
            <div className="step_number">03</div>
            <h2 className="step_title">Receive and enjoy!</h2>
            <p>
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
        <button>Create Your Plan</button>
      </section>
      <footer className="footer">
        <div className="logo_box">
          <img src={LogoWhite} alt="logo" />
        </div>
        <ul className="footer_list">
          <li>home</li>
          <li>about us</li>
          <li>create your plan</li>
        </ul>
        <div className="social_media">
          <img src={facebook} alt="facebook" />
          <img src={twitter} alt="twitter" />
          <img src={instagram} alt="instagram" />
        </div>
      </footer>
    </>
  );
};

export default main;
