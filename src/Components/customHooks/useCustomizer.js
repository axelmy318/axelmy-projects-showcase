import { useSelector } from "react-redux";

const useCustomizer = () => useSelector(state => state.Customizer)

export default useCustomizer