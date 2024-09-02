import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card" style={{ border: '1px solid #ddd', padding: '20px', marginBottom: '20px' }}>
      <img src={course.thumbnail} alt={course.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <h3>{course.name}</h3>
      <p>Instructor: {course.instructor}</p>
      <Link to={`/courses/${course.id}`}>View Details</Link>
    </div>
  );
};

export default CourseCard;
