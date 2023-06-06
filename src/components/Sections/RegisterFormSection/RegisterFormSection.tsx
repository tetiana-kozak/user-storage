import SignUpButton from '../../Buttons/SignUpButton'
import RegisterForm from '../../RegisterForm/RegisterForm'
import SectionTitle from '../../Typography/SectionTitle/SectionTitle'

type Props = {}
const RegisterFormSection = (props: Props) => {
  return (
    <section className="section-gap">
      <SectionTitle>Working with POST request</SectionTitle>
      <RegisterForm />
      {/* <SignUpButton /> */}
    </section>
  )
}
export default RegisterFormSection
