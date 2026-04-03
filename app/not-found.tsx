export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center px-4">
      <h2 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h2>
      <p className="text-slate-400 mb-8">Could not find requested resource</p>
      <a 
        href="/"
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors"
      >
        Return Home
      </a>
    </div>
  );
}
