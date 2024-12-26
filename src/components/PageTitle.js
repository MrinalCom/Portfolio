import React from "react";

const PageTitleRef = ({ text1, text2 }, ref) => {
  return (
    <h1 className="text-3xl lg:text-4xl" ref={ref}>
      {text1}{" "}
      <span className="text-highlight2 dark:text-highlight">{text2}</span>
    </h1>
  );
};
const PageTitle = React.forwardRef(PageTitleRef);

export function SubTitle({ text }) {
  return (
    <h3 className="text-3xl text-highlight2 dark:text-highlight">
      <span>{text}</span>
    </h3>
  );
}

export default PageTitle;
