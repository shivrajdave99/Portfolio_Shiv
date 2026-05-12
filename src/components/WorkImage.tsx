import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = ({ image, alt, video, link }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={link}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target="_blank"
        rel="noreferrer"
        data-cursor="disable"
      >
        {link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        
        {/* Base Image */}
        <img src={image} alt={alt || "Project Image"} />

        {/* Video Layer: Conditionally rendered on hover.
            NOTE: Pass video props like "/videos/my-clip.mp4" assuming 
            the file is in your public directory. */}
        {video && isHovered && (
          <video 
            src={video} 
            autoPlay 
            muted 
            playsInline 
            loop
            // Make sure your CSS has this positioned absolutely to cover the image!
            className="work-video-hover" 
          ></video>
        )}
      </a>
    </div>
  );
};

export default WorkImage;