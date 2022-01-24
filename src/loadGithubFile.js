import axios from 'axios'

export const LoadGithubFile = async(username, repository, file) => {
    const url = `https://cdn.jsdelivr.net/gh/${username}/${repository}/${file}`
    
    return await axios.get(url)
        .then((response) =>  {
            return {success: true, data: response.data}
        })
        .catch(error => {
            return {success: false, data: null}
        })
}