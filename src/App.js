import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./Pagination";
import Passengers from "./Passengers";

function App() {
  const [passengersData, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(50);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePreviousButtonClick = (event, currentPageGroup) => {
    setCurrentPage((currentPage) => currentPage - 1);
  };

  const handleNextButtonClick = (event, currentPageGroup) => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  const handlePreviousPageGroupButtonClick = (event, currentPageGroup) => {
    setCurrentPage(currentPageGroup[0] - 1);
  };
  const handleNextPageGroupButtonClick = (event, currentPageGroup) => {
    setCurrentPage(currentPageGroup[currentPageGroup.length - 1] + 1);
  };

  const handlePageChangeButtonClick = (event, currentPageGroup) => {
    setCurrentPage(Number(event.target.id));
  };

  useEffect(() => {
    fetch(
      `https://api.instantwebtools.net/v1/passenger?page=${currentPage}&size=5`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        setTotalPage(json.totalPages);
      });
  }, [currentPage]);

  return (
    <div className="App">
      <Passengers passengersData={passengersData} />
      <Pagination
        totalPage={totalPage}
        currentPage={currentPage}
        pagesPerPageGroup={5}
        handlePreviousButtonClick={handlePreviousButtonClick}
        handleNextButtonClick={handleNextButtonClick}
        handlePageChangeButtonClick={handlePageChangeButtonClick}
        handlePreviousPageGroupButtonClick={handlePreviousPageGroupButtonClick}
        handleNextPageGroupButtonClick={handleNextPageGroupButtonClick}
      />
    </div>
  );
}

export default App;
