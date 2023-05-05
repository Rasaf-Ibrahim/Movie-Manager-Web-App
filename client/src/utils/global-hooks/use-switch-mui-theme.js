import { useContext } from 'react'

import { themeSwitchContext } from '@/styles/mui-theme/mui-theme'

export default function useSwitchMuiTheme() {

    const { switchTheme } = useContext(themeSwitchContext)

    return {
        switchTheme
    }
}




