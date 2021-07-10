import React from 'react';
import VotingBooth from '../VotingBooth';
import Results from '../Results';

function VotingCard({state, title}) {
    return (
        <div>
            <p>{title}</p>
            {
            state === "open" ? <VotingBooth/> : <Results/>
            }
           
        </div>
    )
}

export default VotingCard
