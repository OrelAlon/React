import React from 'react';

const MusicAlbum = (props) => {
  return (
    <div className='albumBox'>
      <div className='infoBox'>
        <h2>{props.albumTitle}</h2>
        <h3>{props.artistName}</h3>
        <h4>Number of Songs: {props.songNum}</h4>
        <h4>Length: {props.length}</h4>
        <span>
          <a href={props.link}>The Best Song</a>
        </span>
      </div>
    </div>
  );
};

MusicAlbum.defaultProps = {
  albumTitle: 'Paris',
  artistName: 'PInto Picasso',
  songNum: '2',
  length: '56m',
  link: 'https://www.youtube.com/watch?v=g81JtMbrJtw&ab_channel=ThisisPintoTV',
};

export default MusicAlbum;
