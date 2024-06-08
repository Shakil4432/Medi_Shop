import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import DeleteModal from "../Modal/DeleteModal";
import AddAndUpdateModal from "../Modal/AddAndUpdateModal";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

export default function Category() {
  const axiosSecure = useAxiosSecure();
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [categoryToEdit, setCategoryToEdit] = useState(null);

  const closeModal = () => {
    setIsOpen(false);
    setActiveCategoryId(null);
  };

  const closeFormModal = () => {
    setIsFormOpen(false);
    setCategoryToEdit(null);
  };

  const { data: categories = [], refetch } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await axiosSecure.get("/category");
      return res.data;
    },
  });

  const handleDelete = (id) => {
    axiosSecure.delete(`/category/${id}`).then((res) => {
      refetch();
      console.log(res.data);
      closeModal();
    });
  };

  const handleFormSubmit = async (formData, imageFile, id) => {
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
      categoryName: formData.categoryName,
      categoryImage: imageUrl,
    };

    if (id) {
      axiosSecure.put(`/category/${id}`, data).then((res) => {
        refetch();
        console.log(res.data);
        closeFormModal();
      });
    } else {
      axiosSecure.post("/category", data).then((res) => {
        refetch();
        console.log(res.data);
        closeFormModal();
        toast.success("Category Added Successfull");
      });
    }
  };

  const openModal = (id) => {
    setActiveCategoryId(id);
    setIsOpen(true);
  };

  const openFormModal = (category = null) => {
    setCategoryToEdit(category);
    setIsFormOpen(true);
  };

  return (
    <div>
      <div className="flex justify-evenly my-6">
        <h2 className="text-3xl py-6 rounded-md text-center text-white font-bold w-full bg-[#0A9A73]">
          All Category
        </h2>
      </div>
      <div className="border p-4">
        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="text-lg font-bold ">
                  <th>Image</th>
                  <th>Category</th>
                  <th>Update Action</th>
                  <th>Delete Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={category.categoryImage} alt="Category" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{category.categoryName}</td>
                    <td>
                      <button
                        className="btn btn-sm bg-[#0A9A73] text-white"
                        onClick={() => openFormModal(category)}
                      >
                        Update
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => openModal(category._id)}
                      >
                        Delete
                      </button>
                    </td>
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
      <DeleteModal
        isOpen={isOpen}
        closeModal={closeModal}
        handleDelete={() => handleDelete(activeCategoryId)}
      />
      <AddAndUpdateModal
        isOpen={isFormOpen}
        closeModal={closeFormModal}
        handleSubmit={handleFormSubmit}
        category={categoryToEdit}
      />
    </div>
  );
}
