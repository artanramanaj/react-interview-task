import { InfoButton } from "./index";
const Home = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4 rounded-md p-4 shadow-[0_0_8px_rgba(0,0,0,0.1)]">
      <InfoButton
        className="w-full"
        label="14 On Road"
        bgClass="bg-primary-yellow"
        padding="py-6 px-6"
        textClass="text-primary-white"
      />
      <InfoButton
        className="w-full"
        label="3 Completed"
        bgClass="bg-primary-green"
        padding="py-6 px-6"
        textClass="text-primary-white"
      />
      <InfoButton
        className="w-full"
        label="2 On Hold"
        bgClass="bg-primary-red"
        padding="py-6 px-6"
        textClass="text-primary-white"
      />
    </div>
  );
};

export default Home;
