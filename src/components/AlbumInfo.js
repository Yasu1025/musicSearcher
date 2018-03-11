import React from 'react'
import { Link } from 'react-router'


class AlbumInfo extends React.Component {

    // componentWillMount(){
    //     this.props.loadTracks(this.props.album[0].id)
    //     console.log(this.props)
    // }
    
    render(){
        const album = this.props.album[0]
        
        return(
            <div>
                <Link to="/home">X</Link>
                <p>{album.name}</p>
                <p>Tracks</p>
                <ul>
                    {album.tracks.map((track, i) => (
                        <li key={i}>{track.name}</li>
                    ))}
                </ul>
                <a href={album.external_link} target="_blank">Go To Spotify</a>
            </div>
        )
    }
}

export default AlbumInfo