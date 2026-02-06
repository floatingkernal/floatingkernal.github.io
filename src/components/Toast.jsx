import { useEffect, useState } from 'react';
import { FiCheck, FiX } from 'react-icons/fi';

export default function Toast({ message, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger slide-up animation
    requestAnimationFrame(() => setVisible(true));

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(onClose, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl bg-gray-900 dark:bg-white text-white dark:text-gray-900">
        <FiCheck size={24} className="text-green-400 dark:text-green-600 shrink-0" />
        <span className="text-base font-semibold">{message}</span>
        <button
          onClick={() => {
            setVisible(false);
            setTimeout(onClose, 300);
          }}
          className="ml-2 text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-900 transition-colors"
          aria-label="Dismiss"
        >
          <FiX size={16} />
        </button>
      </div>
    </div>
  );
}
