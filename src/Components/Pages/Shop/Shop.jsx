import React, { useState } from "react";
import useCarts from "../../Hooks/useCarts/useCarts";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import DetailsModal from "../Dashboard/Modal/DetailsModal";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

export default function Shop() {
  const [, refetch] = useCarts();
  const axiosSecure = useAxiosSecure();
  const [details, setDetails] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { data: items = [] } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/allCategory`);
      return result.data;
    },
  });

  const handleItem = (data) => {
    const newData = {
      name: data.name,
      company: data.manufacturer,
      price: data.price,
      quantity: data.quantity,
    };

    axiosSecure.post("/addToCart", newData).then((res) => {
      if (res.data.insertedId) {
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: `${data.name} added to the cart`,
          icon: "success",
        });
      }
    });
  };
  const openFormModal = (item = null) => {
    setDetails(item);
    setIsFormOpen(true);
  };
  const closeFormModal = () => {
    setIsFormOpen(false);
    setDetails(null);
  };
  return (
    <div className="pt-20 max-w-screen-lg mx-auto">
      <div className="border p-4">
        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="text-lg font-bold ">
                  <th>Image</th>
                  <th>Category</th>
                  <th>Name</th>
                  <th>Details</th>
                  <th>Add</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.image} alt="Category" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.category}</td>
                    <td>{item.name}</td>
                    <td>
                      <button
                        className="btn btn-sm bg-[#0A9A73] text-white"
                        onClick={() => openFormModal(item)}
                      >
                        See Details
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleItem(item)}
                        className="btn btn-sm bg-orange-400 text-white"
                      >
                        Add To Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <DetailsModal
        isOpen={isFormOpen}
        closeModal={closeFormModal}
        item={details}
      />
    </div>
  );
}
