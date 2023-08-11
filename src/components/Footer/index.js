import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

import {
  Container,
  Left,
  Title,
  Info,
  Center,
  Icon,
  Right,
  Address,
  MobNo,
  Email,
} from "./StyledFooter";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>about us</Title>
        <Info>
          ShopTronics is dedicated to providing our customers with the best
          service possible! We will continue to strive to make ShopTronics your
          first choice for the best products, lightning fast shipping, and
          superior customer service. Fully interactive and secure on-line
          shopping experience.
        </Info>
      </Left>

      <Center>
        <Title>follow us on socials</Title>
        <Icon>
          <FacebookIcon style={{ fill: "#4267B2" }} /> follow our page on
          facebook
        </Icon>
        <Icon>
          <InstagramIcon style={{ fill: "#fb3958" }} /> follow us on instagram
        </Icon>
        <Icon>
          <TwitterIcon /> follow us on twitter
        </Icon>
        <Icon>
          <PinterestIcon style={{ fill: "#E60023" }} /> follow us on pinterest
        </Icon>
      </Center>

      <Right>
        <Title>contact us</Title>
        <Info>
          <Address>
            <LocationOnIcon style={{ marginRight: "5px" }} />
            GGSIPU, Golf Course Rd, Sector 16 C, Dwarka, Delhi, 110078
          </Address>
          <MobNo>
            <Icon>
              <CallIcon style={{ marginRight: "5px" }} />
            </Icon>
            8564219658
          </MobNo>
          <Email>
            <Icon>
              <EmailIcon style={{ marginRight: "5px" }} />
            </Icon>
            shoptronics@hotmail.com
          </Email>
        </Info>
      </Right>
    </Container>
  );
};

export default Footer;
