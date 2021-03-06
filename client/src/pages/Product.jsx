import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
//import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import img from "../assets/banner5.jpg";
import { popularProducts, medicines, covidEssentials, babyCare } from "../data";
import axios from "axios";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection: "column" })};
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

// const FilterColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
//   margin: 0px 5px;
//   cursor: pointer;
// `;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })};
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const id = location.pathname.split("/")[3];
  console.log(id);
  console.log(category);

  const completeData = {};
  completeData["popularProducts"] = popularProducts;
  completeData["medicines"] = medicines;
  completeData["covid%20essentials"] = covidEssentials;
  completeData["babyCare"] = babyCare;
  console.log(completeData);
  console.log(completeData[category]);
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(completeData[category].find((o) => o.id == id));
  }, []);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getProduct();
  }, [id]);

  const addtoCart = () => {
    console.log("Item added");
    const data = {
      userId: localStorage.getItem("userId"),
      products: [{ productId: product.id, category: category }],
    };

    axios({
      url: "http://localhost:8000/api/carts/",
      method: "POST",
      data: data,
      headers: {
        token: localStorage.getItem("token")
          ? `Bearer ${localStorage.getItem("token")}`
          : "",
      },

      // url: "http://localhost:5000/login"
    })
      .then((response) => {
        console.log("Response is :", response);
        // localStorage.setItem("token", response.data.acessToken);
        // localStorage.setItem("userId", response.data._id);
        //   if (response.data.user) {
        //     //Authentication done.
        //     setuser_info(response.data.user);
        //     localStorage.setItem("token", response.data.jwt_token);
        //     // console.log(response.data.user)
        //     localStorage.setItem("user", JSON.stringify(response.data.user));
        // history.push({ pathname: "/" });
        //   } else {
        //     setinfo(response.data);
        //   }
        // console.log("Response :",response)
      })
      .catch((error) => {
        //   setloading(false);
        console.log(error);
        console.log("Error occured");
      });
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={product.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>{product.desc}</Desc>
          <Price>{product.price}</Price>
          <FilterContainer>
            {/* <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter> */}
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>{product.size}</FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button onClick={addtoCart}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
