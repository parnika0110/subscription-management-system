import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "plans.json");

export async function GET() {
  const plans = JSON.parse(fs.readFileSync(filePath, "utf8"));
  return Response.json(plans);
}

export async function POST(req: Request) {
  const { name, price } = await req.json();

  const plans = JSON.parse(fs.readFileSync(filePath, "utf8"));

  plans.push({
    id: Date.now(),
    name,
    price
  });

  fs.writeFileSync(filePath, JSON.stringify(plans, null, 2));

  return Response.json({ message: "Plan Added" });
}

export async function PUT(req: Request) {
  const { id, name, price } = await req.json();

  const plans = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const updated = plans.map((plan: any) =>
    plan.id === id ? { ...plan, name, price } : plan
  );

  fs.writeFileSync(filePath, JSON.stringify(updated, null, 2));

  return Response.json({ message: "Plan Updated" });
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  let plans = JSON.parse(fs.readFileSync(filePath, "utf8"));

  plans = plans.filter((plan: any) => plan.id !== id);

  fs.writeFileSync(filePath, JSON.stringify(plans, null, 2));

  return Response.json({ message: "Plan Deleted" });
}