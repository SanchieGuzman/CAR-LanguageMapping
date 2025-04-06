import { Card, CardDescription, CardTitle, CardHeader } from "./ui/card";

export default function MunicipalityCard({className}) {
  return (
    <Card className={`${className} relative pt-0`}>
      <div className="w-full overflow-hidden shadow-lg rounded-t-md">
        <img
          src="../public/kiangan.jpg"
          alt="Kiangan"
          className="w-full h-60 object-cover transition-transform duration-300 hover:scale-105 rounded-t-md"
        />
      </div>
      {/* content here */}
      <CardHeader>
        <CardTitle>Baguio City</CardTitle>
        <CardDescription>Summer capital of the Philippines, known for their emerushits</CardDescription>
      </CardHeader>
    </Card>
  );
}
