import React from 'react';

const Results = ({options}) => {

    const renderVotingResults = (options) => {
        let totalCount = 0;
        options.map(option => totalCount += option.count);
        return(
            options.map((option, index) => <p key={option.text}>{renderOptionResultText(totalCount, option, index)}</p>)
        )
    }
    
    const renderOptionResultText = (totalCount, option, index) => {
        return `${index + 1} - ${option.text} - ${option.count} votes (${calculatePercentage(option.count, totalCount)}%)`;
    }
    
    const calculatePercentage = (optionCount, totalCount) => {
        return Math.round((optionCount / totalCount) * 100);
    }
    
    return (
        <div>
            <p>Results</p>
            {
                renderVotingResults(options)
            }
        </div>
    )
}

export default Results
