import { useState, useEffect } from "react";
import { api } from "./lib/api";
import { IVehicle } from "./typings";
import { Button } from "./components/ui/button";

function App() {
  const [data, setData] = useState<IVehicle[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const vehicles = await api<IVehicle[]>("GET", "/vehicles");
        setData(vehicles);
        console.log(vehicles);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData(); // Fetch data on component mount
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || !data.length) return <>No Vehicles found</>;

  return (
    <>
      {data.map((v) => (
        <div key={v.id}>
          <div>{v.name}</div>
          <div>{v.model}</div>
          <div>{v.region}</div>
          <div>{v.status}</div>
          <div>{v.type}</div>
          <Button>Hey</Button>
        </div>
      ))}
    </>
  );
}

export default App;
