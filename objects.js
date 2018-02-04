var playlist = new Object({artistName: ""});

function updatePlaylist(playlist, atistName, songTitle){
  return Object.assign(playlist, {[artistName]: songTitle})
}