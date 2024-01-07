// components/ScrollNavLink.js

import React from 'react';
import Link from 'next/link';

const ScrollNavLink = ({ href, name }) => {
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  return isInternalLink ? (
    <a href={href}>{name}</a>
  ) : (
    <Link href={href} passHref>
        {name}
    </Link>
  );
};

export default ScrollNavLink;
