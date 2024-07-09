import React from "react";
import Image from "next/image";
import ImageZoom from "@/components/Images/ImageZoom";
type TaskImagesProps = {
  images: string[];
};

const TaskImages = ({ images }: TaskImagesProps) => {
  return (
    <div className="flex flex-row">
      {images.map((image,i) => (
        <ImageZoom
          key={i}
          src={image ? image : "/images/ph/600x400.png"}
          alt="Small Image"
          zSrc={image ? image : "/images/ph/600x400.png"}
          zWidth={600}
          zHeight={400}
        />
      ))}

    </div>
  );
};

export default TaskImages;
