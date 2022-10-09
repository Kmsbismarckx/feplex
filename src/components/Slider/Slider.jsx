import React, { Children, cloneElement, useEffect, useState } from "react";
import "./Slider.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = ({ children, currentPage, setCurrentPage }) => {
  const PAGE_WIDTH = 100;

  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      return Math.min(newOffset, 0);
    });
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

      if (currentPage < 4) {
        setCurrentPage(currentPage + 1);
      }

      if (newOffset < maxOffset) {
        setCurrentPage(1);
        return 0;
      }

      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child, index) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minWidth: `${PAGE_WIDTH}%`,
            maxWidth: `${PAGE_WIDTH}%`,
          },
        });
      })
    );
  }, [children]);

  return (
    <div className={`main__container`}>
      <div className={`window`}>
        <div
          className={`all__pages_container`}
          style={{ transform: `translateX(${offset}%)` }}
        >
          {pages}
        </div>
        <FaChevronLeft className={`arrow`} onClick={handleLeftArrowClick} />
        <FaChevronRight className={`arrow`} onClick={handleRightArrowClick} />
      </div>
    </div>
  );
};

export default Slider;
