export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#1A2B4C]"></div>
        <p className="text-[#1A2B4C] mt-4 text-center font-medium">Loading...</p>
      </div>
    </div>
  );
}
