"use client";
import { useEffect, useState } from "react";
import { Img } from "../Img";

const fetchDog = async () => {
  const resp = await fetch("https://dog.ceo/api/breeds/image/random");

  return resp.json();
};

export default function App() {
  const [boi, setBoi] = useState("");

  useEffect(() => {
    const dog = async () => {
      const { message: d } = await fetchDog();
      setBoi(d);
    };

    dog();
  }, []);

  return <Img src={boi} />;
}
