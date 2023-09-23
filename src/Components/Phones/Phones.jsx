import PhoneCard from "./PhoneCard";

const Phones = ({ phonesData }) => {
  console.log(phonesData);
  return (
    <div className="py-10">
      <h1 className="text-2xl text-center font-semibold">
        All Categories Phones
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {phonesData?.map((phone) => (
          <PhoneCard key={phone.id} phone={phone}></PhoneCard>
        ))}
      </div>
    </div>
  );
};

export default Phones;
