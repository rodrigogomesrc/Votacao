import { React, useContext } from 'react';
import { VotingContext } from '../../Contexts/votingContext';

const Results = () => {

    const {formOptions} = useContext(VotingContext);

    const renderVotingResults = (options) => {
        let totalCount = 0;
        options.map(option => totalCount += option.count);
        return(
            options.map((option, index) => <p key={option.text}>{renderOptionResultText(totalCount, option, index)}</p>)
        )
    }
    
    const renderOptionResultText = (totalCount, option, index) => {
        return `${index + 1}. ${option.text} - ${option.count} votes (${calculatePercentage(option.count, totalCount)}%)`;
    }
    
    const calculatePercentage = (optionCount, totalCount) => {
        return Math.round((optionCount / totalCount) * 100);
    }
    
    return (
        <div>
            {
                renderVotingResults(formOptions)
            }
        </div>
    )
}

export default Results
