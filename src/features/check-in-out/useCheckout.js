import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),

    // data is what the mutation function returns (updateBooking in this case)
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} successfully checked out`);
      //   this will invalidate the current ative queries so no need to pass the query key
      queryClient.invalidateQueries({ active: true });
    },

    onError: () => toast.error(`There was an error while checking out`),
  });

  return { checkout, isCheckingOut };
}
