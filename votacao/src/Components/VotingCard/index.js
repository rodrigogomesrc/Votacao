import React from 'react';
import VotingBooth from '../VotingBooth';
import Results from '../Results';

const VotingCard = ({state, title, options}) => {

    const onVote = (votedOption, options) => {
        options.forEach(option => {
            if(option.text === votedOption){
                option.count++;
            }
        });
        closeVoting()
    }

    const closeVoting = () => {
        state = "closed";
    }

    return (
        <div>
            <p>{title}</p>
            {
            state === "open" ? <VotingBooth options={options} vote={onVote}/> : <Results options={options}/>
            }
           
        </div>
    )
}

export default VotingCard
