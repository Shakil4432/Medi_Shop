import React, { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import AddMedicine from "../Modal/AddMedicine";
import axios from "axios";
import toast from "react-hot-toast";

export default function ManageSellerMedicine() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState(null);
  const axiosSecure = useAxiosSecure();
  const { data: sellerMedicines = [], refetch } = useQuery({
    queryKey: ["sellerMedicines"],
    queryFn: async () => {
      const result = await axiosSecure.get("/sellerMedicine");
      return result.data;
    },
  });

  const openFormModal = (sellerMedicines = null) => {
    setCategoryToEdit(sellerMedicines);
    setIsFormOpen(true);
  };
  const closeFormModal = () => {
    setIsFormOpen(false);
    setCategoryToEdit(null);
  };

  const handleFormSubmit = async (formData, imageFile) => {
    let imageUrl = formData.categoryImage;

    if (imageFile) {
      const imgBBFormData = new FormData();
      imgBBFormData.append("image", imageFile);

      try {
        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${
            import.meta.env.VITE_IMBB_IMG_API_KEY
          }`,
          imgBBFormData
        );
        imageUrl = response.data.data.url;
      } catch (error) {
        console.error("Error uploading image:", error);
        Swal.fire("Error", "Image upload failed", "error");
        return;
      }
    }

    const data = {
      ...formData,
      image: imageUrl,
    };
    await axiosSecure.post("/sellerMedicine", data).then((res) => {
      refetch();
      console.log(res.data);
      closeFormModal();
      toast.success("Medicine Added Successfull");
    });
  };

  return (
    <div>
      <div className="flex justify-evenly my-6">
        <h2 className="text-3xl py-6 rounded-md text-center text-white font-bold w-full bg-[#0A9A73]">
          All Medicines
        </h2>
      </div>
      <div className="border p-4">
        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="text-lg font-bold ">
                  <th>Item Name</th>
                  <th>Generic Name</th>
                  <th>Description</th>
                  <th>Unit Price</th>
                </tr>
              </thead>
              <tbody>
                {sellerMedicines.map((sellerMedicine) => (
                  <tr key={sellerMedicine._id}>
                    <td>{sellerMedicine.itemName}</td>
                    <td>{sellerMedicine.genericName}</td>
                    <td>{sellerMedicine.description}</td>
                    <td>{sellerMedicine.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-end mt-6">
        <button
          className="btn btn-sm bg-[#0A9A73] text-white"
          onClick={() => openFormModal()}
        >
          Add Category
        </button>
      </div>

      <AddMedicine
        isOpen={isFormOpen}
        closeModal={closeFormModal}
        handleSubmit={handleFormSubmit}
        sellerMedicines={categoryToEdit}
      />
    </div>
  );
}
