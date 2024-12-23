import { useState, useEffect } from "react";
import axios from "axios"; // optional, if you prefer axios

const ImageSlider = () => {
  const [images, setImages] = useState([]); // امیجز کو ذخیرہ کرنے کے لیے
  const [currentIndex, setCurrentIndex] = useState(0); // سلائیڈر کے موجودہ انڈیکس کو ذخیرہ کرنے کے لیے

  // Lahorem Picsum API سے امیجز لانے کے لیے useEffect استعمال کریں
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://picsum.photos/v2/list?page=1&limit=20"
        );
        setImages(response.data); // امیجز کو state میں سیٹ کریں
      } catch (error) {
        console.error("Error fetching images", error);
      }
    };

    fetchImages();
  }, []);

  // نیکسٹ امیج پر جانے کے لیے فنکشن
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // پریویس امیج پر جانے کے لیے فنکشن
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative mx-auto">
      <h2 className="text-center text-xl font-bold mb-4">Image Slider</h2>

      {/* اگر امیجز ابھی نہیں آئے تو "Loading..." دکھائیں */}
      {images.length === 0 ? (
        <p>Loading...</p>
      ) : (
        <div className="relative">
          {/* امیج کو رینڈر کریں */}
          <img
            src={images[currentIndex].download_url}
            alt={images[currentIndex].author}
            className="object-cover   h-[85vh] w-[100%]  rounded-md"
          />
          <p className="text-center text-xl font-bold mt-2">
            `Author Name: {images[currentIndex].author}`
          </p>

          {/* Previous اور Next بٹنز */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-300 px-4 py-2"
            onClick={prevSlide}
          >
            Prev
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-300 px-4 py-2"
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
