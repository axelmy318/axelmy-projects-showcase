export const setCurrentProject = href => {
    return {
        type: "SET_CURRENT_PROJECT",
        payload: {
            data: {
                href
            }
        }
    }
}