import { React, useContext } from 'react';
import VotingBooth from '../VotingBooth';
import Results from '../Results';
import { VotingContext } from '../../Contexts/votingContext';

const VotingCard = () => {

    const {votingStatus, formTitle} = useContext(VotingContext);

    return (
        <div>
            <p>{formTitle}</p>
            {
                votingStatus === "open"? <VotingBooth /> : <Results />
            }
        </div>
    )
}

export default VotingCard
