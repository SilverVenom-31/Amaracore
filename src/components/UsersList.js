import { useEffect, useState } from "react";
import { getUsersList } from "../service/UserService";
import Pagination from "./Pagination";
import "../styles/userListStyles.css";

function UsersList() {
  const [usersList, setUsersList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(15);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  useEffect(() => {
    if (usersList.length === 0) {
      getUsersList().then((res) => {
        setUsersList(res.data);
      });
    }
  }, []);
  const currentRecords = usersList.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(usersList.length / recordsPerPage);

  return (
    <div className="screen">
      <table className="table  table-hover tableStyle">
        <thead>
          <tr>
            <th>Id</th>
            <th>Avatar</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Company</th>
            <th>Job Title</th>
          </tr>
        </thead>
        <tbody>
          {currentRecords?.map((user) => (
            <tr>
              <td>{user?.id}</td>
              <td>
                <img src={user?.avatar} />
              </td>
              <td>{user?.first_name}</td>
              <td>{user?.last_name}</td>
              <td>{user?.phone}</td>
              <td>{user?.email}</td>
              <td>{user?.company}</td>
              <td>{user?.job_title}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default UsersList;
