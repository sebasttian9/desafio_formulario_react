
const SocialButton = ({face,github,link}) => {
  return (
    <div className="my-3 redesSociales">
      <div>{face}</div>
      <div>{github}</div>
      <div>{link}</div>
    </div>
  )
}

export default SocialButton