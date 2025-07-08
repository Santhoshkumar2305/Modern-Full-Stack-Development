import { useState, useEffect } from "react";
import Table from './Table';
import { ThreeDot } from "react-loading-indicators";

const rowsPerPage = 40;

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      if (res.ok) {
        const apiData = await res.json();
        setData(apiData);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = data.slice(startIndex, startIndex + rowsPerPage);

  const handlePrev = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <h3>To Do List</h3>
      {loading ? (
        <ThreeDot color="#32cd32" size="medium" text="" textColor="" />
      ) : (
        <>
          <table className="table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>ID</th>
                <th>Title</th>
                <th>Completed Status</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((el) => (
                <Table
                  key={el.id}
                  userId={el.userId}
                  id={el.id}
                  title={el.title}
                  completed={el.completed}
                />
              ))}
            </tbody>
          </table>

          <div className="pagination">
            <button onClick={handlePrev} disabled={currentPage === 1}>
              &lt;&lt;
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              &gt;&gt;
            </button>
          </div>
          
        </>
      )}
    </>
  );
};

export default Users;
