import React  from 'react'

const Search = ({ artists = [] }) => (
    <div>
        
        {
            artists.map((artist, i) => (
            <div key={i}>
                <p>{artist.name}
                </p>
                
            </div>
            ))
        }
    </div>

)

export default Search