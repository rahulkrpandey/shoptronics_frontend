import {
  SlidesContainer,
  Container,
  Slides,
  Image,
  Info,
} from "./StyledCarousel";

const Carousel = () => {
  return (
    <Container>
      <Image src={require("../../assets/images/hero.jpg")} />
      {/* <Info>Get best deals on the latest smartphones</Info> */}
    </Container>
  );
};

export default Carousel;
