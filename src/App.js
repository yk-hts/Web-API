import React, { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const convertData = (item) => {
  let items = [];
  let judge = true;
  const newData = [];
  for (let i = 0; i < item.length - 1; i++) {
    if (item[i].Country[0] !== item[i + 1].Country[0]) {
      judge = false;
    }

    if (judge) {
      items.push({
        name: item[i].Country,
        NewConfirmed: item[i].NewConfirmed,
        Confirmed_by_Yesterday: item[i].TotalConfirmed - item[i].NewConfirmed,
      });
    } else {
      items.push({
        name: item[i].Country,
        NewConfirmed: item[i].NewConfirmed,
        Confirmed_by_Yesterday: item[i].TotalConfirmed - item[i].NewConfirmed,
      });
      newData.push(items);
      items = [];
      judge = true;
    }
  }
  newData.map((item) => console.log(item));
  return newData;
};

const App = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const Header = () => {
    return (
      <div>
        <section class="hero is-dark">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                各国の今までのコロナウイルス感染者の合計と新規感染者数
              </h1>
            </div>
          </div>
        </section>
      </div>
    );
  };

  const DrawGragh = () => {
    let d = [];
    if (data == null) {
      console.log("loading...");
    } else {
      d = convertData(data.Countries);
    }

    const display = {
      display:"inline-block",
      _display:"inline"
    }
    const textPosition = {
      float : "right"
    }

    let today = new Date()
    return (
      <div>
      <p style={textPosition}>このデータは<a href="https://covid19api.com/">こちら</a>より</p>
        <p className="title is-4">各国のアルファベットの先頭の文字</p>
          {d.map((item) => (
            <div style={display} className="is-size-5">
              <AnchorLink href={"#link" + item[0].name[0]} offset="50">
                {item[0].name[0]}
              </AnchorLink>
              /
            </div>
          ))}
          <p style={textPosition}>{today.getMonth()+1}月{today.getDate()}日現在</p>
        {d.map((item) => (
          <div id={"link" + item[0].name[0]}>
            <div className="title is-3">{item[0].name[0]}</div>
            <BarChart
              width={1500}
              height={300}
              data={item}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Confirmed_by_Yesterday" fill="#8884d8" />
              <Bar dataKey="NewConfirmed" fill="#82ca9d" />
            </BarChart>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Header />
      <DrawGragh />
    </div>
  );
};
export default App;
