import React, { useEffect } from 'react'
import { pb } from '../libs/db.js';
import DeleteIcon from '@mui/icons-material/Delete';

//EN ESTE EJEMPLO SE UTILIZA
//EXPAND: PARA TRAER LOS DATOS DE LOS CAMPOS CON RELACIONES EN LA BASE DE DATOS
//FIELDS: PARA TRAER SOLO LOS CAMPOS QUE NECESITAMOS
function Students() {
  const [students, setStudents] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const getData = async () => {
    pb.autoCancellation(false);
    const result = await pb.collection("students").getList(1,3, { expand: "courses", fields: "*, expand.courses.id, expand.courses.name" })
    setStudents(result.items);
    console.log("result:",result);
    setIsLoaded(true);
  }

  const handleDeleteCourse = async (references) => {
    pb.autoCancellation(false);
    const update = await pb.collection("students").update(references.studentId, {
        "courses-": references.courseId
    });

    let studentCopy = students[references.index];
    let newCoursesData = studentCopy.expand.courses.filter(course => course.id !== references.courseId);

    studentCopy = {...update, expand: {courses: newCoursesData}};

    let fullArray = students;
    fullArray[references.index] = studentCopy;

    setStudents(fullArray);

    console.log("data remove course:",fullArray);
    console.log("update:",update);
  }
  
  useEffect(() => {
    getData();
  },[])

  return (
    <div className='w-screen h-screen bg-slate-800'>
        {isLoaded ? students.map((student, studentIndex) => (
            <div key={student.id}>
                <h1>{student.fullname}</h1>
                <ul className='ml-8'>
                    {student.expand.courses.map(course => (
                        <li key={course.id} className='grid grid-cols-4'>
                            <span className='col-span-3'>{course.name}</span>
                            <button onClick={() => {handleDeleteCourse({studentId:student.id, courseId: course.id, index: studentIndex})}} className='col-span-1'><DeleteIcon/></button>
                        </li>
                    ))}
                </ul>
            </div>
        )) : undefined}
    </div>
  )
}

export default Students