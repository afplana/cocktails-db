import React, { FC } from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home: FC = () => {
    return (
        <main>
            <SearchForm />
            <CocktailList />
        </main>
    )
}

export default Home