export function generateOrderNumber() {
  const randomNumber = Math.floor(Math.random() * 1000000000);
  const orderNumber = `dash-${randomNumber}`;
  return orderNumber;
}
