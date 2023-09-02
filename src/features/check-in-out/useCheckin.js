import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),

    // data is what the mutation function returns (updateBooking in this case)
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} successfully checked in`);
      //   this will invalidate the current ative queries so no need to pass the query key
      queryClient.invalidateQueries({ active: true });
      // navigate to home page
      navigate("/");
    },

    onError: () => toast.error(`There was an error while checking in`),
  });

  return { checkin, isCheckingIn };
}
