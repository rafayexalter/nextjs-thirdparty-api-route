import { NextResponse } from "next/server";

export async function GET() {
  // Fetch data from third party domain in Next.js route
  const res = await fetch("http://127.0.0.1:8000/");
  const data = await res.json();

  return NextResponse.json(data);
}
