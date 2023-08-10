import { Img } from "../Img";

const fetchDog = async () => {
  const resp = await fetch("https://dog.ceo/api/breeds/image/random", {
    cache: "no-cache",
  });

  return resp.json();
};

export default async function App() {
  const { message: boi } = await fetchDog();

  return <Img src={boi} />;
}
