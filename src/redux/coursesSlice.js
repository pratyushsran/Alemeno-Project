import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  list: [],  // Course list
  enrolled: [],  // Enrolled courses
};

// Create a slice for courses
export const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setCourses: (state, action) => {
      state.list = action.payload;
    },
    enrollInCourse: (state, action) => {
      state.enrolled.push(action.payload);
    },
    markCourseComplete: (state, action) => {
      const courseId = action.payload;
      state.enrolled = state.enrolled.map(course =>
        course.id === courseId ? { ...course, completed: true } : course
      );
    },
  },
});

// Export actions and reducer
export const { setCourses, enrollInCourse, markCourseComplete } = coursesSlice.actions;
export default coursesSlice.reducer;
