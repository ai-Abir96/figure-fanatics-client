import React from "react";

export const UseTitle = (title) => {
  return React.useEffect(() => {
    document.title = title
      ? `Action Figure Fanatics | ${title} `
      : `Action Figure Fanatics`;
  }, [title]);
};
