import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, array) => {
      const decodedCrumb = decodeURIComponent(crumb);
      const linkPath = `/${array.slice(0, index + 1).join('/')}`;

      return (
        <div key={crumb} className="inline">
          <Link
            to={linkPath}
            className="text-blue-500 transition duration-300 hover:text-blue-700"
          >
            {decodedCrumb}
          </Link>
          {index !== array.length - 1 && (
            <span className="mx-2 text-gray-500">/</span>
          )}
        </div>
      );
    });

  return (
    <div className="ml-4 mt-2 flex items-center text-sm text-gray-500">
      <Link
        to="/"
        className="text-blue-500 transition duration-300 hover:text-blue-700"
      >
        Home
      </Link>
      <span className="mx-2 text-gray-500">/</span>
      {crumbs}
    </div>
  );
}

export default Breadcrumbs;
