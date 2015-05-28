// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){

    // When a new song is added to the queue, if it
    // is the only song, play that song.
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    // When a song in the queue ends, remove the song
    // from the queue. If there are any songs left in
    // the queue, play the next one.
    this.on('ended', function() {
      console.log("SongQueue's 'ended' event has fired.");
      var song = this.at(0);
      this.remove(song);

      if (this.length > 0) {
        this.playFirst();
      }
    }, this);
  },

});

SongQueue.prototype.playFirst = function() {
  console.log("SongQueue.playFirst() has been called.");
};