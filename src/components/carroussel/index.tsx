import { useState } from "react";
import { Carousel } from "react-bootstrap";
import petanqueImage from "../../assets/images/petanque1.jpg";
import petanqueImage2 from "../../assets/images/petanque2.jpg";
import petanqueImage3 from "../../assets/images/petanque3.jpg";

type Props = {
  isDarkMode: boolean;
};

const LandingCarousel = ({ isDarkMode }: Props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      className={isDarkMode ? "navbar-dark" : "navbar-light"}
      style={{
        width: "50rem",
        height: "20rem",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <Carousel.Item>
        <img src={petanqueImage} alt="" className="d-block w-100" />
        <Carousel.Caption>
          <h3 style={{ color: isDarkMode ? "white" : "black" }}>
            First slide label
          </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={petanqueImage2} alt="" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={petanqueImage3} alt="" className="d-block w-100" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default LandingCarousel;
