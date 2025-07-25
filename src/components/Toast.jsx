import React, { useState, useEffect } from "react";
import { FiCheckCircle, FiX, FiAlertCircle } from "react-icons/fi";

const Toast = ({ message, type = "success", duration = 3000, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for animation to complete
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const getToastStyles = () => {
    switch (type) {
      case "error":
        return "bg-red-600 text-white";
      case "success":
        return "bg-green-600 text-white";
      default:
        return "bg-green-600 text-white";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "error":
        return <FiAlertCircle className="flex-shrink-0" />;
      case "success":
        return <FiCheckCircle className="flex-shrink-0" />;
      default:
        return <FiCheckCircle className="flex-shrink-0" />;
    }
  };

  return (
    <div
      className={`fixed top-20 right-4 z-[9999] transition-all duration-300 transform ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg max-w-sm ${getToastStyles()}`}
        style={{ boxShadow: "2px 2px 0 3px rgba(0,0,0,0.3)" }}
      >
        {getIcon()}
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button
          onClick={handleClose}
          className="flex-shrink-0 hover:opacity-80 transition-opacity"
          aria-label="Close notification"
        >
          <FiX />
        </button>
      </div>
    </div>
  );
};

export default Toast;
