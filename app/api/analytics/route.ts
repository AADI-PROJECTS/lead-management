import { connectDB } from "@/app/lib/mongodb";
import Lead from "@/app/models/Lead";

export async function GET() {
  await connectDB();

  const totalLeads =
    await Lead.countDocuments();

  const emailsSent =
    await Lead.countDocuments({
      emailSent: true,
    });

  const emailsOpened =
    await Lead.countDocuments({
      emailOpened: true,
    });

  const linksClicked =
    await Lead.countDocuments({
      linkClicked: true,
    });

  const openRate =
    emailsSent > 0
      ? (
          (emailsOpened /
            emailsSent) *
          100
        ).toFixed(2)
      : 0;

  const clickRate =
    emailsSent > 0
      ? (
          (linksClicked /
            emailsSent) *
          100
        ).toFixed(2)
      : 0;

  return Response.json({
    totalLeads,
    emailsSent,
    emailsOpened,
    linksClicked,
    openRate,
    clickRate,
  });
}