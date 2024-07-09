// DnDContext.tsx
import React, { ReactNode } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

interface DnDContextProps {
  children: ReactNode;
}

const DnDContext: React.FC<DnDContextProps> = ({ children }) => {
  return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
};

export default DnDContext;
