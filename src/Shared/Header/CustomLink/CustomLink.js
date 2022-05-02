import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.css'

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <>
    <Link className='btn-menu'
      style={{ textDecoration: match ? "" : "none", backgroundColor: match ? 'rgb(230, 37, 140)':'', padding: match ? '10px': '', borderRadius: match ? '5px': '', color: match ? 'white': ''}}
      to={to}
      {...props}
    >
      {children}
    </Link>
    
  </>
  );
};

export default CustomLink;