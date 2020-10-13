import React from 'react'
import requests from './request'
import "./Nav.css"

function Nav({ setSelectedOption }) {
    return (
        <div className="nav">
            <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchActionMovie)}>Actions</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchComedyMovie)}>Comedy</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovie)}>Romance</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchHorroMovie)}>Horror</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-fi</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>Animation</h2>
            <h2 onClick={() => setSelectedOption(requests.fetchTv)}>TV</h2>
        </div>
    )
}

export default Nav
