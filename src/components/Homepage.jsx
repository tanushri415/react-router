import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <Link key={user?.id} to={`/details/${user?.id}`}>
          {user.name}
        </Link>
      ))}
    </div>
  );
}
