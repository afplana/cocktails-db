import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Error: FC = () => {
    return (
        <section className="section error-page">
            <div className="error-container">
                <h1>oops! page not found</h1>
                <Link to="/" className="btn btn-primary">back home</Link>
            </div>
            <h2>error page</h2>
        </section>
    )
}

export default Error