import styled from "styled-components";
import React, { useState, useEffect} from "react";
import img from "../assets/tech conference.jpg"


const CountDown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);


  useEffect(() => {
    const now: any = new Date();
    const Target: any = new Date("10/14/2023 11:59:59");
    const difference = Target - now

    const interval = setInterval(() => {

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <Container>
      <Holder>
  
        <Wrap>
                      <Head>
          <h1>COMING SOON ....</h1>
        </Head>
        <WrapHold>
          
        <Daysdiv>
            <Holds> {days} </Holds>
            <Div>Days</Div>
          </Daysdiv>
          <Daysdiv>
            <Holds> {hours} </Holds>
            <Div>Hours</Div>
          </Daysdiv>
          <Daysdiv>
            <Holds> {minutes} </Holds>
            <Div>Minutes</Div>
          </Daysdiv>
          <Daysdiv>
            <Holds> {seconds} </Holds>
            <Div>Seconds</Div>
          </Daysdiv>
        </WrapHold>
        </Wrap>

        <Wrap2>
          <Wrapper>
            <img src={img} alt="" />
          </Wrapper>

        </Wrap2>
      </Holder>
    </Container>
  );
};

export default CountDown;

const WrapHold= styled.div`
  display: flex;
  height: 60%;
  /* background-color: aliceblue; */
  padding: 0px 25px 0px 0px;
  width: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
  width: 100%;
}
@media (max-width: 320px) {
width: 90%;
margin-top: -30%;
}
`


const Wrapper = styled.div`
width: 86%;
height: 90%;
img{
  width: 100%;
  height: 100%;
  object-fit: coverx;
  
  @media (max-width: 1024px) {
  width: 90%;
  object-fit: cover;
}
}
`

const Wrap2 = styled.div`
width: 40%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
@media (max-width: 1024px) {
  bottom: 5px;
  left: 1px;
  height: 60%;
  width: 100%;
  margin-left: 13px;
}
`

const Head = styled.h1`
line-height: 10px;
margin-left: 8%;
color: #fff;

@media (max-width: 1024px) {
  font-size: 17px;
  width: 100%;
}
@media (max-width: 320px) {
  font-size: 15px;
  margin-right: 10px;
}
`

const Div = styled.div`
  color: #fff;
  font-size: 25px;
  font-weight: bold;

  @media (max-width: 1024px) {
    font-size: 15px;
}
`;

const Holds = styled.div`
  color: #fff;
  font-size: 90px;
  font-weight: bolder;
  line-height: 150px;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    font-size: 50px;
}

@media (max-width: 320px) {
font-size: 30px;
line-height: 80px;

}
`;

const Daysdiv = styled.div`
height: 140px;
width: 75px;
padding: 40px 40px;
background-color: #9B7BE0;
background: rgb(245,35,219);
background: radial-gradient(circle, rgba(245,35,219,0.835171568627451) 0%, rgba(71,59,117,1) 87%);
border-radius: 10px;
display: flex;
line-clamp: inherit;
justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-left: 25px;

  @media (max-width: 1024px) {
  width: 20px;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
}

  @media (max-width: 320px) {
  width: 10px;
  height: 10%;
  padding: 25px 20px 10px 20px;
  margin-bottom: 20px;
}

`;

const Wrap = styled.div`
  display: flex;
  height: 80vh;
  width: 60%;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
  width: 100%;
}
`;

const Holder = styled.div`
width: 90%;
height: 96vh;
background-color: #000000;
  align-items: center;
`;

const Container = styled.div`
 width: 100%;
min-height: 100vh;
height: 100%;
background-color: #9B7BE0;
background: rgb(245,35,219);
background: radial-gradient(circle, rgba(245,35,219,0.835171568627451) 0%, rgba(71,59,117,1) 87%);
display: flex;
justify-content: center;
align-items: center;
`;
