export function handleAmountLikes(value: number) {
  return value >= 1000 ? (value / 1000).toFixed(1) + "K" : value;
}
