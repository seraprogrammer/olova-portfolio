import { createSignal } from "olova";
import "../style.css";

// Export ToastTypes so it can be used in other components
export const ToastTypes = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
  WARNING: "warning",
};

export const ToastPosition = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  TOP_CENTER: "top-center",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_RIGHT: "bottom-right",
  BOTTOM_CENTER: "bottom-center",
};

const ToastColors = {
  [ToastTypes.SUCCESS]: "bg-green-500",
  [ToastTypes.ERROR]: "bg-red-500",
  [ToastTypes.INFO]: "bg-blue-500",
  [ToastTypes.WARNING]: "bg-yellow-500",
};

const ToastIcons = {
  [ToastTypes.SUCCESS]: "✓",
  [ToastTypes.ERROR]: "✕",
  [ToastTypes.INFO]: "ℹ",
  [ToastTypes.WARNING]: "⚠",
};

const PositionClasses = {
  [ToastPosition.TOP_LEFT]: "fixed top-4 left-4",
  [ToastPosition.TOP_RIGHT]: "fixed top-4 right-4",
  [ToastPosition.TOP_CENTER]: "fixed top-4 left-1/2 -translate-x-1/2",
  [ToastPosition.BOTTOM_LEFT]: "fixed bottom-4 left-4",
  [ToastPosition.BOTTOM_RIGHT]: "fixed bottom-4 right-4",
  [ToastPosition.BOTTOM_CENTER]: "fixed bottom-4 left-1/2 -translate-x-1/2",
};

const [toasts, setToasts] = createSignal([]);
let toastCount = 0; // Add counter to track toasts

export const showToast = (options) => {
  const {
    message,
    type = ToastTypes.INFO,
    position = ToastPosition.TOP_RIGHT,
    duration = 3000,
    html = false,
  } = options;

  const toastId = ++toastCount;
  const existingToasts = document.querySelectorAll(
    `[data-toast-position="${position}"]`
  );
  const offset = existingToasts.length * 60; // 60px spacing between toasts

  const toastElement = document.createElement("div");
  toastElement.setAttribute("data-toast-position", position);
  toastElement.setAttribute("data-toast-id", toastId);
  toastElement.className = `z-[9999] flex items-center gap-2 px-4 py-2 rounded-lg text-white shadow-lg 
    transform transition-all duration-500 ease-in-out ${ToastColors[type]} ${PositionClasses[position]}
    min-w-[200px] pointer-events-auto`;

  // Adjust position based on existing toasts
  if (position.startsWith("bottom")) {
    toastElement.style.bottom = `${16 + offset}px`; // 16px is the default bottom spacing
  } else {
    toastElement.style.top = `${16 + offset}px`; // 16px is the default top spacing
  }

  // Set initial position based on position type
  let initialTransform;
  if (
    position === ToastPosition.TOP_LEFT ||
    position === ToastPosition.BOTTOM_LEFT
  ) {
    initialTransform = "translateX(-100%)";
  } else if (
    position === ToastPosition.TOP_RIGHT ||
    position === ToastPosition.BOTTOM_RIGHT
  ) {
    initialTransform = "translateX(100%)";
  } else {
    initialTransform = position.startsWith("bottom")
      ? "translateY(100%)"
      : "translateY(-100%)";
  }

  toastElement.style.transform = initialTransform;
  toastElement.style.opacity = "0";

  const iconSpan = document.createElement("span");
  iconSpan.className = "text-lg font-bold";
  iconSpan.textContent = ToastIcons[type];

  const messageElement = document.createElement(html ? "div" : "p");
  messageElement.className = "text-sm font-medium text-white";
  if (html) {
    messageElement.innerHTML = message;
  } else {
    messageElement.textContent = message;
  }

  // Add close button
  const closeButton = document.createElement("button");
  closeButton.className = "ml-auto text-white hover:text-gray-200";
  closeButton.textContent = "×";

  toastElement.appendChild(iconSpan);
  toastElement.appendChild(messageElement);
  toastElement.appendChild(closeButton);

  // Add to document body
  document.body.appendChild(toastElement);

  // Trigger entrance animation
  requestAnimationFrame(() => {
    toastElement.style.transform = "translateX(0)";
    toastElement.style.opacity = "1";
  });

  // Update positions of remaining toasts when removing
  const updateRemainingToasts = () => {
    const remainingToasts = document.querySelectorAll(
      `[data-toast-position="${position}"]`
    );
    remainingToasts.forEach((toast, index) => {
      if (position.startsWith("bottom")) {
        toast.style.bottom = `${16 + index * 60}px`;
      } else {
        toast.style.top = `${16 + index * 60}px`;
      }
    });
  };

  // Modify the close button onclick
  closeButton.onclick = () => {
    animateAndRemoveToast(toastElement, position, updateRemainingToasts);
  };

  // Modify the duration timeout
  if (duration !== Infinity) {
    setTimeout(() => {
      animateAndRemoveToast(toastElement, position, updateRemainingToasts);
    }, duration);
  }
};

const animateAndRemoveToast = (element, position, callback) => {
  let exitTransform;
  if (
    position === ToastPosition.TOP_LEFT ||
    position === ToastPosition.BOTTOM_LEFT
  ) {
    exitTransform = "translateX(-100%)";
  } else if (
    position === ToastPosition.TOP_RIGHT ||
    position === ToastPosition.BOTTOM_RIGHT
  ) {
    exitTransform = "translateX(100%)";
  } else {
    exitTransform = position.startsWith("bottom")
      ? "translateY(100%)"
      : "translateY(-100%)";
  }

  element.style.transform = exitTransform;
  element.style.opacity = "0";

  setTimeout(() => {
    if (element.parentNode) {
      document.body.removeChild(element);
      callback(); // Call the update function after removing
    }
  }, 500);
};

// Helper functions for different toast types
export const toast = {
  success: (message, options = {}) =>
    showToast({ message, type: ToastTypes.SUCCESS, ...options }),
  error: (message, options = {}) =>
    showToast({ message, type: ToastTypes.ERROR, ...options }),
  info: (message, options = {}) =>
    showToast({ message, type: ToastTypes.INFO, ...options }),
  warning: (message, options = {}) =>
    showToast({ message, type: ToastTypes.WARNING, ...options }),
};

const Toastify = () => {
  return null;
};

export default Toastify;
