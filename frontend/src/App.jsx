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
import Mission from './pages/about/Mission';
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
import Founders from './pages/about/Founders';
import Certificate from './pages/Certificate';
import Portal from './pages/Portal';
import PortalmainContent from './components/pages Component/Portal.component/PortalmainContent';
import PortalProfile from './components/pages Component/Portal.component/PortalProfile';
import PortalCourse from './components/pages Component/Portal.component/PortalCourse';
import CricketMembers from './components/pages Component/ClubComponent/Cricket/CricketMembers';
import CricketManager from './components/pages Component/ClubComponent/Cricket/CricketManager';
import CricketTeam from './components/pages Component/ClubComponent/Cricket/CricketTeam';
import CricketSelector from './components/pages Component/ClubComponent/Cricket/CricketSelector';
import CricketSponsor from './components/pages Component/ClubComponent/Cricket/CricketSponsor';
import CricketGallery from './components/pages Component/ClubComponent/Cricket/CricketGalary';
import CricketFutureProgram from './components/pages Component/ClubComponent/Cricket/CricketfutureProgram';
import BlogPage from './components/pages Component/BlogsComponent/BlogPage';
import Dashboard from './pages/dashboard/Dashboard';
import Teacher from './pages/dashboard/Teacher';
import Coordinarors from './pages/dashboard/Coordinarors';
import DepartmentHead from './pages/dashboard/DepartmentHead';
import ExamControllerComponent from './components/pages Component/Admistration/ExamController/ExamControllerComponent';
import CenteralController from './pages/dashboard/CenteralController';
import StudentDash from './components/DashBoard/coordinartos.component/StudentDash';
import TeacherDash from './components/DashBoard/coordinartos.component/TeacherDash';
import RoutineDash from './components/DashBoard/coordinartos.component/RoutineDash';
import SubjectDash from './components/DashBoard/coordinartos.component/SubjectDash';
import NodeprtTeacherDash from './components/DashBoard/coordinartos.component/NodeprtTeacherDash';
import MarkSheetDash from './components/DashBoard/coordinartos.component/MarkSheetDash';
import CareerDash from './components/DashBoard/coordinartos.component/CareerDash';
import TeacherProfile from './components/DashBoard/teacher.component/TeacherProfile';
import TeacherSubject from './components/DashBoard/teacher.component/TeacherSubject';
import TeacherPayment from './components/DashBoard/teacher.component/TeacherPayment';
import TeacherAddResult from './components/DashBoard/teacher.component/TeacherAddResult';
import TeacherBlogWritting from './components/DashBoard/teacher.component/TeacherBlogWritting';
import TeacherAddNews from './components/DashBoard/teacher.component/TeacherAddNews';
import TeacherClub from './components/DashBoard/teacher.component/TeacherClub';
import CentrallLibrary from './components/DashBoard/centrallcontroller.component/CentrallLibrary';
import CentrallClub from './components/DashBoard/centrallcontroller.component/CentrallClub';
import CentrallGuard from './components/DashBoard/centrallcontroller.component/CentrallGuard';
import CentrallOfficeAssistance from './components/DashBoard/centrallcontroller.component/CentrallOfficeAssistance';
import Centrallgradenar from './components/DashBoard/centrallcontroller.component/Centrallgradenar';
import CentrallHelper from './components/DashBoard/centrallcontroller.component/CentrallHelper';
import CentrallTransport from './pages/dashboard/CentrallTransport';
import CentrallCanteen from './components/DashBoard/centrallcontroller.component/CentrallCanteen';
import CentrallExamController from './pages/dashboard/ExamController';
import ExamNoticeboard from './components/DashBoard/examcontroller.component/ExamNoticeboard';
import ExamDate from './components/DashBoard/examcontroller.component/ExamDate';
import ExamRoutine from './components/DashBoard/examcontroller.component/ExamRoutine';
import ExamDepartment from './components/DashBoard/examcontroller.component/ExamDepartment';
import ExamFutureScheedul from './components/DashBoard/examcontroller.component/ExamFutureScheedul';
import ExamBoard from './components/DashBoard/examcontroller.component/ExamBoard';


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
      { path: '/certificate', element:<Certificate/>},

      { path: '/dashboard', element:<Dashboard/>, 
        children : [
          {path : 'teacher', element:<Teacher/>,
            children : [
              {path: 'profile', element:<TeacherProfile/>},
              {path: 'subject', element:<TeacherSubject/>},
              {path: 'payment', element:<TeacherPayment/>},
              {path: 'add-result', element:<TeacherAddResult/>},
              {path: 'blog-writing', element:<TeacherBlogWritting/>},
              {path: 'add-news', element:<TeacherAddNews/>},
              {path: 'Club', element:<TeacherClub/>},
            ]
          },
          {path : 'coordinator', element:<Coordinarors/>,
            children : [
              {path : 'student' , element : <StudentDash/>},
              {path : 'teacher' , element : <TeacherDash/>},
              {path : 'routine' , element : <RoutineDash/>},
              {path : 'subject' , element : <SubjectDash/>},
              {path : 'non-dept-teacher' , element : <NodeprtTeacherDash/>},
              {path : 'mark-sheet' , element : <MarkSheetDash/>},
              {path : 'career' , element : <CareerDash/>},
            ]
          },
          {path : 'Departmenthead', element:<DepartmentHead/>,
            children : [
              {path : 'student' , element : <StudentDash/>},
              {path : 'teacher' , element : <TeacherDash/>},
              {path : 'routine' , element : <RoutineDash/>},
              {path : 'subject' , element : <SubjectDash/>},
              {path : 'non-dept-teacher' , element : <NodeprtTeacherDash/>},
              {path : 'mark-sheet' , element : <MarkSheetDash/>},
              {path : 'career' , element : <CareerDash/>},
            ]
          },
          {path : 'centralexamcontroller', element:<CentrallExamController/>,
            children : [
              {path : 'notice-board' , element:<ExamNoticeboard/>},
              {path : 'exam-date' , element:<ExamDate/>},
              {path : 'exam-routine' , element:<ExamRoutine/>},
              {path : 'department' , element:<ExamDepartment/>},
              {path : 'future-schedule' , element:<ExamFutureScheedul/>},
              {path : 'exam-board' , element:<ExamBoard/>},
            ]
          },
          {path : 'centralcontroller', element:<CenteralController/>,
            children : [
              {path : 'library' , element:<CentrallLibrary/>},
              {path : 'Club' , element:<CentrallClub/>},
              {path : 'Security-Guard' , element:<CentrallGuard/>},
              {path : 'canteen' , element:<CentrallCanteen/>},
              {path : 'office-assistance' , element:<CentrallOfficeAssistance/>},
              {path : 'gardener' , element:<Centrallgradenar/>},
              {path : 'Helper' , element:<CentrallHelper/>},
              {path : 'transport' , element:<CentrallTransport/>},
            ]
          },
        ]
      },
      { path: '/portal', element:<Portal/>,
        children:[
          {path : 'result', element:<PortalmainContent/>},
          {path : 'profile', element:<PortalProfile/>},
          {path : 'courses', element:<PortalCourse/>},
          {path : 'finalcial', element:<PortalmainContent/>}
        ]
      },
      { path: '/blogs', element:<Blogs/>,
        children :[
          {path: 'dept', element:<Blogsection/>},
          
        ]
      },
      {path: 'single/blog', element:<BlogPage/>},
      { path: '/newsandevent', element:<NewsAndEvent/>},
      { path: '/research', element:<Research/>},
      { path: '/club', element:<Club/>,
        children : [
          {path : 'cricket/cricketmembers', element: <CricketMembers/> },
          {path : 'cricket/cricketmanager', element: <CricketManager/> },
          {path : 'cricket/cricketteam', element: <CricketTeam/> },
          {path : 'cricket/cricketselector', element: <CricketSelector/> },
          {path : 'cricket/cricketsponsor', element: <CricketSponsor/> },
          {path : 'cricket/cricketgallery', element: <CricketGallery/> },
          {path : 'cricket/cricketfuture-program', element: <CricketSponsor/> },
          {path : 'cricket/cricketachievement', element: <CricketFutureProgram/> },
        ]
      },
      { path: '/mission', element:<Mission/>},
      { path: '/founder', element:<Founders/>},
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

