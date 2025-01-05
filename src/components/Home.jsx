import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://a02d-2401-4900-234e-cda-b8cf-a3c5-b118-a839.ngrok-free.app/api/auth/users");
        if (Array.isArray(res)) {
          setUsers(res);
        } else {
          console.error("Data is not an array:", res.data);
        }
      } catch (error) {
        console.error("Error fetching users", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px", textAlign: "left" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user._id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.name}</td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>{user.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" style={{ border: "1px solid #ddd", padding: "8px", textAlign: "center" }}>
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
