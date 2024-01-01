import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";
import { mobile } from "../responsive";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })}
`;
const Arrow = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  position: absolute;
  background-color: #ebe1fc;
  opacity: 0.5;
  z-index: 2;
  cursor: pointer;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  margin: 10px;
`;
const Title = styled.h1`
  font-size: 70px;
  padding: 10px;
`;
const Desc = styled.p`
  font-size: 25px;
  padding: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
`;
const Button = styled.button`
  margin-top: 25px;
  margin-left: 50px;
  padding: 15px 25px;
  font-size: 24px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: #04aa6d;
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;

  :hover {
    background-color: #3e8e41;
  }

  :active {
    background-color: #f6828c;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {/* Slide First */}
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>Order Now</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
