var basicContext = require('./js/vendor/basicContext.min.js')

function trackContextMenu(e, index) {
    let items = [
      { title: 'Play next', fn: function(){

        playingTrackList.splice(g.playing.indexPlaying+1, 0, trackList[index]);
        updateTrackListIndexes();

      } },

      { }, // Separator

      { title: 'View artist', fn: function(){

        viewArtist(trackList[index])

      } },

      { title: 'View album', fn: function(){

        viewAlbum(trackList[index])

      } },

    ]

    basicContext.show(items, e)
}

function soundcloudTrackContextMenu(e, index) {
    let items = [
      { title: 'Play next', fn: function(){

        playingTrackList.splice(g.playing.indexPlaying+1, 0, trackList[index]);
        updateTrackListIndexes();

      } },

      { }, // Separator

      { title: 'View user', fn: function(){

        viewArtist(trackList[index])

      } }

    ]

    basicContext.show(items, e)
}