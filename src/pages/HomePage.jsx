import { useState, useEffect } from "react";
import { redirect, useLoaderData, useNavigation } from "react-router-dom";
import { Home, Table, Modal } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const loader = async () => {
  try {
    const response = await customFetch.get("/jobsites");
    return response;
  } catch (error) {
    return error;
  }
};

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const body = Object.fromEntries(formData);
    await customFetch.post("/jobsites", body);
    toast.success("Jobsite added successfully");
    return redirect("/", { replace: true });
  } catch (error) {
    toast.error(error?.response?.data);
    return error;
  }
};

const HomePage = () => {
  const { data } = useLoaderData();
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    if (navigation.state === "idle") {
      setShowModal(false);
    }
  }, [navigation.state]);
  return (
    <div className="container flex flex-col gap-4 p-1 bg-primary-gray">
      <Home />
      <Table onClose={() => setShowModal((prev) => !prev)} initialData={data} />

      {showModal && <Modal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default HomePage;
