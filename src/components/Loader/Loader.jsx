import { ThreeDots } from "react-loader-spinner"

const Loader = () => {
    return (
        <ThreeDots
  visible={true}
  height="80"
  width="80"
  color="#4f0cec"
  radius="9"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />
    )
}
export default Loader;