import { useEffect, useState } from "react";
import axios from "axios";
const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // component didmount
  useEffect(() => {
    try {
      async function fetchData() {
        let res = await axios.get(
          "https://corona.lmao.ninja/v2/continents?yesterday=true&sort"
        );
        let data = res && res.data ? res.data : [];
        setDataCovid(data);
        setIsLoading(false);
        setIsError(false);
      }
      fetchData();
    } catch (e) {
      setIsError(true);
      setIsLoading(false);
      alert(e.message);
    }
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
        {isError === false &&
          isLoading === false &&
          dataCovid &&
          dataCovid.length > 0 &&
          dataCovid.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.cases}</td>
                <td>{item.deaths}</td>
                <td>{item.recovered}</td>
                <td>{item.active}</td>
                <td>{item.critical}</td>
              </tr>
            );
          })}

        {isLoading === true && (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              Loading ...
            </td>
          </tr>
        )}

        {isError === true && (
          <tr>
            <td colSpan="5" style={{ textAlign: "center" }}>
              Something wrong ......
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Covid;
