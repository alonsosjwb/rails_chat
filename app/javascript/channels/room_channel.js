import consumer from "./consumer"

const roomClient = consumer.subscriptions.create("RoomChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
    console.log("Cosa rara", data)
  }
});

document.addEventListener("turbolinks:load", function(){
  console.log("Cargó la página")

  document.querySelector('#pinger').addEventListener("click", function(){
    //Enviar un mensaje al server de websockets
    console.log("Enviando mensaje");
    roomClient.send({
      message: prompt("Escribe el mensaje")
    });
  });
})

