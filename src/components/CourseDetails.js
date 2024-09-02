import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courseModel from '../data/courseModel';

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [showSyllabus, setShowSyllabus] = useState(false);

  useEffect(() => {
    const fetchedCourse = courseModel.find(course => course.id === parseInt(id));
    setCourse(fetchedCourse);
  }, [id]);

  if (!course) return <p>Loading...</p>;

  return (
    <div className="course-details">
      <h2>{course.name}</h2>
      <p><strong>Instructor:</strong> {course.instructor}</p>
      <p><strong>Description:</strong> {course.description}</p>
      <p><strong>Status:</strong> {course.enrollmentStatus}</p>
      <p><strong>Duration:</strong> {course.duration}</p>
      <p><strong>Schedule:</strong> {course.schedule}</p>
      <p><strong>Location:</strong> {course.location}</p>
      <p><strong>Pre-requisites:</strong> {course.prerequisites.join(', ')}</p>
      
      <div className="syllabus">
        <button onClick={() => setShowSyllabus(!showSyllabus)}>
          {showSyllabus ? 'Hide Syllabus' : 'Show Syllabus'}
        </button>
        {showSyllabus && (
          <ul>
            {course.syllabus.map((item, index) => (
              <li key={index}>
                <strong>Week {item.week}:</strong> {item.topic} - {item.content}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button onClick={() => navigate('/')}>Back to Courses</button>
    </div>
  );
};

export default CourseDetails;
