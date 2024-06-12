import { useQuery } from "@tanstack/react-query";
import useAuth from "../useAuth/useAuth";
import useAxiosSecure from "../useAxiosSecure/useAxiosSecure";

const useUser = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: isUser, isPending: isUserLoading } = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/user/${user.email}`);
      console.log(res.data);
      return res.data?.users;
    },
  });
  return [isUser, isUserLoading];
};

export default useUser;
