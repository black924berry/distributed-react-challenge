import React from "react";
import { Link, useLocation } from 'react-router-dom';

import './styles.sass';

const LinkItem = ({ title, path }) => {
  const location = useLocation();

  return (
    <Link
      className={`app-link__item ${location.pathname === path && 'active'}`}
      to={path}
    >
      {title}
    </Link>
  );
};

export default LinkItem;
