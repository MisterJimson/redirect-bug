import { getData, getData2 } from "@/backend/data";

export default async function Home() {
  const data = await getData2();
  return <div>{JSON.stringify(data)}</div>;
}
