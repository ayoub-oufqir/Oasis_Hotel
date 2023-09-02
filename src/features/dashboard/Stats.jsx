/* eslint-disable no-unused-vars */
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
export default function Stats({
  bookings,
  confirmedStays,
  numDays,
  cabinCount,
}) {
  // 1.
  const numBookings = bookings?.length;
  // 2.
  const sales = bookings?.reduce((acc, curr) => acc + curr.totalPrice, 0);
  // 3.
  const checkins = confirmedStays?.length;
  // 4.
  // num checked in nights / all availibale nights (num days * num cabins)
  const occupation =
    confirmedStays?.reduce((acc, curr) => acc + curr.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}
