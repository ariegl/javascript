import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const firstForm = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',

    },
    validationSchema: Yup.object({
      firstName: Yup.string()
      .max(15, 'Maximo 15 caracteres'),
      lastName: Yup.string()
      .max(20, 'Maximo 20 caracteres')
      .required('Lastname es requerido'),
      email: Yup.string().email('Direccion email invalida').required('El campo email es requerido'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values,null,2));
    },
  });

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <form onSubmit={firstForm.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={firstForm.handleChange}
          onBlur={firstForm.handleBlur}
          value={firstForm.values.firstName}/>
          {firstForm.touched.firstName && firstForm.errors.firstName ? (
            <div>{firstForm.errors.firstName}</div>
          ) : null}
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" type="text" {...firstForm.getFieldProps('lastName')} />
          {firstForm.touched.lastName && firstForm.errors.lastName ? (
            <div>{firstForm.errors.lastName}</div>
          ) : null}
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" {...firstForm.getFieldProps('email')} />
          {firstForm.touched.email && firstForm.errors.email ? (
            <div>{firstForm.errors.email}</div>
          ) : null}
    
          <button type="submit">Submit</button>
      </form>
    </main>
  )
}
