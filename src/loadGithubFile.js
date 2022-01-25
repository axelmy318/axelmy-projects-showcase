import axios from 'axios'

export const LoadGithubFile = async(username, repository, branch, file) => {
    const url = `https://raw.githubusercontent.com/${username}/${repository}/${branch}/${file}`
    
    return await axios.get(url)
        .then((response) =>  {
            return {success: true, data: response.data}
        })
        .catch(error => {
            return {success: false, data: null}
        })
}