import { useSelector } from 'react-redux'

const useAuthor = () => useSelector(state => state.Projects.author)

export default useAuthor