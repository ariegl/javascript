import React, {useState} from 'react'
import { pb } from '../libs/db.js';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Modal, Box, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Home() {
  const [data,setData] = useState(null);
  const [dataIsLoaded, setDataIsLoaded] = useState(false);
  const [modalState, setModalState] = useState({
    editUser: {
      open: false,
      element: null
    },
    deleteUser: false,
    addUser: false,
  })

  const pullData = async () => {
    pb.autoCancellation(false);
    const result = await pb.collection("examples").getFullList();
    setData(result);
    setDataIsLoaded(true);
    console.log("result:",result);
  }

  React.useEffect(() => {
    pullData();
  },[])

  const UsersList = () => {
    return (
      <ul className='bg-slate-300 px-3 py-3'>
        {data.map((element,index) => (
          <li className='bg-slate-500 grid grid-cols-3 gap-3 items-center mt-2 py-3' key={element.id}>
            <span className='ml-3'>{element.username}</span>
            <div className='flex justify-center'></div>
            <div className='flex justify-center'>
              <span onClick={() => {handleOpenEditUser(element)}} title="editar" className='bg-yellow-400 py-2 px-2 rounded-md cursor-pointer'><EditIcon/></span>
              <span title="eliminar" className='bg-red-800 py-2 px-2 ml-4 rounded-md cursor-pointer'><DeleteIcon/></span>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  const ModalEditUser = () => {
    const [username, setUsername] = useState(modalState.editUser.element.username);
    const id = modalState.editUser.element.id;

    const handleSaveEdit = async () => {

      const record = await pb.collection("examples").update(id, {
        username: username,
      })

      console.log("record:",record);
    }

    return (
    <Modal
      open={modalState.editUser}
      onClose={handleCloseEditUser}
    >
      <Box sx={style}>
        <h1 className='w-full mb-3 text-2xl'>Editar</h1>
        <TextField 
          sx={{width: "100%"}} 
          label="Username" 
          variant="outlined"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <Button 
          sx={{width: "100%", marginTop: "1rem"}} 
          variant="contained"
          onClick={handleSaveEdit}
        >
          GUARDAR
        </Button>
      </Box>
    </Modal>
    )
  }

  const handleOpenEditUser = (element) => {
    setModalState((prevState) => ({...prevState, editUser: {open: true, element: element}}));
  }

  const handleCloseEditUser = () => {
    setModalState((prevState) => ({...prevState, editUser: {open: false, element: null}}));
  }

  return (
    <div>
      {dataIsLoaded ? (<UsersList/>) : undefined}
      {modalState.editUser.open ? (<ModalEditUser/>) : undefined}
    </div>
  )
}

export default Home