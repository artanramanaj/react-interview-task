import { redirect, useLoaderData, useNavigation } from "react-router-dom";
import {
  SideBar,
  Empty,
  InventoryTable,
  MobileSidebarModal,
} from "../components";
import customFetch from "../utils/customFetch";
import { InventoryContext } from "../utils/context/InventoryContext";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
export const loader = async () => {
  try {
    const response = await customFetch.get("/inventory");
    return response;
  } catch (error) {
    return error;
  }
};

export const action = async ({ request }) => {
  try {
    const formData = await request.formData();
    const body = Object.fromEntries(formData);
    const { id, ...dataToUpdate } = body;
    await customFetch.put(`/inventory/${id}`, dataToUpdate);
    toast.success("Inventory item updated successfully");

    return redirect(".");
  } catch (error) {
    toast.error(error?.response?.data || "Failed to update inventory item");
    return error;
  }
};

const DashboardPage = () => {
  const { data } = useLoaderData();
  const navigation = useNavigation();
  const [modalFlag, setShowModalFlag] = useState(true);
  const [showSideBarModal, setShowSideBarModal] = useState(false);
  useEffect(() => {
    if (navigation.state === "idle") {
      setShowModalFlag(false);
    }
  }, [navigation.state]);

  return (
    <InventoryContext.Provider value={{ data }}>
      <FaBars
        className="lg:hidden w-12 h-12"
        onClick={() => setShowSideBarModal(true)}
      />

      {showSideBarModal ? (
        <MobileSidebarModal onClose={() => setShowSideBarModal(false)} />
      ) : (
        <SideBar />
      )}

      {data ? (
        <InventoryTable setModalFlag={setShowModalFlag} modalFlag={modalFlag} />
      ) : (
        <Empty />
      )}
    </InventoryContext.Provider>
  );
};

export default DashboardPage;
