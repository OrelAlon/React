import './App.css';
import React from 'react';
import MusicAlbum from './MusicAlbum';

class App extends React.Component {
  render() {
    return (
      <div className='cont'>
        <MusicAlbum
          albumTitle='הקוד'
          artistName='שם בדוי'
          songNum='5'
          length='20'
          link='https://www.youtube.com/'
        />

        <MusicAlbum
          albumTitle='Inosnte'
          artistName='Prince Royce'
          songNum='10'
          length='51'
          link='https://www.youtube.com/watch?v=AAkETJn2qyA&list=RDAAkETJn2qyA&start_radio=1&ab_channel=PrinceRoyceVEVO'
        />

        <MusicAlbum
          albumTitle='Inmortal'
          artistName='Aventura'
          songNum='12'
          length='51'
          link='https://www.youtube.com/watch?v=XlmaJ-yU46U&ab_channel=RomeoSantosVEVO'
        />

        <MusicAlbum />
      </div>
    );
  }
}

export default App;
