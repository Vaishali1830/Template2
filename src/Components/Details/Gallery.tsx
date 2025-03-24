import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import pic1 from '../../assets/img1.jpg'
import pic2 from '../../assets/img2.jpg'
import pic3 from '../../assets/img3.jpg'
import pic4 from '../../assets/school.jpg'
import pic5 from '../../assets/footer.jpeg'
import pic6 from '../../assets/clg2.jpg'
import pic7 from '../../assets/s1.jpeg'
import pic8 from '../../assets/s2.webp'
import pic9 from '../../assets/s3.jpeg'
import pic10 from '../../assets/s4.jpeg'
import pic11 from '../../assets/s5.jpeg'
import pic12 from '../../assets/s6.webp'
import pic13 from '../../assets/s7.webp'
import pic14 from '../../assets/s8.jpg'
import pic15 from '../../assets/s9.jpeg'
import pic16 from '../../assets/s10.jpeg'
import pic17 from '../../assets/s11.jpg'
import pic18 from '../../assets/s12.jpeg'
import pic19 from '../../assets/fun1.jpg'
import pic20 from '../../assets/fun2.webp'

const images: string[] = [
  pic1, pic2, pic3 , pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20 ];

export const SchoolGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    if (currentIndex !== null) {
      const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
      setSelectedImage(images[newIndex]);
      setCurrentIndex(newIndex);
    }
  };

  const nextImage = () => {
    if (currentIndex !== null) {
      const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
      setSelectedImage(images[newIndex]);
      setCurrentIndex(newIndex);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4 text-center">School Gallery</h2>
      
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`School ${index + 1}`}
            className="w-full h-60 object-cover rounded-lg cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => openModal(index)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <button onClick={closeModal} className="absolute top-4 right-4 text-primary text-2xl">
            <X size={32} />
          </button>

          <button onClick={prevImage} className="absolute left-4 text-primary text-2xl">
            <ChevronLeft size={40} />
          </button>

          <img src={selectedImage} alt="Selected" className="max-w-[90%] max-h-[80%] rounded-lg" />

          <button onClick={nextImage} className="absolute right-4 text-primary text-2xl">
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </div>
  );
};

