import "../styles/globals.css"
import { FluentProvider, teamsLightTheme } from "@fluentui/react-components"

export default function App({ Component, pageProps }) {
  return (
    <FluentProvider theme={teamsLightTheme}>
      <Component {...pageProps} />
    </FluentProvider>
  )
}
