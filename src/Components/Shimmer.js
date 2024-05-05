import React from "react";
import ShimmerDefault from "../Components/ShimmerUI/ShimmerDefault";
import ShimmerCards from "../Components/ShimmerUI/ShimmerCards";
const Shimmer = ({ loading }) => {
  if (loading === "cards") {
    return <ShimmerCards></ShimmerCards>;
  }

  return <ShimmerDefault></ShimmerDefault>;
};

export default Shimmer;
