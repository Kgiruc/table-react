import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const location = useLocation();
  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb, index, array) => {
      const linkPath = `/${array.slice(0, index + 1).join('/')}`;

      return (
        <div key={crumb}>
          <Link to={linkPath}>{crumb}</Link>
        </div>
      );
    });

  return <div>{crumbs}</div>;
}

export default Breadcrumbs;
