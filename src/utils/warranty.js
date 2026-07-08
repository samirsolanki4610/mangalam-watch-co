/**
 * Automatically determine warranty period based on price.
 * ₹100–₹499  -> 3 Months
 * ₹500–₹999  -> 6 Months
 * ₹1000+     -> 12 Months
 */
export function getWarranty(price) {
  if (price >= 1000) return '12 Months'
  if (price >= 500) return '6 Months'
  return '3 Months'
}
