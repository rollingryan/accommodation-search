import Head from "next/head";

import * as Styled from "./layoutStyles";

const Layout = ({ children }): React.ReactElement => (
  <>
    <Head>
      <title>Accommodation Search</title>
    </Head>
    {children}
  </>
);

export default Layout;
