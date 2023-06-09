import { StyledEngineProvider } from '@mui/material/styles'
import Header from '../Header/Header'
import Main from '../Main/Main'

type Props = {}
const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
      <Main />
    </StyledEngineProvider>
  )
}
export default App
