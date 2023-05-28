export default function Home() {
  return (
    <main className="flex justify-center content-center  items-center" style={{height : "85vh"}} >
       <div className="px-4 py-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-600 xl:text-4xl">
          Try something really different right now by adding it in todo list .
        </h2>
        <p className="mt-4 block max-w-4xl text-gray-500">
          Create a todo list and view it.
          Complete the todos and feel the satisfaction.
          Make your life complete.
        </p>
        <div className="mt-6">
          <a
            href="/new"
            className="inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-gray-900 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 sm:mx-2 sm:w-auto"
          >
            <span className="mx-2">Create</span>
          </a>
          <a
            href="/view"
            className="mt-4 inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-4 py-2.5 text-sm text-white shadow transition-colors duration-300 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80 sm:mx-2 sm:mt-0 sm:w-auto"
          >
            <span className="mx-2">View</span>
          </a>
        </div>
      </div>
    </main>
  );
}
