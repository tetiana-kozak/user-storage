import FeaturedSection from '../../components/FeaturedSection/FeaturedSection'
import RegisterFormSection from '../../components/RegisterFormSection/RegisterFormSection'
import UsersSection from '../../components/UsersSection/UsersSection'
import './Main.scss'

type Props = {}
const Main = (props: Props) => {
  return (
    <main className="main">
      <div className="container">
        <div className="layout">
          <FeaturedSection />
          <UsersSection />
          <RegisterFormSection />
        </div>
      </div>
    </main>
  )
}
export default Main
