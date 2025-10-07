export async function GET() {
  return Response.json({
    message: "Hello from Next.js API Route 👋",
    timestamp: new Date().toISOString(),
  });
}
