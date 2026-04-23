import fs from "fs";
import path from "path";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const filePath = path.join(process.cwd(), "data", "users.json");

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

    const user = users.find((u: any) => u.email === email);

    if (!user) {
      return Response.json({ message: "No user" }, { status: 400 });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return Response.json({ message: "Wrong password" }, { status: 400 });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      "secretkey"
    );

    return Response.json({
      token,
      role: user.role
    });
  } catch (error) {
    return Response.json({ message: "Error" }, { status: 500 });
  }
}