import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import courseModel from '../data/courseModel';

const CourseList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredCourses = courseModel.filter(course =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Course List</h1>
      <input
        type="text"
        placeholder="Search by course name or instructor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="course-list">
        {filteredCourses.map(course => (
          <div key={course.id} className="course-card">
            <img src={course.thumbnail} alt={course.name} />
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            <Link to={`/courses/${course.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
