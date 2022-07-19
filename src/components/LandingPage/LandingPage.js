import React, { useState, useEffect } from 'react'
import "./LandingPage.css"
function LandingPage() {

    const [landingData, setLandingData] = useState([])
    const [search, setSearch] = useState('')
    const [output, setOutput] = useState([])

    const apiUrl = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setLandingData(data))

    }, [])
    // useEffect(() => {
    //     setOutput(
    //         landingData.output(value => {
    //             return value.title.toLowerCase().include(search.toLowerCase())
    //         }))
    
    // }, [search,landingData])

    return (
        <>
            <div className='searchBar'>
                <img src="https://i.pinimg.com/564x/72/3d/0a/723d0af616b1fe7d5c7e56a3532be3cd.jpg" alt='img' />
                <input type='text' placeholder='Search for games....'  onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div>
                <div className='cont_cat'>
                    {landingData.map((value, key) => (
                        <div className='cont'>
                            <div className='cont_data'>
                                <p className='p_title'> {value.title}</p>
                                <p className='price'>{value.platform}</p>
                                <p className='rate'> {value.score}&#10032;</p>
                                <p className='descr'> {value.genre}</p>

                            </div></div>

                    ))}

                </div>

            </div></>

    )
}

export default LandingPage