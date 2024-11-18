import "./Passengers.css";

const Passengers = ({ passengersData }) => {
  return (
    <>
      <h1>Passengers</h1>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Trips</th>
              <th>Airline</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {passengersData.map((data) => (
              <tr key={data._id}>
                <td>{data.name}</td>
                <td>{data.trips}</td>
                <td>{data.airline[0].name}</td>
                <td>{data.airline[0].country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Passengers;
