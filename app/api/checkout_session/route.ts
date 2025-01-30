import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

console.log(process.env.STRIPE_SECRET_KEY);

export async function POST(req, res) {
  // console.log(req);
  if (req.method === "POST") {
    // console.log(await req.json());
    const line_items = await req.json();
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items,
        mode: "payment",

        success_url: `http://localhost:3000/?success=true?`,
        cancel_url: `http://localhost:3000/?canceled=true`,
      });
      console.log(session);
      return NextResponse.json({
        sessionUrl: session.url,
      });
    } catch (err) {
      console.log(err);
      return NextResponse.json({ error: err }, { status: 400 });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
