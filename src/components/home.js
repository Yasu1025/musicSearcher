import React from 'react'
import Album from './Album'
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

const styles = {
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    },
    gridList: {
      width: 90+"%",
      height: "auto",
    },
  };

const Home = ({albums=[], loadTracks=f=>f}) => (
    <div style={styles.root}>
        <Subheader>New Release</Subheader>
        <GridList cellHeight={250}
                  style={styles.gridList}
                  cols={4}>
        {albums.map((album, i)=>(
                 <Album key={i}
                    album={album} 
                    loadTracks={loadTracks}/> 
        ))}
        </GridList>
    </div>
)

export default Home