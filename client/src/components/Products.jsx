import { useEffect, useState } from "react";
import styled from "styled-components";
import { babyCare, covidEssentials, popularProducts} from "../data";
import Product from "./Product";
import axios from "axios";
import { Route, Switch } from "react-router";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat,filters,sort}) => {
    //console.log(cat, filters, sort);
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
     
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(cat ? `http://localhost:8000/api/products?category=${cat}` : "http://localhost:8000/api/products");
                setProducts(res.data);
            } catch (err) {

            }
        };
        getProducts()
    }, [cat]);

    useEffect(() => {
        cat && setFilteredProducts(
            products.filter((item) => Object.entries(filters).every(([key, value]) =>
                item[key].includes(value)
              )
            )
        );
    },[products,cat,filters]);

    useEffect(()=>{
        if(sort === "Newest"){
            setFilteredProducts(prev=>
                [...prev].sort((a,b) => a.createdAt - b.createdAt)
                );
        }
        else if(sort === "Low to High"){
            setFilteredProducts(prev=>
                [...prev].sort((a,b) => a.price - b.price)
                );
        }
        else if(sort === "High to Low"){
            setFilteredProducts(prev=>
                [...prev].sort((a,b) => b.price - a.price)
                );
        }
        else {
            setFilteredProducts(prev=>
                [...prev].sort((a,b) => a.createdAt - b.createdAt)
                );
        }
    },[sort]);
  return (
      <Container>
  
    {cat  
          ? babyCare.map((item) => <Product item={item} key={item.id} />)
          : babyCare
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
);
        
      </Container>
      
  );
};

export default Products;