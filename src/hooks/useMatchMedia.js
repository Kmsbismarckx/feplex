import { useLayoutEffect, useState } from "react";

const queries = [
  "(max-width: 1024px)",
  "(max-width: 920px)",
  "(max-width: 510px)",
  "(max-width: 375px)",
];

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map((query) => matchMedia(query));

  const getValues = () =>
    mediaQueryLists.map((mediaQueryList) => mediaQueryList.matches);

  const [values, setValues] = useState(getValues);
  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach((mediaQueryList) =>
      mediaQueryList.addEventListener("change", handler)
    );
    return () =>
      mediaQueryLists.forEach((mediaQueryList) =>
        mediaQueryList.removeEventListener("change", handler)
      );
  });
  return ["isMobile", "isHD", "isFooter", "isIphone"].reduce(
    (acc, screen, index) => ({ ...acc, [screen]: values[index] }),
    {}
  );
};
