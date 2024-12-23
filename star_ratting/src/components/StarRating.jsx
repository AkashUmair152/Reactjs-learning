import { useState } from "react";

const StarRating = () => {
  // rating اور hoverValue کے لیے useState استعمال کریں
  const [rating, setRating] = useState(0); // یہ یوزر کی منتخب کردہ ریٹنگ کو رکھے گا
  const [hoverValue, setHoverValue] = useState(undefined); // یہ ہور کی ویلیو کو رکھے گا

  // تمام 5 سٹارز کے لیے ایک array
  const stars = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // ریٹنگ کو کلک کرنے پر سیٹ کرنا
  const handleClick = (value) => {
    setRating(value);
  };

  // ہور کرنے پر اسٹارز کو یلو کرنے کے لیے
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  // ہور ہٹانے پر ویلیو کو ختم کرنا
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  return (
    <div className="flex justify-center items-center">
      {/* سٹارز کو map کریں */}
      {stars.map((star, index) => (
        <div
          key={index}
          className="cursor-pointer"
          // جب یوزر اسٹار پر کلک کرے تو ریٹنگ سیو ہو جائے
          onClick={() => handleClick(star)}
          // ہور کرنے پر اسٹار کا کلر تبدیل ہو
          onMouseOver={() => handleMouseOver(star)}
          onMouseLeave={handleMouseLeave}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={hoverValue >= star || rating >= star ? "yellow" : "gray"}
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.064 6.364a1 1 0 00.95.69h6.7c.969 0 1.371 1.24.588 1.81l-5.42 3.918a1 1 0 00-.364 1.118l2.064 6.364c.3.921-.755 1.688-1.54 1.118l-5.42-3.918a1 1 0 00-1.175 0l-5.42 3.918c-.784.57-1.838-.197-1.54-1.118l2.064-6.364a1 1 0 00-.364-1.118L2.5 11.79c-.784-.57-.38-1.81.588-1.81h6.7a1 1 0 00.95-.69l2.064-6.364z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default StarRating;
