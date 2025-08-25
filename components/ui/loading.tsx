"use client";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 w-full max-w-lg">
        {/* Header with bank logo/icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 mb-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent"></div>
            <div className="relative z-10">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="text-white"
              >
                {/* Bank/Financial icon */}
                <path
                  d="M16 2L2 9v2h28V9L16 2zM6 13v12h4V13H6zm6 0v12h4V13h-4zm6 0v12h4V13h-4zm6 0v12h4V13h-4zM2 27h28v2H2v-2z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">BankDash</h2>
          <p className="text-sm text-gray-500">Preparing your dashboard</p>
        </div>

        {/* Loading spinner */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-12 h-12 border-4 border-gray-200 rounded-full animate-spin border-t-blue-600"></div>
            <div className="absolute inset-0 w-12 h-12 border-4 border-transparent rounded-full animate-pulse border-t-blue-400 opacity-60"></div>
          </div>
        </div>

        {/* Status message */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400 animate-pulse">
            This may take a few moments...
          </p>
        </div>
      </div>
    </div>
  );
}
