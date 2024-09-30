// 






'use client';
import { useState } from 'react';
import Image from 'next/image';

const GalleryWithModal = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const images = [
    { src: '/img/fish-gallry (1).jpg', alt: 'Gallery Image 5' },
    { src: '/img/fish-gallry (2).jpg', alt: 'Gallery Image 1' },
    { src: '/img/fish-gallry (3).jpg', alt: 'Gallery Image 2' },
    { src: '/img/fish-gallry (4).jpg', alt: 'Gallery Image 6' },
    { src: '/img/fish-gallry (5).jpg', alt: 'Gallery Image 7' },
    { src: '/img/fish-gallry (6).jpg', alt: 'Gallery Image 3' },
    { src: '/img/fish-gallry (7).jpg', alt: 'Gallery Image 4' },
    { src: '/img/fish-gallry (8).jpg', alt: 'Gallery Image 8' },
  ];

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImage('');
  };

  return (
    <div className="bg-slate-100 py-5">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative group cursor-pointer wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
            <a onClick={() => handleImageClick(image.src)} className="cursor-pointer">
              <Image
                className="img-fluid object-cover"
                src={image.src}
                alt={image.alt}
                width={400} // Specify the width
                height={300} // Specify the height
                layout="responsive" // Ensure the image is responsive
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg">View Image</span>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Modal Image"
              width={800}
              height={600}
              layout="responsive"
              className="rounded"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryWithModal;
