'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch('/api/getUsers')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const createUser = async () => {
    const response = await fetch('/api/createUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });
    const user = await response.json();
    setUsers([...users, user]);
  };

  return (
    <div>
      <h1>LA DOT KCC</h1>
      <Link href="/news">
        <button>Cliquer pour voir les utilisateurs</button>
      </Link>
      <h1>LA DOT KCC</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nom" />
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <button onClick={createUser}>Créer un utilisateur</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
