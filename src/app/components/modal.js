"use client";

const Modal = ({ children, isVisible }) => {
  return (
    <div
      className={`fixed ${
        !isVisible && "hidden"
      } inset-0 bg-neutral-400 bg-opacity-50 overflow-y-auto h-full w-full`}
    >
      <div class="relative top-20 mx-auto p-5 border w-96  h-96 shadow-lg rounded-md bg-white">
        {children}
      </div>
    </div>
  );
};

export default Modal;
