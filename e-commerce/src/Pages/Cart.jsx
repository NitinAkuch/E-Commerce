import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { mobile } from "../responsive";
import { Add, Remove } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const AddQuantity = styled(Add)`
  border-radius: 50%;
  margin: 15px;
  :hover {
    background-color: #bcb7b7;
    cursor: pointer;
  }
`;

const ReduceQuantity = styled(Remove)`
  border-radius: 50%;
  margin: 15px;
  :hover {
    cursor: pointer;
    background-color: #bcb7b7;
  }
`;


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  // const [stripeToken, setStripeToken] = useState(null);
  // const navigate = useNavigate();

 

  ////
  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await userRequest.post("/checkout/payment", {
  //         tokenId: stripeToken.id,
  //         amount: 500,
  //       });
  //       navigate("/success", {
  //         stripeData: res.data,
  //         products: cart,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, cart, cart.total, navigate]);

  const handlePayment = async () => {
    const stripe = await loadStripe("pk_test_51NJvigSEAYPn3rVBblL2xpDhTzkpajLevdUnkSfgC8rm1YHrIlm0JfUSmOrsMr4NXKwulSioy3ibWkUft8TxriAq0064JpYdDI");
    const body = {
      productsCarted: cart,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch("https://e-commerce-0k5w.onrender.com/api/checkout/payment", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await response.json();
    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.log(result.error);
    }
  }
    return (
      <Container>
        <Navbar />
        <Announcement />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <Link to="/">
              <TopButton>CONTINUE SHOPPING</TopButton>
            </Link>
            <TopTexts>
              <TopText>Shopping Bag(2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
            <Button onClick={handlePayment}>CHECKOUT NOW</Button>
          </Top>
          <Bottom>
            <Info>
              {cart.products.map((product) => (
                <Product key={product.title}>
                  <ProductDetail>
                    <Image src={product.img} />
                    <Details>
                      <ProductName>
                        <b>Product:</b> {product.title}
                      </ProductName>
                      <ProductId>
                        <b>ID:</b> {product._id}
                      </ProductId>
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size:</b> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                      <AddQuantity />
                      <ProductAmount> {product.quantity}</ProductAmount>
                      <ReduceQuantity />
                    </ProductAmountContainer>
                    <ProductPrice>
                      {" "}
                      ₹ {product.price * product.quantity}
                    </ProductPrice>
                  </PriceDetail>
                </Product>
              ))}
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>₹{cart.total}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>₹ 50.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>₹ -50.90</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice>₹{cart.total}</SummaryItemPrice>
              </SummaryItem>
              <Button onClick={handlePayment}>CHECKOUT NOW</Button>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
    );
  };

export default Cart;

// {/* <Product>
//               <ProductDetail>
//                 <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
//                 <Details>
//                   <ProductName>
//                     <b>Product:</b> HAKURA T-SHIRT
//                   </ProductName>
//                   <ProductId>
//                     <b>ID:</b> 93813718293
//                   </ProductId>
//                   <ProductColor color="gray" />
//                   <ProductSize>
//                     <b>Size:</b> M
//                   </ProductSize>
//                 </Details>
//               </ProductDetail>
//               <PriceDetail>
//                 <ProductAmountContainer>
//                   <Add />
//                   <ProductAmount>1</ProductAmount>
//                   <Remove />
//                 </ProductAmountContainer>
//                 <ProductPrice>$ 20</ProductPrice>
//               </PriceDetail>
//             </Product> */}
