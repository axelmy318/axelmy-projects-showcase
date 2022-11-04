import { useSelector } from 'react-redux'

const useProjects = () => useSelector(state => state.Projects)

export default useProjects