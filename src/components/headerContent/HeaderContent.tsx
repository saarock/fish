import React from "react";

interface HeaderContentProps {
    heading: string;
    content: string;
}
const HeaderContent : React.FC<HeaderContentProps> = ({heading, content}) => {
  return (
    <div className="text-cyan-50">
            <h1 className="text-4xl font-bold text-center mb-6 relative">{heading}
        </h1>
        <p className="text-lg text-center mb-8 relative">
            {content}
        </p>
    </div>
  )
}

export default HeaderContent