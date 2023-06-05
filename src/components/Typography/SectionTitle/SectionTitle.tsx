import './SectionTitle.scss'

type Props = {
  children: React.ReactNode
}

const SectionTitle = ({ children }: Props) => {
  return <h2 className="section-title">{children}</h2>
}
export default SectionTitle
