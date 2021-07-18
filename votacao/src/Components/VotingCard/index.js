import { React, useState } from 'react';
import VotingBooth from '../VotingBooth';
import Results from '../Results';

const VotingCard = ({state, title, options}) => {

    const [localState, setLocalState] = useState(state);

    const onVote = (votedOption, options) => {
        options.forEach(option => {
            if(option.text === votedOption){
                option.count++;
            }
        });
        setLocalState("closed");
    }
    return (
        <div>
            <p>{title}</p>
            {
            localState === "open"? <VotingBooth options={options} vote={onVote}/> : <Results options={options}/>
            }
           
        </div>
    )
}

export default VotingCard
