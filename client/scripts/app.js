// YOUR CODE HERE:

$(document).ready(function() {
  class Chatterbox {
    constructor () {
      this.server = 'http://parse.sfm6.hackreactor.com/chatterbox/classes/messages/';
      //document.addEventListener('click', function() { console.log('HELLO'); });
      this.rooms = [];
      this.currentRoom = 'All';
      this.username = 'Nikerys';
      // this.text = 'asdas';
    }

    init() {
      console.log('THIS: ', this);
      window.app.fetch();
      //$('.username').on('click', this.handleUsernameClick());
      $('.Submit').on('click', window.app.handleSubmit.bind(this));
      $('#roomSelect').on('change', window.app.handleRoomSelectionChange);
    }

    handleSubmit() {
      console.log('new msg', $('#userInput').val());
      window.app.send(window.app.createMessage($('#userInput').val()));
      $('#userInput').val(' ');
    }

    createMessage(msg) {
      return {
        username: this.username,
        text: msg,
        roomname: this.currentRoom
      };
    }

    handleRoomSelectionChange() {
      let roomname = $('#roomsDropDownList').val();
      
    }

    populateTheRoomDropDownMenu() {
      var $roomList = $('#roomSelect');
      
    }

    renderRoom(roomname) {
      let $roomSelectDropDown = $('#roomSelect');
      $roomSelectDropDown.append('<option>' + roomname + '</option>');
    }

    send(message) {
      $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: this.server,
        type: 'POST',
        data: JSON.stringify(message),
        contentType: 'application/json',
        success: function (data) {
          console.log('chatterbox: Message sent', data);
          window.app.fetch();
        },
        error: function (data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
          console.error('chatterbox: Failed to send message', data);
        }
      });
    
    }
    test(testMsg) {
      console.log('inside test: ', testMsg );
    }
    fetch() {
      $.ajax({
        // This is the url you should use to communicate with the parse API server.
        url: this.server,
        type: 'GET',
        data: {
          'order': '-createdAt'
        },
        contentType: 'application/json',
        success: function (data) {
          window.app.renderAllMessages(data.results);
          console.log('chatterbox: Fetching all messafges', data);
        },
        error: function (data) {
          // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
          console.error('chatterbox: Failed to fetch all messages', data);
        }
      });
    }

    clearMessages() {
      $('#chats').empty();
    }

    renderMessage(message) {
      console.log('rendering Message');
      let $messageDiv = $('<div class="chat"></div>');

      let $newMsg = $('<span class="message"></span');
      $newMsg.text(message.text);

      let $nameSpan = $('<span class="username"></span>');
      $nameSpan.text(message.username);

       
      $($messageDiv).append($nameSpan);
      $($messageDiv).append($('<br>'));
      $($messageDiv).append($newMsg);
      $('#chats').append($messageDiv);
    }

    renderAllMessages(messages) {
      console.log('rendering all Messages', messages);
      $('#chats').empty();
      messages.forEach( message => {
        window.app.renderMessage(message);
      });
    }

    handleUsernameClick() {
      console.log ( ' YAAaaay');
    }

    
    
  
}
  window.app = new Chatterbox();
  window.app.init();
  // var message = {
  //   username: 'Marcus Philips',
  //   text: 'trololo',
  //   roomname: 'main'
  // };
  // window.app.send(message);
  
  // window.app.renderMessage(message);




}); //End of document.ready




