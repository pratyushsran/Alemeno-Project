import React from 'react';

const Syllabus = ({ syllabus }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Hide Syllabus' : 'Show Syllabus'}
      </button>
      {isExpanded && (
        <ul>
          {syllabus.map((item, index) => (
            <li key={index}>
              <strong>Week {item.week}: {item.topic}</strong>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Syllabus;
