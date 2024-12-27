import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "src", "data", "accounts-data.json");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileContent);

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Failed to read data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to load data" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
