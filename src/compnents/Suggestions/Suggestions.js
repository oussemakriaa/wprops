import React from 'react'

const Suggestions = ({ suggestions }) => {
    return (
        <div className="mt-5">
            {suggestions.map(el =>
            (
                <iframe width="300" height="300" src={el.src} title={el.title}frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
            ))}

        </div>
    )
}

export default Suggestions
