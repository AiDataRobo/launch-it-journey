
import { useState, useEffect } from 'react';

export const useSidebarToggle = (initialState = false) => {
  // Use localStorage to persist the sidebar state
  const [isOpen, setIsOpen] = useState(() => {
    // Try to get the stored value on initialization
    const storedValue = localStorage.getItem('sidebarOpen');
    return storedValue !== null ? JSON.parse(storedValue) : initialState;
  });

  // Update localStorage when isOpen changes
  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(isOpen));
  }, [isOpen]);

  // Add keyboard shortcut (Ctrl+B or Cmd+B) to toggle sidebar
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'b') {
        event.preventDefault();
        setIsOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggle = () => setIsOpen(!isOpen);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return {
    isOpen,
    toggle,
    open,
    close
  };
};

export default useSidebarToggle;
