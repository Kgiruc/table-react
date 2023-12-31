import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <img src="/icons/404.png" alt="404" className="h-13 w-13" />
      <p className="mb-4 mt-6 text-center text-base leading-7 text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <Link
        to="/"
        className="rounded-md bg-gray-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm
         hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-white"
      >
        Home
      </Link>
    </main>
  );
}

export default NotFound;
