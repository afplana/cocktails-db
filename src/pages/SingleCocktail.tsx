import React, { FC, useEffect, useState } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { Cocktail as Drink } from '../types'
import axios from 'axios'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail: FC = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [cocktail, setCocktail] = useState<Drink | null>(null)

    useEffect(() => {
        setLoading(true)
        async function getCocktail() {
            try {
                const response = await axios.get<{ drinks: Drink[] }>(`${url}${id}`)
                const data = response.data.drinks
                if (data) {
                    setCocktail(data[0])

                } else {
                    setCocktail(null)
                }
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }
        getCocktail()
    }, [id])

    if (loading) {
        return <Loading />
    } else if (!cocktail) {
        return <h2 className="section-title">cocktail does not exist</h2>
    }
    const instructions = [
        cocktail?.strIngredient1,
        cocktail?.strIngredient2,
        cocktail?.strIngredient3,
        cocktail?.strIngredient4,
        cocktail?.strIngredient5,
    ]
    return (
        <section className="section cocktail-section">
            <Link to='/' className="btn btn-primary">
                back home
            </Link>
            <h2 className="section-title">{cocktail.strDrink}</h2>
            <div className="drink">
                <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name: </span> {cocktail.strDrink}
                    </p>
                    <p>
                        <span className="drink-data">category: </span> {cocktail.strCategory}
                    </p>
                    <p>
                        <span className="drink-data">info: </span> {cocktail.strAlcoholic}
                    </p>
                    <p>
                        <span className="drink-data">glass: </span> {cocktail.strGlass}
                    </p>
                    <p>
                        <span className="drink-data">instructions: </span> {cocktail.strInstructions}
                    </p>
                    <p>
                        <span className="drink-data">instructions: </span>
                        {instructions
                            .filter((item) => item !== null)
                            .map((item, index) => <span key={index}>{item}</span>)
                        }
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SingleCocktail