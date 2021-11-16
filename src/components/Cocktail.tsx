import React, { FC } from 'react'
import { Link } from 'react-router-dom'

interface Props {
    idDrink: string,
    strAlcoholic: string,
    strDrink: string,
    strDrinkThumb: string,
    strGlass: string,
}

const Cocktail: FC<Props> = ({ idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass }) => {
    return (
        <article className="cocktail">
            <div className="img-container">
                <img src={strDrinkThumb} alt={strDrink} />
            </div>
            <div className="cocktail-footer">
                <h3>{strDrink}</h3>
                <h4>{strGlass}</h4>
                <p>{strAlcoholic}</p>
                <Link to={`/cocktail/${idDrink}`} className="btn btn-primary btn-details">Details</Link>
            </div>
        </article>
    )
}

export default Cocktail