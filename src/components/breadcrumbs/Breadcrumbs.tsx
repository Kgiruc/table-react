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
        <div key={crumb}>
          <Link to={linkPath}>{decodedCrumb}</Link>
        </div>
      );
    });

  return (
    <div>
      <Link to="/">Home</Link>
      {crumbs}
    </div>
  );
}

export default Breadcrumbs;
