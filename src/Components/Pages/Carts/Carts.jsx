import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure/useAxiosSecure";
import { useNavigate } from "react-router-dom";

export default function Carts() {
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data: items = [] } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const result = await axiosSecure.get(`/addToCart`);
      return result.data;
    },
  });

  const updateItemQuantity = async (id, quantity) => {
    try {
      await axiosSecure.put(`/addToCart/${id}`, { quantity });
      queryClient.invalidateQueries("cartItems");
    } catch (error) {
      console.error("Error updating item quantity:", error);
    }
  };

  const removeItemFromCart = async (id) => {
    try {
      await axiosSecure.delete(`/addToCart/${id}`);
      queryClient.invalidateQueries("cartItems");
    } catch (error) {
      console.error("Error removing item from cart:", error);
    }
  };

  const clearCart = async () => {
    try {
      await axiosSecure.delete(`/addToCart`);
      queryClient.invalidateQueries("cartItems");
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  const handleIncrease = (item) => {
    updateItemQuantity(item._id, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateItemQuantity(item._id, item.quantity - 1);
    }
  };

  const handleRemove = (id) => {
    removeItemFromCart(id);
  };

  const handleClearCart = () => {
    clearCart();
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="pt-32 max-w-screen-lg mx-auto">
      <div className="border p-4">
        <div className="overflow-x-auto">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr className="text-lg font-bold">
                  <th>Name</th>
                  <th>Company</th>
                  <th>Unit Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                  <th>Increase</th>
                  <th>Decrease</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.company}</td>
                    <td>{item.price} TK</td>
                    <td>{item.quantity}</td>
                    <td>
                      <button
                        className="btn btn-sm bg-[#df5731] text-white"
                        onClick={() => handleRemove(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm bg-green-400 text-white"
                        onClick={() => handleIncrease(item)}
                      >
                        Increase
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-sm bg-yellow-400 text-white"
                        onClick={() => handleDecrease(item)}
                      >
                        Decrease
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="btn btn-sm bg-red-500 text-white mr-2"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <button
              className="btn btn-sm bg-blue-500 text-white"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
