import BaseLayout from "../components/BaseLayout";
import "../styles/globals.css"
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components"
import { useRouter } from "next/router"

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const isLoginPage = router.pathname === "/login";
  const isSignUpPage = router.pathname === "/signup";
  const isHome = router.pathname === "/";

  if (isLoginPage || isSignUpPage || isHome) {
    return (
    <FluentProvider theme={teamsLightTheme}>
      <Component {...pageProps}/>
    </FluentProvider>
    )
  }

  return (
    <FluentProvider theme={teamsLightTheme}>
        <BaseLayout><Component {...pageProps} /></BaseLayout>
    </FluentProvider>
  )
}
