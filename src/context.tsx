import axios from 'axios'
import { useState, useContext, useEffect, createContext, FC, Dispatch } from 'react'
import { useCallback } from 'react'
import { Cocktail } from './types'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

type GlobalContextState = {
    loading: boolean,
    searchTerm: string,
    cocktails: Cocktail[],
    setSearchTerm: Dispatch<string>,
}

const AppContext = createContext<GlobalContextState>({
    loading: true,
    searchTerm: '',
    cocktails: [],
    setSearchTerm: () => { }
})

const AppProvider: FC = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const [cocktails, setCocktails] = useState<Cocktail[]>([])

    const fetchDrinks = useCallback(async () => {
        setLoading(true)
        try {
            const response = await axios.get<{ drinks: Cocktail[] }>(`${url}${searchTerm}`)
            if (response.data && response.data.drinks) {
                setCocktails(response.data.drinks)
            } else {
                setCocktails([])
            }
            setLoading(false)
        } catch (error) {
            console.error(error)
        }
    }, [searchTerm])

    useEffect(() => {
        fetchDrinks()
    }, [searchTerm, fetchDrinks])

    return <AppContext.Provider
        value={{
            loading,
            searchTerm,
            cocktails,
            setSearchTerm,
        }}
    >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }