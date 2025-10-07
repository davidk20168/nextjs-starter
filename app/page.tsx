import { headers } from "next/headers";

export const dynamic = "force-dynamic";

function getBaseUrl() {
  const h = headers();
  const proto = h.get("x-forwarded-proto") ?? "https";
  const host  = h.get("x-forwarded-host") ?? h.get("host") ?? "localhost:3000";
  return `${proto}://${host}`;
}

async function getHelloSafe() {
  const base = getBaseUrl();                       // ← absolut
  const url  = new URL("/api/hello", base).toString();
  const res  = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`GET ${url} -> ${res.status}`);
  return res.json();
}

export default async function Home() {
  const data = await getHelloSafe();
  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
}
