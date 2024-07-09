// DragAndDropImageUpload.tsx
import React, { useCallback } from 'react';
import { Action, State } from './reducerMakerzTaskFor';

interface DragAndDropImageUploadProps {
  dispatch: React.Dispatch<Action>;
  images: State['images'];
}

const DragAndDropImageUpload: React.FC<DragAndDropImageUploadProps> = ({ dispatch, images }) => {
  const handleDrop = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);

    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        console.log("Dispatching ADD_IMAGE with:", result); // Debugging line

        dispatch({ type: 'ADD_IMAGE', payload: result });
      };
      reader.readAsDataURL(file);
    });
  }, [dispatch]);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="mr-2 border border-dashed border-gray-400 p-2 font-extralight text-center cursor-pointer bg-white dark:bg-zinc-800"
    >
      Drag & drop images here
      <div className="flex flex-wrap mt-2.5">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Uploaded ${index}`} className="max-w-[100px] m-2.5" />
        ))}
      </div>
    </div>
  );
};

export default DragAndDropImageUpload;
