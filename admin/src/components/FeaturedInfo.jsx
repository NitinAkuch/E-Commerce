import styled from "styled-components";

import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Featured = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

const FeaturedItem = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const FeaturedTitle = styled.span`
  font-size: 20px;
`;

const FeaturedMoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
  align-items: center;
`;

const FeaturedMoney = styled.span`
  font-size: 30px;
  font-weight: 600;
`;

const FeaturedMoneyRate = styled.span`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const FeaturedSub = styled.span`
  font-size: 15px;
  color: gray;
`;

const FeaturedInfo = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        setIncome(res.data);
        setPerc((res.data[1].total * 100) / res.data[0].total - 100);
      } catch {}
    };
    getIncome();
  }, []);

  return (
    <Featured>
      <FeaturedItem>
        <FeaturedTitle>Revenue</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>${income[1]?.total}</FeaturedMoney>
          <FeaturedMoneyRate>
            %{Math.floor(perc)}{" "}
            {perc < 0 ? (
              <ArrowDownwardIcon
                style={{ fontSize: "14px", marginLeft: "5px", color: "red" }}
              />
            ) : (
              <ArrowUpwardIcon
                style={{ fontSize: "14px", marginLeft: "5px", color: "green" }}
              />
            )}
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to Last Month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Sales</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$4,415</FeaturedMoney>
          <FeaturedMoneyRate>
            {" "}
            -1.4{" "}
            <ArrowDownwardIcon
              style={{ fontSize: "14px", marginLeft: "5px", color: "red" }}
            />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to Last Month</FeaturedSub>
      </FeaturedItem>
      <FeaturedItem>
        <FeaturedTitle>Cost</FeaturedTitle>
        <FeaturedMoneyContainer>
          <FeaturedMoney>$2,215</FeaturedMoney>
          <FeaturedMoneyRate>
            +2.4{" "}
            <ArrowUpwardIcon
              style={{ fontSize: "14px", marginLeft: "5px", color: "green" }}
            />
          </FeaturedMoneyRate>
        </FeaturedMoneyContainer>
        <FeaturedSub>Compared to Last Month</FeaturedSub>
      </FeaturedItem>
    </Featured>
  );
};

export default FeaturedInfo;
