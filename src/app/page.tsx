export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Rick & Morty Challenge
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to the Rick & Morty character explorer. Your task is to
            build a character listing and detail view using the provided GraphQL
            setup.
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <div className="space-y-4 text-gray-700">
            <p>This project is already configured with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Next.js 15 with App Router</li>
              <li>TypeScript configuration</li>
              <li>TailwindCSS for styling</li>
              <li>TanStack Query for data fetching</li>
              <li>GraphQL client setup for Rick & Morty API</li>
              <li>Atomic design folder structure</li>
            </ul>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Your Tasks:</h3>
              <ol className="list-decimal list-inside space-y-1 text-blue-800">
                <li>Create character listing components</li>
                <li>Implement search and filtering</li>
                <li>Build character detail pages</li>
                <li>Add proper loading and error states</li>
                <li>Ensure responsive design</li>
              </ol>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">
                Available Resources:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-green-800">
                <li>
                  GraphQL client in{" "}
                  <code className="bg-green-100 px-1 rounded">
                    src/lib/graphql/
                  </code>
                </li>
                <li>
                  Sample queries in{" "}
                  <code className="bg-green-100 px-1 rounded">
                    src/lib/graphql/queries.ts
                  </code>
                </li>
                <li>
                  Component structure in{" "}
                  <code className="bg-green-100 px-1 rounded">
                    src/components/
                  </code>
                </li>
                <li>
                  TanStack Query setup in{" "}
                  <code className="bg-green-100 px-1 rounded">
                    src/lib/providers.tsx
                  </code>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
