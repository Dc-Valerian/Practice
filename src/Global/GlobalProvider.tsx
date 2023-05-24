import { PropsWithChildren, createContext, useState } from 'react'
import { iGlobal } from '../utils/interfaces'

export const GlobalContext = createContext({} as iGlobal)

export const GlobalProvider: React.FC<PropsWithChildren> = ({
    children }) => {

    const [actualName, setActualName] = useState<string>("")
    const [actualEmail, setActualEmail] = useState<string>("")
    const [actualPassword, setActualPassword] = useState<string>("")
    const [actualConfirm, setActualConfirm] = useState<string>("")

    return (
        <GlobalContext.Provider value={{
            actualName,
            setActualName,

            setActualEmail,
            actualEmail,

            setActualPassword,
            actualPassword,

            setActualConfirm,
            actualConfirm,

        }} >{children}</GlobalContext.Provider>
    )
}

