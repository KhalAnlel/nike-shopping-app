import categories from "../../data/categories.json";

export const filterData = (query, data) => {
  let filteredData = [];
  let notFound = false;
  const categoryExists = categories.some(
    (category) => category.title.toLowerCase() === query
  );

  if (categoryExists) {
    // Exact match for query
    filteredData = data.filter(
      (product) => product.category.toLowerCase() === query
    );
    notFound = false;
  } else if (query === undefined || query === "") {
    // Show all items when query is undefined or empty
    filteredData = data;
    notFound = false;
  } else {
    // Partial match for category
    filteredData = data.filter((product) =>
    product.category.toLowerCase().includes(query) ||
    product.title.toLowerCase().includes(query)
  );
    notFound = filteredData.length === 0;
  }

  // Handle special cases
  if (query === "all") {
    filteredData = data;
  } else if (query === "latest") {
    filteredData = data.reverse();
    notFound = false;
  } else if (query === "best rated") {
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
