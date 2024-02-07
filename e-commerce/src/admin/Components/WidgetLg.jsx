import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { format } from "timeago.js";
import { userRequest } from "../requestMethods";

const WidgetLgContainer = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

const WidgetLgTitle = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

const WidgetLgTable = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

const WidgetLgTr = styled.tr``;

const WidgetLgTh = styled.th`
  text-align: left;
`;

const WidgetLgUser = styled.td`
  display: flex;
  align-items: center;
  font-weight: 600;
`;

const WidgetLgName = styled.span``;

const WidgetLgDate = styled.td`
  font-weight: 300;
`;

const WidgetLgAmount = styled.td`
  font-weight: 300;
`;

const WidgetLgStatus = styled.td``;

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton" + type}>{type}</button>;
  };

  return (
    <WidgetLgContainer>
      <WidgetLgTitle>Latest Transactions</WidgetLgTitle>
      <WidgetLgTable>
        <WidgetLgTr>
          <WidgetLgTh>Customer</WidgetLgTh>
          <WidgetLgTh>Date</WidgetLgTh>
          <WidgetLgTh>Amount</WidgetLgTh>
          <WidgetLgTh>Status</WidgetLgTh>
        </WidgetLgTr>
        {orders.map((order) => (
          <WidgetLgTr key={order._id}>
            <WidgetLgUser>
              <WidgetLgName>{order.userId}</WidgetLgName>
            </WidgetLgUser>
            <WidgetLgDate>{order.createdAt}</WidgetLgDate>
            <WidgetLgAmount>${order.amount}</WidgetLgAmount>
            <WidgetLgStatus>
              <Button type={order.status} />
            </WidgetLgStatus>
          </WidgetLgTr>
        ))}
      </WidgetLgTable>
    </WidgetLgContainer>
  );
};

export default WidgetLg;
