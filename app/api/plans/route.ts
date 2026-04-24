import { connectDB } from "@/lib/mongodb";
import Plan from "@/models/Plan";

export async function GET() {
  await connectDB();
  const plans = await Plan.find();
  return Response.json(plans);
}

export async function POST(req: Request) {
  await connectDB();
  const { name, price } = await req.json();

  await Plan.create({ name, price });

  return Response.json({ message: "Plan added" });
}

export async function PUT(req: Request) {
  await connectDB();
  const { id, name, price } = await req.json();

  await Plan.findByIdAndUpdate(id, { name, price });

  return Response.json({ message: "Plan updated" });
}

export async function DELETE(req: Request) {
  await connectDB();
  const { id } = await req.json();

  await Plan.findByIdAndDelete(id);

  return Response.json({ message: "Plan deleted" });
}