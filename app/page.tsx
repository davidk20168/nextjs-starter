export const dynamic = "force-dynamic";

async function getHello() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/hello`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch /api/hello");
  return res.json();
}

export default async function Home() {
  const data = await getHello();
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Next.js Starter</h1>
      <p className="text-lg">
        This page is a <strong>Server Component</strong> fetching from <code>/api/hello</code>.
      </p>
      <pre className="rounded-lg border p-4 text-sm overflow-x-auto">
        {JSON.stringify(data, null, 2)}
      </pre>

      <div className="rounded-xl border p-4">
        <h2 className="text-xl font-semibold mb-2">What to try next</h2>
        <ol className="list-decimal ml-6 space-y-2">
          <li>Edit <code>app/page.tsx</code></li>
          <li>Open <code>/about</code> to see another route</li>
          <li>Modify the API in <code>app/api/hello/route.ts</code></li>
        </ol>
      </div>
    </section>
  );
}
