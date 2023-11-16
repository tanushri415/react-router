import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Details() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {user && <h1>{user.name}</h1>}
      <p>{user?.address.street}</p>
    </div>
  );
}
