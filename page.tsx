async function getData() {
  // We have to provide base domain url in server components.
  const data = await fetch(process.env.URL + "/api/route-name", {
    method: "GET",
  }).then((response) => response.json());
  return data;
}

export default async function Page() {
  const data = await getData();
  console.log(JSON.stringify(data));

  return <div>{JSON.stringify(data)}</div>;
}
