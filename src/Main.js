import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import styled from "styled-components";

const Main = (props) => {
  const history = useHistory();
  const week_arr = ["월","화","수","목","금","토","일"]

  const week_score = week_arr.map((d, idx) => {
    return {
      day: d,
      rate:
        Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) + Math.ceil(1),
    }
  });

  return (
    <AppWrap>
      <Container>
        <Title>나의 일주일은?</Title>
        <hr />
        <div>
        {week_score.map((d, idx) => {
          return (
            <div key={idx}>
              <div style={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
              <h3 style={{ color: "dimgrey", marginRight: "15px" }}>{d.day}</h3>
              <Circles>
                {Array.from({ length: 5 }, (item, idx) => {
                  return (
                    <Circle style={{ 
                      backgroundColor: d.rate < idx ? "#eee" : "slateblue",
                    }} 
                    key={idx} />
                  );
                })}
              </Circles>
              <Triangle  onClick={() => {
                history.push(`/review/${d.day}`);
              }}/>
              </div>
            </div>
          );
        })}
        </div>
      </Container>
    </AppWrap>
  );
};

const AppWrap = styled.div`
  background-color: #eee;
  height: 100vh;
  width : 100vw;
  display: inline-block;
`;
const Container = styled.div`
  background-color: #fff;
  width: 65vw;
  max-width: 350px;
  margin: 20px auto 20px;
  height: 85vh;
  padding: 35px 20px 35px 25px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: slateblue;
  text-align: center;
`;

const Circles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 35px;
  margin: 15px 5px 15px;
  cursor: pointer;
`;

const Triangle = styled.div`
  appearance: none,
  width: 0;
  height: 0;
  margin-left: 15px;
  border-bottom: 20px solid transparent;
  border-top: 20px solid transparent;
  border-left: 30px solid slateblue;
  cursor: pointer;
`;

export default Main;