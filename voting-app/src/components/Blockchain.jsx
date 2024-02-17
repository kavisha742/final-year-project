import React from 'react'

const Container = () => {
  return (
    <div>
        <div className='container'>
            <div className='text'>
                <h3>WEB3 Experience</h3>
                <h1>What is the blockchain</h1>
                <p>The blockchain is a decentralized, distributed ledger technology that records transactions across a network of computers. It operates as a chain of blocks, where each block contains a cryptographic hash of the previous block, a timestamp, and transaction data. Once a block is added to the chain, it becomes immutable, meaning it cannot be altered or deleted without altering all subsequent blocks, which makes the blockchain highly secure against tampering.</p>
                <div className='button'><a href="/">Explore Now &#8599;</a></div>
            </div>
            <div className='image'>
                <img src="link.jpg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Container