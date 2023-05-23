import React from 'react'

function Stripes({ mix }) {

    let all = [...mix]
    return (
        <div className='stripe'>
            {
                all.map((stripe) => {
                    return (<div className={`stripe-${stripe}`} key={Math.random()} />)
                })
            }
        </div>
    )
}

export default Stripes