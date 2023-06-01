import { useFetch } from "../customize/fetch";
const Covid = () => {
  const {
    data: dataCovid,
    isLoading,
    isError,
  } = useFetch("https://corona.lmao.ninja/v2/continents?yesterday=true&sort");

  return (
    <table>
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
