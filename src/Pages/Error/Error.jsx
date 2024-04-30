import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="flex items-center min-h-screen justify-center ">
      <div className="px-4 lg:py-12">
        <div className="lg:gap-4 lg:flex">
          <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>
            <p className="mb-2 text-2xl font-bold text-white text-center md:text-3xl">
              <span className="text-red-500">Oops!</span> Page{" "}
              {error.statusText}
            </p>
            <p className="mb-8 text-center text-white md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
            <Link
              to="/"
              className="px-5 py-2 rounded-md text-blue-100 bg-blue-600 hover:bg-blue-700"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Error;
