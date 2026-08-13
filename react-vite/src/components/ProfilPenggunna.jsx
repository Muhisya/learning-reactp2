import React from 'react';


function ProfilPenggunna() {
  const users = [
    { id: 1, name: "Rizqi", role: "Eldest Brother" },
    { id: 2, name: "Nada", role: "Middle Sister" },
    { id: 3, name: "Hibban", role: "Youngest Brother" }
  ];

  if (users.length === 0) return <p>No family members found.</p>;

  return (
    <> 
      {users.length > 0 && <h1>Family Members:</h1>}

      {users.length === 0 ? (
        <p>No family members found.</p>
      ) : (
        <div> 
          {users.map((user) => (
            <div key={user.id}>
              <h2>Hi!. My name is {user.name} and my role is a {user.role}</h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ProfilPenggunna;