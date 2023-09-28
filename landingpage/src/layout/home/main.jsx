import logoSVG from "../../assets/home/desktop/Combined Shape.svg";

const main = () => {
  return (
    <>
      <nav>
        <div>
          <img src={logoSVG} alt="aaa" />
          <p>coffeeroasters</p>
        </div>
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>create your plan</li>
        </ul>
      </nav>

      <header>
        <h1>Great coffee made simple.</h1>
        <p>
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button>Create your plan</button>
      </header>
    </>
  );
};

export default main;
