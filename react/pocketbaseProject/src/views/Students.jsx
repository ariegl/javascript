import React, { useEffect } from 'react'
import { pb } from '../libs/db.js';

//EN ESTE EJEMPLO SE UTILIZA
//EXPAND: PARA TRAER LOS DATOS DE LOS CAMPOS CON RELACIONES EN LA BASE DE DATOS
//FIELDS: PARA TRAER SOLO LOS CAMPOS QUE NECESITAMOS
function Students() {
  const [students, setStudents] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const getData = async () => {
    pb.autoCancellation(false);
    const result = await pb.collection("students").getList(1,3, { expand: "courses", fields: "*, expand.courses.name" })
    setStudents(result.items);
    console.log("result:",result);
    setIsLoaded(true);
  }
  
  useEffect(() => {
    getData();
  },[])

  return (
    <div className='w-screen h-screen bg-slate-800'>
        {isLoaded ? students.map(element => (
            <div key={element.id}>
                <h1>{element.fullname}</h1>
                <ul className='ml-8'>
                    {element.expand.courses.map(course => (
                        <li key={course.id}>{course.name}</li>
                    ))}
                </ul>
            </div>
        )) : undefined}
    </div>
  )
}

export default Students