import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://fa0b-2401-4900-2348-813f-4d09-12ff-2325-13b.ngrok-free.app/api/auth/users",
          {
            headers: {
              "ngrok-skip-browser-warning": "true", // Skip ngrok warning page
            },
          }
        );
        if (Array.isArray(res.data)) {
          setUsers(res.data);
        } else {
          setError("Data is not in the expected format.");
        }
      } catch (err) {
        setError("Error fetching users: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

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
