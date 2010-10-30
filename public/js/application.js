var Application = {
  models : {},
  collections : {},
  util : {}
};

Application.models.Project = Backbone.Model.extend({

});
Application.collections.Projects = Backbone.Collection.extend({
  model : Application.models.Project
});
Application.socket = {
  provider : new io.Socket(),
  onConnect : function(){
    console.log('Connected to Socket');
  },
  onMessage : function(message){
    console.log('Received Message', message );
  },
  onDisconnect : function(){
    console.log('Socket Disconnected');
  },
  connect : function(){
    console.log('Attempting to connect to socket...');
    var s = Application.socket.provider;

    s.on("connect", Application.socket.onConnect );
    s.on("message", Application.socket.onMessage );
    s.on("disconnect", Application.socket.onDisconnect );

    s.connect();
  }
};

Application.run = function(){
  console.log('Running Application...');
  Application.socket.connect();
};

$(function(){
  Application.run();
});
