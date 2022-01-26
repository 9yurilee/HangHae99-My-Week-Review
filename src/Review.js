import { useHistory, useParams } from "react-router-dom";
import MyWeekReview from "./MyWeekReview";
import React from "react";
import styled from "styled-components";


const Review = (props) => {
  const history = useHistory();
  const params = useParams();
  const [rate, setRate] = React.useState(0);

  React.useEffect(() => {
    const press = (e) => {
      if ([1, 2, 3, 4, 5].indexOf(parseInt(e.key)) !== -1) {
        setRate(parseInt(e.key));
      }
    };
    window.addEventListener("click", press);

    return () => window.removeEventListener("click", press);
  }, []);

  return (
    <>
      <AppWrap>
        <h3 style={{ textAlign: "center" }}>
          <WeekDay>{params.week_day}요일</WeekDay>
          {' '}평점 남기기
        </h3>
        <Score>
          {Array.from({ length: 5 }, (item, idx) => {
            return (
              <div key={idx} onClick={() => {
                setRate(idx + 1);
              }}
                style={{
                  width: "35px",
                  height: "35px",
                  borderRadius: "35px",
                  margin: "3px",
                  backgroundColor: rate < idx + 1 ? "#eee" : "salmon",
                }}
              ></div>
            );
          })}
        </Score>

        <Button onClick={() => {
          history.goBack();
        }}
        >
          평점 남기기
        </Button>
      </AppWrap>
    </>
  );
};

const AppWrap = styled.div`
background-color: #fff;
width: 65vw;
max-Width: 350px;
margin: 10px auto 5px;
height: 80vh;
padding: 25px;
border: 1px solid #ddd;
border-Radius: 15px;
`;

const WeekDay = styled.span`
color: #fff;
font-weight: bold;
background: salmon;
padding: 5px;
border-radius: 5px;
`;

const Score = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 20px 0px;
width: 100%;
`;

const Button = styled.button`
width: 100%;
background-color: pink;
border: none;
border-radius: 10px;
padding: 15px;
color: #fff;
`;

export default Review;
