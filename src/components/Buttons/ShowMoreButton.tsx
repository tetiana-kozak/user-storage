import './Buttons.scss'

type Props = { getUsers: () => void }

const ShowMoreButton = ({ getUsers }: Props) => {
  return (
    <button className="button button-center" onClick={getUsers}>
      Show more
    </button>
  )
}
export default ShowMoreButton
