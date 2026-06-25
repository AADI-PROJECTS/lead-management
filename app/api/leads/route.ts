import { NextResponse } from "next/server";

import { connectDB } from "@/app/lib/mongodb";
import Lead from "@/app/models/Lead";
import { resend } from "@/app/lib/resend";

export async function POST(
  req: Request
) {
  await connectDB();

  const body = await req.json();

  const lead = await Lead.create({
    ...body,
    emailSent: true,
  });

  const openPixel =
    `${process.env.NEXT_PUBLIC_APP_URL}` +
    `/api/open/${lead._id}`;

  const trackingLink =
    `${process.env.NEXT_PUBLIC_APP_URL}` +
    `/api/click/${lead._id}`;

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: body.email,
    subject: "Thank You",
    html: `
      <h2>Hello ${body.name}</h2>

      <p>
      We received:
      ${body.requirement}
      </p>

      <a href="${trackingLink}">
      Learn More
      </a>

      <img
      src="${openPixel}"
      width="1"
      height="1"
      />
    `,
  });

  return NextResponse.json({
    success: true,
  });
}