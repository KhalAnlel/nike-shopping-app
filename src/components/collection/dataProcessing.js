import categories from "../../data/categories.json";

export const filterData = (category, data) => {
  let filteredData = [];
  let notFound = false;
  const categoryExists = categories.some(
    (item) => item.title.toLowerCase() === category
  );

  if (categoryExists) {
    // Exact match for category
    filteredData = data.filter(
      (item) => item.category.toLowerCase() === category
    );
    notFound = false;
  } else if (category === undefined || category === "") {
    // Show all items when category is undefined or empty
    filteredData = data;
    notFound = false;
  } else {
    // Partial match for category
    filteredData = data.filter((item) =>
      item.category.toLowerCase().includes(category)
    );
    notFound = filteredData.length === 0;
  }

  // Handle special cases
  if (category === "all") {
    filteredData = data;
  } else if (category === "latest") {
    filteredData = data.slice(-50).reverse();
    notFound = false;
  } else if (category === "best rated") {
    filteredData = data
      .filter((item) => item.rate >= 1)
      .sort((a, b) => b.rate - a.rate);
    notFound = false;
  }
  return { filteredData, notFound };
};

export const sortDataFunc = (sortType, data) => {
  let sortedData = [...data];

  switch (sortType) {
    case "A-Z":
      sortedData = sortedData.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "Z-A":
      sortedData = sortedData.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case "old-new":
      // No changes needed for this case
      break;
    case "new-old":
      sortedData = sortedData.reverse();
      break;
    case "low-high":
      sortedData = sortedData.sort((a, b) => a.price - b.price);
      break;
    case "high-low":
      sortedData = sortedData.sort((a, b) => b.price - a.price);
      break;
    case "Best Rated":
      sortedData = sortedData.sort((a, b) => b.rate - a.rate);
      break;
    default:
      // Handle the case when sortType is not one of the specified options
      break;
  }

  return sortedData;
};
