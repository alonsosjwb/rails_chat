class RoomChannel < ApplicationCable::Channel
  def subscribed
    puts "TENEMOS NUEVO SUSCRIPTOR"
    stream_from "room_channel"
    ActionCable.server.broadcast("room_channel", { message: "Hola"})
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  def recieve(data)
    puts data.to_yaml
    #ActionCable.server.broadcast("room_channel", data.to_yaml)
  end
end
