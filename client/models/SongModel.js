// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

});

SongModel.prototype.play = function() {
  // Triggering an event here will also trigger the event on the collection
  this.trigger('play', this);
};

SongModel.prototype.ended = function() {
  this.trigger('ended', this);
};

SongModel.prototype.dequeue = function() {
  this.trigger('dequeue', this);
};

SongModel.prototype.enqueue = function() {
  this.trigger('enqueue', this);
};