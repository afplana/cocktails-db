import React, { FC, useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm: FC = () => {
    const { setSearchTerm } = useGlobalContext()
    const searchValue = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (searchValue.current) {
            searchValue.current.focus()
        }
    }, [])

    const searchCocktail = () => {
        const current = searchValue.current
        if (current) {
            setSearchTerm(current.value)
        }
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    return (
        <section className="section search">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">search your cocktail</label>
                    <input type="text" id="name" ref={searchValue} onChange={searchCocktail} />
                </div>
            </form>
        </section>
    )
}

export default SearchForm