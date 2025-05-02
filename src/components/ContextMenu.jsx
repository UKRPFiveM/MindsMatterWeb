import React, { useState, useEffect, useRef } from 'react';

const ContextMenu = ({ items, onClose }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setVisible(false);
        if (onClose) onClose();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClick);
    
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setVisible(false);
        if (onClose) onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  
  useEffect(() => {
    if (visible && menuRef.current) {
      const menuRect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      let adjustedX = position.x;
      let adjustedY = position.y;
      
      if (position.x + menuRect.width > viewportWidth) {
        adjustedX = viewportWidth - menuRect.width - 10;
      }
      
      if (position.y + menuRect.height > viewportHeight) {
        adjustedY = viewportHeight - menuRect.height - 10;
      }
      
      if (adjustedX !== position.x || adjustedY !== position.y) {
        setPosition({ x: adjustedX, y: adjustedY });
      }
    }
  }, [visible, position]);

  if (!visible) return null;

  return (
    <div 
      ref={menuRef}
      className="fixed z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden min-w-[180px]"
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        animation: 'scale-in 0.15s ease-out forwards'
      }}
    >
      <div className="py-1">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {item.divider ? (
              <div className="h-px bg-gray-200 dark:bg-gray-700 my-1" />
            ) : (
              <button
                onClick={() => {
                  item.onClick();
                  setVisible(false);
                }}
                disabled={item.disabled}
                className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-2 transition-colors
                  ${item.disabled 
                    ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }
                  ${item.danger ? 'text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 hover:text-red-700 dark:hover:text-red-300' : ''}
                `}
              >
                {item.icon && (
                  <span className="text-[#4F46E5] dark:text-indigo-400 mr-2">
                    <i className={`${item.icon}`}></i>
                  </span>
                )}
                <span>{item.label}</span>
              </button>
            )}
          </React.Fragment>
        ))}
      </div>
      
      <style jsx global>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default ContextMenu;