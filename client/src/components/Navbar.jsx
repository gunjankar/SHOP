import React, { useEffect, useState } from "react";
import styled from "styled-components";
//import { Badge } from '@material-ui/core';
import { AddShoppingCartOutlined, Search } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

//import { tablet } from '../responsive';
//import { desktop } from '../responsive';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: white;
  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: none;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  width: 300px;
  height: 30px;
  border-radius: 5px;
  ${mobile({ width: "50px" })};
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  color: white;
  ${mobile({ fontSize: "24px" })};
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: white;
  ${mobile({ flex: 2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userId")) {
      setLoggedIn(true);
    }
  }, []);
  const signout = () => {
    localStorage.removeItem("userId");
    console.log("Logged out");
    setLoggedIn(false);
  };
  return (
    <Container style={{ backgroundColor: "#00c2cb" }}>
      <Wrapper>
        <Left>
          <Language></Language>
          <SearchContainer>
            <Input placeholder="Search for Medicines..." />
            <Search style={{ color: "white", fontSize: 23 }} />
          </SearchContainer>
        </Left>
        <Link to={"/"}>
          <Center>
            <Logo>Pharmacare</Logo>
          </Center>
        </Link>
        {loggedIn ? (
          <>
            <Right>
              <Link to={"/my-orders"}>
                <MenuItem>My Orders</MenuItem>
              </Link>
            </Right>
            <MenuItem>
              <Link to={"/cart"}>
                <Badge badgeContent={0} color="primary">
                  <AddShoppingCartOutlined />
                </Badge>
              </Link>
            </MenuItem>
            <div onClick={signout}>
              <MenuItem>SIGN OUT</MenuItem>
            </div>
          </>
        ) : (
          <>
            <Right>
              <Link to={"/register"}>
                <MenuItem>REGISTER</MenuItem>
              </Link>
              <Link to={"/login"}>
                <MenuItem>SIGN IN</MenuItem>
              </Link>
              <MenuItem>
                <Link to={"/cart"}>
                  <Badge badgeContent={0} color="primary">
                    <AddShoppingCartOutlined />
                  </Badge>
                </Link>
              </MenuItem>
            </Right>
          </>
        )}
      </Wrapper>
    </Container>
  );
};

export default Navbar;
