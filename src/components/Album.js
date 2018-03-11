import React from 'react'
import { Link } from 'react-router'
import {GridTile} from 'material-ui/GridList';



class Album extends React.Component {

    componentDidMount(){
        this.props.loadTracks(this.props.album.id)
    }
    
    render(){
        const album = this.props.album
        let link = "/album/" + album.id
        let id = album.id

        return(
        <Link to= {link}>
            <GridTile className="album_list"
                      title={album.name}
                      subtitle={album.artist}
                      key={album.image_url}>
                <img className="albumImg" src={album.image_url} /> 
            </GridTile>
        </Link>
        )  
    }
}

export default Album