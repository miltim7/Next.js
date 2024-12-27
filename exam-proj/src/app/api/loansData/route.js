import { NextResponse } from 'next/server';
import path from 'path';
import { promises as fs } from 'fs';

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'data', 'loans-data.json');
    const data = await fs.readFile(filePath, 'utf8');
    const parsedData = JSON.parse(data);

    return NextResponse.json(parsedData);
  } catch (error) {
    console.error("Error reading loans data:", error);
    return NextResponse.json(
      { message: "Failed to load loans data." },
      { status: 500 }
    );
  }
}
