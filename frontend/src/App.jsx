import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './pages/Home';
import Apply from './pages/Apply';
import Transports from './pages/Transports';
import Library from './pages/Library';
import Student from './pages/Student';
import Alumni from './pages/Alumni';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Blogsection from './components/pages Component/BlogsComponent/Blogsection';
import NewsAndEvent from './pages/NewsAndEvent';
import Research from './pages/Research';
import Club from './pages/Club';
import Cricket from './components/pages Component/ClubComponent/Cricket';
import Mission from './pages/about/Mission';
import Founder from './pages/about/founder';
import Leader from './pages/about/Leader';
import Cse from './pages/Academics/Cse';
import CseHome from './components/department/cseComponent/CseHome';
import ApplyInput from './components/generallComponent/ApplyInput';
import TeacherApplyForm from './components/generallComponent/TeacherApplyForm';
import StaffForm from './components/generallComponent/StaffForm';
import Calender from './pages/Admission/Calender';
import Courses from './pages/Admission/Courses';
import Policy from './pages/Admission/Policy';
import Offers from './pages/Admission/Offers';
import Vice_chancellor from './pages/Admistration/Vice_chancellor';
import Provice_chancellor from './pages/Admistration/Provice_chancellor';
import Register from './pages/Admistration/Register';
import ExamController from './pages/Admistration/ExamController';
import Treasusrer from './pages/Admistration/Treasusrer';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home/> },
      {path : '/applyInput', element: <ApplyInput/> },
      {path : '/teacherApplyForm', element:<TeacherApplyForm/>},
      {path : '/staffApplyForm', element:<StaffForm/>},
      {path : '/calender', element:<Calender/>},
      {path : '/course', element:<Courses/>},
      {path : '/policy', element:<Policy/>},
      {path : '/offer', element:<Offers/>},
      {path : '/vice', element:<Vice_chancellor/>},
      {path : '/pro_vice', element:<Provice_chancellor/>},
      {path : '/treasusrer', element:<Treasusrer/>},
      {path : '/register', element:<Register/>},
      {path : '/exam', element:<ExamController/>},
      { path: '/apply', element:<Apply/>},
      { path: '/transport', element:<Transports/>},
      { path: '/library', element:<Library/>},
      { path: '/student', element:<Student/>},
      { path: '/alumni', element:<Alumni/>},
      { path: '/career', element:<Career/>},
      { path: '/contact', element:<Contact/>},
      { path: '/blogs', element:<Blogs/>,
        children :[
          {path: 'dept', element:<Blogsection/>}
        ]
      },
      { path: '/newsandevent', element:<NewsAndEvent/>},
      { path: '/research', element:<Research/>},
      { path: '/club', element:<Club/>,
        children : [
          {path : 'cricket', element: <Cricket/> }
        ]
      },
      { path: '/mission', element:<Mission/>},
      { path: '/founder', element:<Founder/>},
      { path: '/leader', element:<Leader/>},
      { path: '/cse', element:<Cse/>,
        children : [
          {path : '', element:<CseHome/>},
          {path : 'home', element:<CseHome/>},
          {path : 'home', element:<CseHome/>},
          {path : 'home', element:<CseHome/>},
          {path : 'home', element:<CseHome/>},
          {path : 'home', element:<CseHome/>},
          {path : 'home', element:<CseHome/>},
        ]
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={appRouter} /> 
    </main>
  );
}

export default App;

