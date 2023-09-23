import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Phones from "../../Components/Phones/Phones";

const Home = () => {
  const phonesData = useLoaderData();
  //   console.log(phonesData);
  return (
    <div>
      <Banner></Banner>
      <Phones phonesData={phonesData}></Phones>
    </div>
  );
};

export default Home;
