



import React, { useState } from "react";
import Modal from "react-modal";
import { MdSlowMotionVideo } from "react-icons/md";
import '../../app/globals.css'; 
const VideoModalSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <section className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/img/1mnxgdl3iry.jpg')" }}>
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center px-4 sm:px-20 h-full text-white">
        <h6 className="text-[#F56800] text-xl font-semibold uppercase">Top Quality</h6>
        <h2 className=" mb-6 text-2xl sm:text-5xl font-bold pt-2 text-white py-3 text-justify">Experience Top Quality Excellence</h2>
        <p className="mb-8 sm:text-center max-w-lg">
        At Samir textile, we are committed to delivering top-quality products and services that exceed your expectations. Here’s what sets our quality apart.
        </p>
        <button
          className="bg-[#F56800] text-white py-4 px-4 rounded-full text-xl"
          onClick={openModal}
        >
          <MdSlowMotionVideo className="text-4xl" />
        </button>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="relative mx-auto my-auto w-11/12 md:w-3/4 h-3/4 bg-transparent"
        overlayClassName="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
        ariaHideApp={false}
      >
        <button onClick={closeModal} className="absolute top-4 right-4 text-white text-2xl">
          X
        </button>
        <div className="relative w-full h-full">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/VhBl3dHT5SY?autoplay=1"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </section>
  );
};

export default VideoModalSection;
