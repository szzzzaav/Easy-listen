import { useEffect, useState } from "react";
import useChannel from "../hooks/useChannel";

function AudioPlayer() {
  const { channel, sendMsg, data } = useChannel();
  useEffect(
    function () {
      console.log("data: " + data);
    },
    [data]
  );

  return (
    <>
      {data?.map((d, idx) => {
        return <h1 key={idx}>{d.musicName}</h1>;
      })}
    </>
  );
}

export default AudioPlayer;
