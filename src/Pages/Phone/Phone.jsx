import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetails from "./DetailsCard/PhoneDetails";

const Phone = () => {
  const [phone, setPhone] = useState({});
  const { id } = useParams();
  const phones = useLoaderData();

  useEffect(() => {
    const findPhone = phones.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phones]);
  const { image, phone_name, brand_name } = phone;
  return (
    <div>
      <PhoneDetails phone={phone}></PhoneDetails>
    </div>
  );
};

export default Phone;