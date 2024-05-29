import AwesomeSlider from "react-awesome-slider";
// import "react-awesome-slider/dist/styles.css";
import styles from "./Slider.module.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Slider() {
  const slider = (
    <AwesomeSlider cssModule={styles}>
      <div data-src="/img/slide_1.png">
        <span>Kedы Nikolai, Forever!</span>
        <Link to="/orders">
          <Button>КУПИТЬ</Button>
        </Link>
      </div>
      <div data-src="/img/slide_1.png">
        <span>Kedы Nikolai, Forever!</span>
        <Link to="/orders">
          <Button>КУПИТЬ</Button>
        </Link>
      </div>
      <div data-src="/img/slide_1.png">
        <span>Kedы Nikolai, Forever!</span>
        <Link to="/orders">
          <Button>КУПИТЬ</Button>
        </Link>
      </div>
    </AwesomeSlider>
  );
  return <>{slider}</>;
}

export default Slider;
