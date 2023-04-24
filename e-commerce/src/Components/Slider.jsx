import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
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
  padding: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
`;
const Button = styled.button`
  padding: 5px;
  margin-left: 10px;
  cursor: pointer;
  background-color: transparent;
  border: solid 1px gray;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else if (direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
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
