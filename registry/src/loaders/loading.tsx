import React from "react";

export const Loading = () => {
  return (
    <button type="button" className="bg-indigo-500 ..." disabled>
      <svg className="mr-3 size-5 animate-spin ..." viewBox="0 0 24 24"></svg>
      Processing…
    </button>
  );
};
