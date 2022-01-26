import { useHistory } from "react-router-dom";
import React from 'react';
import styled from 'styled-components';

const MyWeekReview = (props) => {
  const history = useHistory();
  const day_text_arr = {
    0: "일",
    1: "월",
    2: "화",
    3: "수",
    4: "목",
    5: "금",
    6: "토",
  };
  const week_days = Object.keys(day_text_arr).map((_d, idx) => {
    let today = new Date().getDay();
    let d =
      today + parseInt(_d) > 6
        ? today + parseInt(_d) - 7
        : today + parseInt(_d);

    return day_text_arr[d];
  });

  const week_rates = week_days.map((w, idx) => {
    return {
      day: w,
      rate:
        Math.floor(Math.random() * (Math.floor(5) - Math.ceil(1) + 1)) +
        Math.ceil(1),
    };
  });

  return (
    <>
      <AppWrap>
      <h3 style={{ textAlign: "center" }}>내 일주일은?</h3>

      {week_rates.map((w, idx) => {
        return (
          <Week key={`week_day_${idx}`}>
            <p style={{ margin: "15px 10px", fontWeight: "bold" }}>
              {w.day}
            </p>
            {Array.from({ length: 5 }, (item, idx) => {
              return (
                <div
                  key={idx}
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "30px",
                    margin: "5px",
                    backgroundColor: w.rate < idx ? "#eee" : "salmon",
                  }}
                ></div>
              );
            })}
            <div
              style={{
                appearance: "none",
                margin : "0 15px",
                width: "1px",
                height: "1px",
                borderTop: "15px solid transparent",
                borderBottom: "15px solid transparent",
                borderLeft: "15px solid pink"
              }}
              onClick={() => {
                history.push(`/review/${w.day}`);
              }}
            ></div>
          </Week>
        );
      })}
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

const Week = styled.div`
display: flex;
justify-Content: center;
align-Items: center;
margin: 15px 0px;
width: 100%;
`;

export default MyWeekReview;