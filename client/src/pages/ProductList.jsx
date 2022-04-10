import styled from "styled-components";
import Navbar from "../components/Navbar";
//import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useState } from "react";
//import Select from "react-select";

import {
    useLocation,
  } from "react-router-dom";



const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;

`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 10px;
    ${mobile({ width: "0px 10px",display: "flex", flexDirection: "column"})};
`;

const FilterText =styled.span`
    font-size: 20px;
    font-weight: 600px;
    margin-right: 20px;
    ${mobile({ widthRight: "0px"})};
`;

const Select = styled.select`
    padding: 20px;
    margin-right: 20px;
    ${mobile({ margin: "10px 0px"})};
`;

const Option = styled.option``;


const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters,setFilters] = useState({});
    const [sort,setsorts] = useState("Popularity");

    const handleFilters = (e) =>{
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
      };

      //console.log(filter);
  return (
      <Container>
          <Navbar/>
          <Title>cat</Title>
          <FilterContainer>
              <Filter>
              <FilterText>Filter Products:</FilterText>
              <Select name="category" onChange = {handleFilters}>
                  <Option disabled>
                     By Category
                  </Option>
                  <Option>medicines</Option>
                  <Option>babycare</Option>
                  <Option>covid essentials</Option>
                  {/* <Option>Romsons</Option>
                  <Option>3M</Option>
                  <Option>Dr. Odin</Option>
                  <Option>Boldfit</Option>
                  <Option>Wellbeing Nutrition</Option>
                  <Option>Accu Check</Option>
                  <Option>Dr Morephen</Option> */}
              </Select>
              {/* <Select name="categories" onChange = {handleFilters}>
                  <Option disabled>
                      By Categories
                  </Option>
                  <Option>Covid Essentials</Option>
                  <Option>Diabetes</Option>
                  <Option>Headache</Option>
                  <Option>Wellness</Option>
                  <Option>Homoeopathy</Option>
                  <Option>Ayurvedic</Option>
                  <Option>Hair Care</Option>
                  <Option>Skin Care</Option>
                  <Option>Healthcare Equipments</Option>
              </Select>   */}
              </Filter>
              <Filter>
              <FilterText>Sort By Products:</FilterText>
              <Select onChange = {(e) => setsorts(e.target.value)}>
                  <Option value="Newest">Popularity</Option>
                  <Option value="High to Low">High to Low</Option>
                  <Option vlaue="Low to High">Low to High</Option>
                  <Option value="Discount">Discount</Option>
              </Select>
              </Filter>
          </FilterContainer>
          <Products cat={cat} filters={filters} sort={sort}/>
          <Newsletter/>
          <Footer/>
        
      </Container>
  )
};

export default ProductList;
