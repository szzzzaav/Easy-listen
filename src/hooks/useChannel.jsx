import { useEffect, useState } from "react";

function useChannel() {
  const [channel, setChannel] = useState();
  const [data, setData] = useState([]);
  const createId = function () {
    let id = +localStorage.getItem("music");
    if (!id) {
      id = 0;
    }
    id++;
    localStorage.setItem("music", id);
    return id;
  };
  const sendMsg = function (msg, channel) {
    channel.postMessage({ id: channel.id, ...msg });
    console.log("sendMessage");
  };

  useEffect(function () {
    const createChannel = function () {
      const channel = new BroadcastChannel("music");
      if (!channel.id) channel.id = createId();
      if (!channel.listeners) channel.listeners = new Set();
      sendMsg({ type: "create" }, channel);
      window.addEventListener("unload", function () {
        sendMsg({ type: "delete" }, channel);
      });
      channel.addEventListener("message", function (e) {
        const { type, id, data: reciveData } = e.data;
        console.log({ type, id });
        if (type === "create") {
          sendMsg({ type: "confirm" }, channel);
          channel.listeners.add(id);
          console.log(channel.id, channel.listeners);
        } else if (type === "confirm") {
          channel.listeners.add(id);
        } else if (type === "delete") {
          channel.listeners.delete(id);
        }
        if (reciveData) {
          console.log(reciveData);
          setData?.((d) => [...d, reciveData]);
        }
      });
      return channel;
    };
    setChannel(createChannel());
  }, []);

  return { channel, sendMsg, data, setData };
}

export default useChannel;
