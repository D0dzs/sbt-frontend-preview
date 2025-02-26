// app/not-found.js
export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mt-4">Sorry, the page you are looking for doesn&apos;t exist.</p>
      <a href="/" className="mt-6 text-blue-500 hover:underline">
        Return to Home
      </a>
    </div>
  );
}
