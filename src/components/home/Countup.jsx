import React, { useState, useEffect } from "react";

const CountUp = ({ limit }) => {
  const [count, setCount] = useState(0);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY >= window.innerHeight * 2) {
        // 200vh equivalent
        console.log("scroll");
        setHasScrolled(true); // Update state to prevent further triggers
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]); // Include hasScrolled in the dependency array

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < limit) {
          return prevCount + 1;
        } else {
          clearInterval(interval);
          return prevCount;
        }
      });
    }, 10);

    return () => clearInterval(interval);
  }, [limit]);

  return (
    <>
      <p className="text-[#CD820E] text-[56px] "> {count}</p>
    </>
  );
};

export default CountUp;
