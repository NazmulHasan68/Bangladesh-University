import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetStudentsDataByIdQuery, useUpdateStudentsDataByIdMutation } from '../../../../redux/BustudentApi';
import PersonalInformation from './PersonalInformation';
import AddressInformation from './AddressInformation';

export default function StudentById() {
  const { studentid } = useParams();

  // Fetch student data
  const { data: studentById, isLoading, error } = useGetStudentsDataByIdQuery(studentid);
  
  const [updateStudent] = useUpdateStudentsDataByIdMutation();

  // Handle form state
  const [formData, setFormData] = useState({
    studentname: '',
    studentprofile: '',
    email: '',
    phone: '',
    dob: '',
    nationality: '',
    religion: '',
    fathername: '',
    mothername: '',
    desiredDepartment: '',
    totalcgpa: '',
    currentsemester: '',
    Batch: '',
    presentaddress: {
      district: '',
      division: '',
      upozilla: '',
      village: '',
    },
    permanentaddress: {
      district: '',
      division: '',
      upozilla: '',
      village: '',
    },
    school: {
      previousdepartment: '',
      schoolname: '',
      sscresult: '',
    },
    college: {
      collegename: '',
      hscresult: '',
      previousdepartment: '',
    },
    semesters: {
      semesterName: '',
      subjects: [
        {
          faculty: '',
          subjectcode: '',
          subjectcredit: '',
          subjectgrade: '',
          subjectname: '',
        },
      ],
    },
    payment: {
      academicyear: '',
      admissionfee: '',
      admissionformfess: '',
      banking: '',
      completepayment: '',
      completesemester: '',
      idcardfee: '',
      permonth: '',
      permonthdue: '',
      persemetercompletepayment: '',
      semester: '',
      totaldue: '',
      totalpayment: '',
      waiver: '',
    },
  });

  // Update form state when student data is available
  useEffect(() => {
    if (studentById) {
      setFormData({
        studentname: studentById.studentname || '',
        studentprofile: studentById.studentprofile || '',
        email: studentById.email || '',
        phone: studentById.phone || '',
        dob: studentById.dob || '',
        nationality: studentById.nationality || '',
        religion: studentById.religion || '',
        fathername: studentById.fathername || '',
        mothername: studentById.mothername || '',
        desiredDepartment: studentById.desiredDepartment || '',
        totalcgpa: studentById.totalcgpa || '',
        currentsemester: studentById.currentsemester || '',
        Batch: studentById.Batch || '',
        presentaddress: studentById.presentaddress || { district: '', division: '', upozilla: '', village: '' },
        permanentaddress: studentById.permanentaddress || { district: '', division: '', upozilla: '', village: '' },
        school: studentById.school || { previousdepartment: '', schoolname: '', sscresult: '' },
        college: studentById.college || { collegename: '', hscresult: '', previousdepartment: '' },
        semesters: studentById.semesters || { semesterName: '', subjects: [{ faculty: '', subjectcode: '', subjectcredit: '', subjectgrade: '', subjectname: '' }] },
        payment: studentById.payment || {
          academicyear: '',
          admissionfee: '',
          admissionformfess: '',
          banking: '',
          completepayment: '',
          completesemester: '',
          idcardfee: '',
          permonth: '',
          permonthdue: '',
          persemetercompletepayment: '',
          semester: '',
          totaldue: '',
          totalpayment: '',
          waiver: '',
        },
      });
    }
  }, [studentById]);


  if (isLoading) return <p>Loading student details...</p>;
  if (error) return <p>Error fetching student details</p>;

  return (
    <div className="p-2 bg-gray-100 min-h-screen w-full h-screen overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-2">Update Student Information</h2>
      <PersonalInformation studentById={studentById}/>
      <AddressInformation studentById={studentById}/>
    </div>
  );
}
