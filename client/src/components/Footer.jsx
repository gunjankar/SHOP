import { Facebook, Instagram, Twitter, YouTube } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display:flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })};
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })};
`;

const Payment = styled.img`
    width:100%;
    height:80%;
`;

const Footer = () => {
  return (
      <Container>
          <Left>
              <Logo>PHARMACARE</Logo>
              <Desc>Welcome to India's leading digital healthcare platform. We focus on simplifying healthcare and impacting lives.</Desc>
              <SocialContainer>
                  <SocialIcon color="DD2A7B">
                      <Instagram/>
                  </SocialIcon>
                  <SocialIcon color="3B5998">
                      <Facebook/>
                  </SocialIcon>
                  <SocialIcon color="55ACEE">
                      <Twitter/>
                  </SocialIcon>
                  <SocialIcon color="E60023">
                      <YouTube/>
                  </SocialIcon>
              </SocialContainer>
          </Left>
          <Center>
              <Title>Useful Links</Title>
              <List>
                  <ListItem>Home</ListItem>
                  <ListItem>Cart</ListItem>
                  <ListItem>Offers</ListItem>
                  <ListItem>Order Medicines</ListItem>
                  <ListItem>Health Products</ListItem>
                  <ListItem>My Account</ListItem>
                  <ListItem>My orders</ListItem>
                  <ListItem>Order Tracking</ListItem>
                  <ListItem>Wishlist</ListItem>
                  <ListItem>Terms and Conditions</ListItem>
                
              </List>
          </Center>
          <Right>
              <Title>Our Payment Partners</Title>
              <Payment src="/payment.png"/>
              <Title>@2022 Pharmacare All rights reserved.</Title>
          </Right>
      </Container>
  )
};

export default Footer;
