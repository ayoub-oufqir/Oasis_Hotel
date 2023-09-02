import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
import { toast } from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { isLoading: isDeletingBooking, mutate: deleteBooking } = useMutation({
    mutationFn: (id) => deleteBookingApi(id),

    onSuccess: () => {
      toast.success("Booking succussfully deleted");
      queryClient.invalidateQueries({
        queryKey: "bookings",
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return { deleteBooking, isDeletingBooking };
}
