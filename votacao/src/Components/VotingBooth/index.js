import { React, useContext } from 'react';
import { VotingContext } from '../../Contexts/votingContext';

const VotingBooth = () => {

    const {formOptions, setFormOptions, setVotingStatus} = useContext(VotingContext);

    const onVote = (votedOption) => {
        let localOptions = [...formOptions];
        localOptions.forEach(option => {
            if(option.text === votedOption){
                option.count++;
            }
        });
        setFormOptions(localOptions);
        setVotingStatus("closed");
    }

    return (
        <div>
            {
                formOptions.map((option) => (
                    <button key={option.text} onClick={() => onVote(option.text)}>{option.text}</button>)
                )
            }
        </div>
    )
}

export default VotingBooth
