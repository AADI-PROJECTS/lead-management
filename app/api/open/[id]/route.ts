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
      emailOpened: true,
    }
  );

  const pixel = Buffer.from(
    "R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
    "base64"
  );

  return new Response(pixel, {
    headers: {
      "Content-Type":
        "image/gif",
    },
  });
}