export async function GET() {
  const payload = {
    message: "Hello from Next.js API Route 👋",
    timestamp: new Date().toISOString(),
    env: process.env.NEXT_PUBLIC_SITE_NAME || "Next.js Starter",
  };
  return Response.json(payload, { status: 200 });
}
