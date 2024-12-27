// export const markAttendance = (data) => API.post('/attendance', data);
// export const getBehaviorReports = () => API.get('/behavior');
// export const getAttendanceSummary = () => API.get('/attendance/summary');
// export const getBehaviorSummary = () => API.get('/behavior/summary');
// import API from './axiosInstance';  // Assume you have a preconfigured axios instance

// // Fetch behavior reports
// export const getBehaviorReports = () => API.get('/behavior/reports');

// // Fetch behavior summary
// export const getBehaviorSummary = () => API.get('/behavior/summary');
import API from './axiosInstance';  // Ensure this is correctly configured for your backend

// Mark attendance with uploaded file
export const markAttendance = (data) => API.post('/attendance', data);

// Fetch behavior reports
export const getBehaviorReports = () => API.get('/behavior/reports');

// Fetch attendance summary
export const getAttendanceSummary = () => API.get('/attendance/summary');

// Fetch behavior summary
export const getBehaviorSummary = () => API.get('/behavior/summary');
