export function calculateTotal(purchases, applyDiscount) {
  const sum = purchases.reduce((acc, item, index) => {
    acc += item.count * item.price;
    return acc;
  }, 0);

  if (applyDiscount == true) {
    return sum * 0.5;
  } else {
    return sum;
  }
}
