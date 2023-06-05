import ShowMoreButton from '../../Buttons/ShowMoreButton'
import SectionTitle from '../../Typography/SectionTitle/SectionTitle'
import UserCards from '../../UserCards/UserCards'

type Props = {}
const UsersSection = (props: Props) => {
  return (
    <section className="section-gap">
      <SectionTitle>Working with GET request</SectionTitle>
      <UserCards />
      <ShowMoreButton />
    </section>
  )
}
export default UsersSection
