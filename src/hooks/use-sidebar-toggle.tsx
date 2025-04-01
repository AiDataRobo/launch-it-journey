
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
