import { createContext } from "react"

const test = (e) => {
    alert(e.target)
}

export const testContextModule = createContext(test)