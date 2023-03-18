import { ReactElement, ReactNode } from "react"
import { AppBar, createTheme, CssBaseline, ThemeProvider, Toolbar, Typography } from "@mui/material"
import PetsIcon from '@mui/icons-material/Pets';
import { AppProps } from "next/app";
import { NextPage } from "next";
import { Copyright } from "@mui/icons-material";
import { Box } from "@mui/system";
import Head from "next/head";
import Script from "next/script";

const theme = createTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24
        }
      }
    }
  }
})

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type Props = AppProps & {
  Component: NextPageWithLayout
}

const Layout = ({ Component, pageProps }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YDE08G1MPC"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YDE08G1MPC');
        `}
      </Script>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PetsIcon sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Bichento
          </Typography>
        </Toolbar>
      </AppBar>
      <Component {...pageProps} />
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
    </ThemeProvider>
  )
}

export default Layout
