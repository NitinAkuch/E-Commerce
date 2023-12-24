import FeaturedInfo from "../components/FeaturedInfo";
import Chart from "../components/Chart";
import WidgetSm from "../components/WidgetSm";
import WidgetLg from "../components/WidgetLg";
import styled from "styled-components";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";

const Container = styled.div`
  flex: 4;
`;

const HomeWidget = styled.div`
  display: flex;
  margin: 20px;
`;

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("/users/stats");
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch {}
    };
    getStats();
  }, [MONTHS]);

  return (
    <Container>
      <FeaturedInfo />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <HomeWidget>
        <WidgetSm />
        <WidgetLg />
      </HomeWidget>
    </Container>
  );
};

export default Home;
