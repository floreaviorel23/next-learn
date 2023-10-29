import React from "react";

interface User {
  id: number;
  name: string;
}

async function Users() {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  let users: User[] = await res.json();

  return (
    <>
      <h1>User</h1>
      <ul>
        {/* <pre>{JSON.stringify(todosData, null, 3)}</pre> */}
        {users.map((user) => (
          <li>
            <p>
              {user.id} : {user.name}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Users;
