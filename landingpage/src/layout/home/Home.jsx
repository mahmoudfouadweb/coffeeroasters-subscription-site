import "./main.css";
import logoTitleSV from "../../assets/home/desktop/Combined Shape (2).svg";
import granEspresso from "../../assets/home/desktop/image-gran-espresso.png";
import planalto from "../../assets/home/desktop/image-planalto.png";
import Piccollo from "../../assets/home/desktop/image-Piccollo.png";
import Danche from "../../assets/home/desktop/image-danche.png";

const main = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logoTitleSV} alt="aaa" />
          {/* <img src={logoTitleSVG} alt="aaa" /> */}
          {/* <p>coffeeroasters</p> */}
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
    </>
  );
};

export default main;
