export const formatCurrency = (amount) => {
  return `₹${amount.toLocaleString()}`;
};

export const getCategoryColor = (category) => {
  const colors = {
    Food: "red",
    Travel: "blue",
    Shopping: "green"
  };
  return colors[category] || "gray";
};