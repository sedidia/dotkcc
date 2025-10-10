import { NextResponse } from 'next/server';
// import { PrismaClient } from '@prisma/client';
import { PrismaClient } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { name, email } = await request.json();
  const user = await prisma.user.create({ data: { name, email } });
  return NextResponse.json(user);
}
