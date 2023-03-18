import { AppProps } from "next/app";
import Head from "next/head";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import { RecoilRoot } from "recoil";

import theme from "@/app/theme";
import Layout from "@/components/Layout";

const App = ({ Component, pageProps }: AppProps): React.ReactElement => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
    <RecoilRoot>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </StyledEngineProvider>
    </RecoilRoot>
  </>
);

export default App;
