import { useEffect, useState } from "react";
import axios from "axios";
const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  // component didmount
  useEffect(() => {
    let res = axios
      .get("https://corona.lmao.ninja/v2/continents?yesterday=true&sort")
      .then((res) => setDataCovid(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <table>
      {console.log(">>check data covid", dataCovid)}
      <thead>
        <tr>
          <th>Cases</th>
          <th>Deaths</th>
          <th>Recovered</th>
          <th>Active </th>
          <th>Critical</th>
        </tr>
      </thead>
      <tbody>
        {dataCovid &&
          dataCovid.length > 0 &&
          dataCovid.map((item) => {
            return (
              <tr key={item.updated}>
                <td>{item.cases}</td>
                <td>{item.deaths}</td>
                <td>{item.recovered}</td>
                <td>{item.active}</td>
                <td>{item.critical}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Covid;
