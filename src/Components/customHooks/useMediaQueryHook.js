import { useMediaQuery } from '@mui/material'

const useMediaQueryHook = (breakpoint) => {
    return useMediaQuery((theme) => theme.breakpoints.up(breakpoint))
}

export default useMediaQueryHook