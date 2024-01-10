import { Courier } from "@prisma/client";

export function findCourierWithFewestOrders(couriers: Courier[]) {
  // Filter the couriers online
  const availableCouriers = couriers.filter(
    (courier) => courier.availability === "online"
  );

  // find the courier with the fewest dailyOrderCount
  let courierWithFewestOrders = availableCouriers[0];

  for (let i = 1; i < availableCouriers.length; i++) {
    let fewest = availableCouriers[i];
    if (fewest.dailyOrderCount < courierWithFewestOrders.dailyOrderCount) {
      courierWithFewestOrders = fewest;
    }
  }

  return courierWithFewestOrders;
}
