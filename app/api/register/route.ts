import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const existing = users.find((u: any) => u.email === email);
    if (existing) {
      return Response.json({ message: "Email exists" }, { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);

    users.push({
      id: Date.now(),
      name,
      email,
      password: hashed,
      role: "user"
    });

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

    return Response.json({ message: "Registered" });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Error" }, { status: 500 });
  }
}