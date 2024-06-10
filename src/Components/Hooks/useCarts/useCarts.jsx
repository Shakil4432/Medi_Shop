import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

export default function useCarts() {
  const axiosSecure = useAxiosSecure();
  const { data: carts = [], refetch } = useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const res = await axiosSecure.get("/addToCart");
      return res.data;
    },
  });
  return [carts, refetch];
}
