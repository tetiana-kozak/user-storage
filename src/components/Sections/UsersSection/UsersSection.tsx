import { UsersType } from '../../../container/Main/Main'
import ShowMoreButton from '../../Buttons/ShowMoreButton'
import SectionTitle from '../../Typography/SectionTitle/SectionTitle'
import UserCards from '../../UserCards/UserCards'

type Props = {
  users: UsersType[]
  isShowButton: boolean
  getUsers: () => void
}

const UsersSection = ({ users, isShowButton, getUsers }: Props) => {
  return (
    <section className="section-gap">
      <SectionTitle>Working with GET request</SectionTitle>
      <UserCards users={users} />
      {isShowButton && <ShowMoreButton getUsers={getUsers} />}
    </section>
  )
}
export default UsersSection
