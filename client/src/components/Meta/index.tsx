import { Helmet } from "react-helmet";

import React from "react";

type Props = {
  title: string;
};

const Meta = (props: Props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{props.title}</title>
    </Helmet>
  );
};

export default Meta;
