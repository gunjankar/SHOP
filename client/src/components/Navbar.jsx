import React from 'react'
import styled from 'styled-components'
//import { Badge } from '@material-ui/core';
import { AddShoppingCartOutlined, Search } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { mobile } from '../responsive';
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
    display:flex;
    align-items:center;
    margin-left: 25px;
    padding:5px;

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
    ${mobile({ flex:2, justifyContent: "center" })};
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Navbar = () => {
  return (
    <Container style={{backgroundColor: "#00c2cb"}}> 
        <Wrapper>
            <Left>
                <Language></Language>
                <SearchContainer>
                <Input placeholder="Search for Medicines..."/>
                <Search style={{color:"white",fontSize:23}}/>
                </SearchContainer>
            </Left>
            <Center><Logo>Pharmacare</Logo></Center>
            <Right>

                <MenuItem>REGISTER</MenuItem>
                <MenuItem>SIGN IN</MenuItem>
                <MenuItem>
                    <Badge badgeContent={0} color="primary">
                        <AddShoppingCartOutlined />
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  );
};

export default Navbar
