interface DashboardCardsProps {
  title: string;
  value: string | number;
}

export default function DashboardCards({
  title,
  value,
}: DashboardCardsProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border">
      <h3 className="text-gray-500 text-sm">
        {title}
      </h3>

      <h2 className="text-4xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}