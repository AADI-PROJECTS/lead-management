async function getAnalytics() {
  const res = await fetch(
    "http://localhost:3000/api/analytics",
    {
      cache: "no-store",
    }
  );

  return res.json();
}

export default async function Dashboard() {
  const data =
    await getAnalytics();

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-8">
        Analytics Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-5">
        <Card
          title="Total Leads"
          value={data.totalLeads}
        />

        <Card
          title="Emails Sent"
          value={data.emailsSent}
        />

        <Card
          title="Emails Opened"
          value={data.emailsOpened}
        />

        <Card
          title="Open Rate"
          value={`${data.openRate}%`}
        />

        <Card
          title="Links Clicked"
          value={data.linksClicked}
        />

        <Card
          title="Click Rate"
          value={`${data.clickRate}%`}
        />
      </div>
    </div>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) {
  return (
    <div className="bg-white shadow rounded-xl p-6">
      <h3 className="text-gray-500">
        {title}
      </h3>

      <h2 className="text-4xl font-bold mt-3">
        {value}
      </h2>
    </div>
  );
}