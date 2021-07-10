import React from 'react';

function Results({options}) {
    return (
        <div>
            <p>Results</p>
            {
                renderVotingResults(options)
            }
        </div>
    )
}

const renderVotingResults = (options) => {
    let totalCount = 0;
    options.map(option => totalCount += option.count);
    return(
        options.map(option => <p key={option.text}>{renderOptionResultText(totalCount, option)}</p>)
    )
}

const renderOptionResultText = (totalCount, option) => {
    return `${option.text} - ${option.count} votes (${calculatePercentage(option.count, totalCount)}%)`;
}

const calculatePercentage = (optionCount, totalCount) => {
    return Math.round((optionCount / totalCount) * 100);
}

export default Results
