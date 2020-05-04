import React from 'react'

import './styles.css'
import Board from '../../components/Board'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default props => {
    return (
        <div className="body">
            <Header />
            <Board />
            <Footer />
        </div>
    )
}