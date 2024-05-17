import { redirect } from "next/navigation";

export async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return {
    name: "John",
    age: 30,
  };
}

export async function getData2() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  redirect("/needs-setup");
}
