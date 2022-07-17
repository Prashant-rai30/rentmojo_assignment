import React, { useState, useEffect } from 'react'
import "./LandingPage.css"
function LandingPage() {

    const [landingData, setLandingData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const[filterData,setFilterData]=useState([])

    const handleFilter=(event)=>{
        const searchWord=event.target.value;
        const newFilter=landingData.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord) ;
        })
        setFilterData(newFilter);
    }

    const apiUrl = "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => setLandingData(data))

    }, [])
    // useEffect(()=>{
    //     setOutput([])

    //     landingData.filter(val=>{
    //         if(val.title.toLowerCase().includes(input.toLowerCase())){
    //             setOutput(output=>[...output,val])

    //     }
    //     })
    //   },[input])
    return (
        <>
            <div className='searchBar'>
                <img src="https://i.pinimg.com/564x/72/3d/0a/723d0af616b1fe7d5c7e56a3532be3cd.jpg" alt='img' />
                <input onInput={(event) => { setSearchTerm(event.target.value); }} type='text' placeholder='Search for games....' />
            </div>
            <div>
                <div className='cont_cat'>
                    {landingData.filter((value) => {
                        if (searchTerm == "") {
                            return value;
                        }
                        else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return value;
                        }
                    }).map((value, key) => (
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