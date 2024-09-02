import React from 'react';

const StudentDashboard = () => {
  const enrolledCourses = [
    {
      id: 1,
      name: 'Introduction to React',
      instructor: 'Jane Doe',
      thumbnail: 'https://via.placeholder.com/150',
      dueDate: '2024-12-01',
      progress: 60 // in percentage
    },
    // Add more courses as needed
  ];

  return (
    <div>
      <h1>Student Dashboard</h1>
      <div className="dashboard">
        {enrolledCourses.map(course => (
          <div key={course.id} className="dashboard-card">
            <img src={course.thumbnail} alt={course.name} />
            <h3>{course.name}</h3>
            <p>Instructor: {course.instructor}</p>
            <p>Due Date: {course.dueDate}</p>
            <progress value={course.progress} max="100"></progress>
            <button>Mark as Completed</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
