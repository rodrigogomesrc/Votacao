import React from 'react'

const VotingBooth = ({options, vote}) => {
    return (
        <div>
            {
                options.map((option) => (
                    <button key={option.text} onClick={() => vote(option.text, options)}>{option.text}</button>)
                )
            }
        </div>
    )
}

export default VotingBooth
