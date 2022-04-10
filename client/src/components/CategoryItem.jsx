import styled from "styled-components"
import { mobile } from "../responsive";

import {
    Link,
  } from "react-router-dom";


const Container = styled.div`
    flex: 1;
    margin: 30px;
    height: 40vh;
    position: relative;
    ${mobile({ flexDirection: "column" })};
`;

const Image = styled.img`
    width: 360px;
    height: 225px;
    object-fit: cover;
    ${mobile({ height: "20vh",margin:"0px" })};
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: bottom;
`;

const Title = styled.h1`
    color: black;
    margin-bottom: 20px;
    align-items: bottom;
`;

const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: #970C45;
    color: white;
    cursor: pointer;
    font-weight: 1000;
    margin-top: 230px;
    ${mobile({ padding: "3px" })};  
`;


const CategoryItem = ({item}) => {
  return (
    <Container>
        <Link to={`/products/${item.cat}`}>
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button>ORDER NOW</Button>
        </Info>
        </Link>
    </Container>
  );
};

export default CategoryItem;
