import React, { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset; // یوزر کی موجودہ سکرول پوزیشن
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight; // کل سکرول ایبل ڈسٹنس
      const scrollPercentage = (scrollTop / windowHeight) * 100; // سکرول پروگریس کا حساب

      setScrollPosition(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* سکرول انڈیکیٹر */}
      <div
        style={{ width: `${scrollPosition}%` }}
        className="fixed top-0 left-0 h-2 bg-blue-500 z-50"
      ></div>

      {/* Dummy Content for Scroll */}
      <div style={{ height: "2000px" }}>
        <h1 className="text-center mt-8 text-2xl">
          Scroll down to see the progress bar!
        </h1>
      </div>
    </div>
  );
};

export default ScrollIndicator;
