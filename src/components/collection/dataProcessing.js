import animeSeries from "../../data/animeSeries.json";

export const filterData = (category, data) => {
  let filteredData = [];

  if (animeSeries.includes(category)) {
    filteredData = data.filter((item) => item.anime === category);
  } else if (category) {
    filteredData = data.filter(
      (item) => item.type.includes(category) || item.anime.includes(category)
    );
  }

  if (category === "all") {
    filteredData = data;
  }

  if (category === "latest") {
    filteredData = data.slice(-50).reverse();
  }

  if (category === "best rated") {
    filteredData = data
      .filter((item) => item.rate >= 1)
      .sort((a, b) => b.rate - a.rate);
  }

  return filteredData;
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
