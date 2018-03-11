import React from 'react'
import Menu from './menu'
import Home from './home'
import Search from './Search'
import AlbumInfo from './AlbumInfo'
import About from './about'
import Footer from './Footer'

import myOptions from './FetchCore'

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading:false,
            latestAlbums: [],
            serchAlbums: []
        }

        this.GetAlbumTracks = this.GetAlbumTracks.bind(this)
    }
    
    componentWillMount(){
        this.FetchLatestAlbums()

    }
    GetAlbumTracks(albumId){

        const FETCH_URL = "https://api.spotify.com/v1/albums/" + albumId + '/tracks'
        
        this.setState({
            isLoading:true
        })


        fetch(FETCH_URL, myOptions)
            .then(response => response.json())
            .then(json => json.items.map(track =>(
                {
                    id: `${track.id}`,
                    name: `${track.name}`,
                    external_link: `${track.external_urls.spotify}`
                }
            )))
            .then(tracks => this.state.latestAlbums.map(album =>
                (album.id !== albumId) ?
                album:
                {
                    ...album,
                    tracks
                }

            ))
            .then(albums => this.setState({latestAlbums: albums, isLoading:false}))
            .catch(error => console.log("ERROR(Fetching Tracks): ", error))
            
    }

    FetchLatestAlbums(){
        
        const BASE_URL = "https://api.spotify.com/v1/search?"
        const FETCH_URL = "https://api.spotify.com/v1/browse/new-releases"

       fetch(FETCH_URL, myOptions)
        .then(response => response.json())
        .then(json => json.albums.items.map(album => (
            {
                id: `${album.id}`,
                name: `${album.name}`,
                artist: `${album.artists[0].name}`,
                image_url: `${album.images[0].url}`,
                external_link: `${album.external_urls.spotify}`
            }
        )))
        .then(albums => this.setState({latestAlbums:albums}))
        .catch(error => console.log("ERROR: ", error))  
        
    }


    render(){

        let latestAlbums = this.state.latestAlbums

        return(
            
            <div className="classname">
                <Menu />
                {
                    (this.props.location.pathname === "/search") ?
                        <Search albums={latestAlbums} />:
                    (this.props.location.pathname === "/about")?
                        <About />:
                    (this.props.location.pathname === "/album/"+this.props.params.id)?
                        <AlbumInfo album={latestAlbums.filter(
                                            album => album.id === this.props.params.id
                                          )}
                                   loadTracks={this.GetAlbumTracks}
                                   loading={this.state.isLoading}/> :
                        <Home albums = {latestAlbums} loadTracks={this.GetAlbumTracks}/>
                }
                <Footer />
            </div>
        )
    }
}

export default App


