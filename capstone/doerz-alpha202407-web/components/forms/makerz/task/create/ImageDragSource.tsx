// ImageDragSource.tsx
import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

interface ImageDragSourceProps {
  file: File;
}

const ImageDragSource: React.FC<ImageDragSourceProps> = ({ file }) => {
  console.log('file', file);

  const [, drag] = useDrag({
    type: ItemTypes.IMAGE,
    item: { type: ItemTypes.IMAGE, file },
  });

  return (
    <div ref={drag} className="m-2.5 p-2.5 border border-black dark:bg-zinc-800">
      <img src={URL.createObjectURL(file)} alt={file.name} className="max-w-[100px]" />
    </div>
  );
};

export default ImageDragSource;
