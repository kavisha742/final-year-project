import React from 'react'

const Container = () => {
  return (
    <div>
        <div className='container'>
            <div className='text'>
                <h3>WEB3 Experience</h3>
                <h1>Blockchain Vote.io</h1>
                <p>Blockchain Vote.io is a web3 automated Blockchain Election Voting system. Blockchain Vote.io was created to secure your votes and everything using blockchain technology.</p>
                <div className='button'><a href="/">Explore Now &#8599;</a></div>
            </div>
            <div className='image'>
                <img src="crypto1.png" alt="" />
            </div>
        </div>
        <div className='partners'>
            <span><img src="webflow.png" alt="" /></span>
            <span><img src="mparticle.png" alt="" /></span>
            <span><img src="chargebee.png" alt="" /></span>
            <span><img src="corsair.svg" alt="" /></span>
            <span><img src="emachines.png" alt="" /></span>
        </div>
    </div>
  )
}

export default Container