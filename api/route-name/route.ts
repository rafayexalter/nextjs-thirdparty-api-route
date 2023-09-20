import { NextResponse } from "next/server";

export async function GET() {
  // Fetch data from third party domain in Next.js route
  const res = await fetch(process.env.FAST_API!);
  const data = await res.json();

  return NextResponse.json(data);
}
