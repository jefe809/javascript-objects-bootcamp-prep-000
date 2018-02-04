var playlist = new Object({artistName: ""});

function updatePlaylist(playlist, artistName, songTitle){
   return Object.assign(playlist, {[artistName]: songTitle})
}

function removeFromPlaylist(playlist, artistName){
  return delete artistName.playlist;
}
