import "./styles/style.css";

interface HoverLinksProps {
  text: string;
  cursor?: boolean;
}

const HoverLinks = ({ text, cursor }: HoverLinksProps) => {
  return (
    // Use undefined so the attribute is entirely removed if cursor is true
    <div className="hover-link" data-cursor={!cursor ? "disable" : undefined}>
      <div className="hover-in">
        {text} 
        <div>{text}</div>
      </div>
    </div>
  );
};

export default HoverLinks;