import { connectDB } from "@/app/lib/mongodb";
import Lead from "@/app/models/Lead";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  await connectDB();

  await Lead.findByIdAndUpdate(
    params.id,
    {
      linkClicked: true,
    }
  );

  return Response.redirect(
    process.env.REDIRECT_URL!
  );
}