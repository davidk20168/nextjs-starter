import { getHelloData } from "@/lib/hello";

export const dynamic = "force-dynamic";

export default function Home() {
  const data = getHelloData(); // langsung, aman dari 401/URL error
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Next.js Starter (Safe)</h1>
      <pre className="rounded-lg border p-4 text-sm overflow-x-auto">
        {JSON.stringify(data, null, 2)}
      </pre>
    </section>
  );
}
