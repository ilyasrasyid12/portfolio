import React from 'react';

const ProjectTag = ({ tag, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-white bg-primary hover:bg-white hover:text-slate-800"
    : "border-primary hover:bg-white hover:text-slate-800 hover:border-white";

  return (
    <button
      className={`rounded-full border-2 px-4 py-1 text-xl cursor-pointer ${buttonStyles}`}
      onClick={() => onClick(tag)} // Mengirim tag sebagai parameter
    >
      {tag}
    </button>
  );
};

export default ProjectTag;
