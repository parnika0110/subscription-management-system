import { connectDB } from "@/lib/mongodb";
import Subscription from "@/models/Subscription";

export async function GET(req: Request) {
  await connectDB();

  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  const data = await Subscription.find({
    userEmail: email
  });

  return Response.json(data);
}

export async function POST(req: Request) {
  try {
    await connectDB();

    const body = await req.json();

    const newSub = await Subscription.create({
      userEmail: body.userEmail,
      planName: body.planName,
      price: body.price,
      status: "active"
    });

    return Response.json({
      message: "Subscribed successfully",
      data: newSub
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      { message: "Insert failed" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  await connectDB();

  const body = await req.json();

  await Subscription.deleteOne({
    userEmail: body.userEmail,
    planName: body.planName
  });

  return Response.json({
    message: "Unsubscribed"
  });
}