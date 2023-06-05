import { StyledEngineProvider } from '@mui/material/styles'
import Header from '../Header/Header'

type Props = {}
const App = (props: Props) => {
  return (
    <StyledEngineProvider injectFirst>
      <Header />
    </StyledEngineProvider>
  )
}
export default App
