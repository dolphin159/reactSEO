import React from 'react';
import { Helmet } from 'react-helmet-async';

const HelmetTag = (props) => {
  return (
    <Helmet>
      <title>{props.title}</title>

      <meta name="keywords" content={props.keywords} />
      <meta property="og:title" content={props.title} />
      <meta property="og:description" content={props.description} />
      <meta property="og:url" content={props.url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={props.title} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image" content={props.image} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default HelmetTag;
