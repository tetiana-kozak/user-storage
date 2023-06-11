import succsessMessage from '.././../assets/success-image.svg'
import SectionTitle from '../Typography/SectionTitle/SectionTitle'

type Props = {}

const SuccessMessage = (props: Props) => {
  return (
    <section className="section-gap">
      <SectionTitle>User successfully registered</SectionTitle>
      <div className="successImage">
        <img src={succsessMessage} alt="" />
      </div>
    </section>
  )
}
export default SuccessMessage
