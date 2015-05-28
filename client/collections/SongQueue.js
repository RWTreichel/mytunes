// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      console.log("SongQueue's 'ended' event has fired.");
      var song = this.at(0);
      console.log(song);
      this.remove(song);
    }, this);
  },

});

SongQueue.prototype.playFirst = function() {
  console.log("SongQueue.playFirst() has been called.");
};