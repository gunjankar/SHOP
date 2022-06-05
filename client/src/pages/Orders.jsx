import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import "../App.css";

const Orders = () => {
  const [myOrders, setmyOrders] = useState([]);
  const [saveOrder, setsaveOrder] = useState();
  useEffect(() => {
    axios({
      // url: `http://localhost:8000/api/orders/find/${localStorage.getItem(
      //   "userId"
      // )}`,
      url: `http://localhost:8000/api/orders/`,
      method: "GET",
    })
      .then((data) => {
        console.log(data);
        setmyOrders(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const myOrdersList = [];
    var slno = 1;
    myOrders.map((order) => {
      myOrdersList.push(
        <tr>
          <td>{slno}</td>
          <td>{order._id}</td>
          <td>{order.products.length}</td>
          <td>{order.amount}</td>
          <td>
            {new Date(order.createdAt).getDate() +
              "/" +
              (new Date(order.createdAt).getMonth() + 1) +
              "/" +
              new Date(order.createdAt).getFullYear()}
          </td>
        </tr>
      );
      slno += 1;
    });
    setsaveOrder(myOrdersList);
    console.log(saveOrder);
  }, [myOrders]);
  return (
    <>
      <Navbar />
      <div className="order_title">
        <h2>Order History</h2>
      </div>
      <div className="Order">
        <table>
          <tr>
            <th>Sl No.</th>
            <th>OrderId</th>
            <th>No. of Products</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
          {saveOrder}
        </table>
      </div>
    </>
  );
};

export default Orders;
