import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Field, Form, Formik } from 'formik';

const MyInput = ({ field, form, ...props }) => {
  return <input {...field} {...props} />;
};

function App() {
  const [count, setCount] = useState(0)
  //const [location, setLocation] = useState({})

  const handleGetLocation = (props) => {
    const {setFieldValue} = props;
    //setLocation({latitude: 24.45435, longitude: -110.45424});
    setFieldValue("firstName","TEEEEST");
    setFieldValue("lastName","TeSt LaStNaMe");
  }

  return (
    <div>
     <h1>Formulario con <span style={{color: "rgb(150,0,0)"}}> REACT FORMIK</span></h1>
     <p>Este ejemplo establece el valor al componente Field al presionar un boton</p>
     <Formik
       initialValues={{ lastName: '', firstName: ''}}
       onSubmit={(values, actions) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           actions.setSubmitting(false);
         }, 1000);
       }}
     >
       {(props) => (
         <Form>
           <Field name="firstName" placeholder="first Name" />
           <Field name="lastName" placeholder="last Name" />
           <button type="button" onClick={() => {handleGetLocation(props)}}>SET VALUE</button>
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
  )
}

export default App
