// app/users/page.tsx
import { PrismaClient } from '../../generated/prisma/client';

const prisma = new PrismaClient();

export default async function UsersPage() {
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
}