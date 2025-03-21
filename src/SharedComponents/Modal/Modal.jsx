import React,{useState,useEffect,} from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './Modal.css';
import CustomInput from '../Input/CustomInput';
import DropDown from '../DropDown/DropDown';
import Button from '../Button/Button';
import { useFavContext } from '../../Context/FavContext/FavContext';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  bgcolor: 'background.paper',
  borderRadius:'5px',
  boxShadow: 24,
  p: 4,
};

export default function ModalComponent({openModel,setEditCharacter,characterName,height,gender}) {

    const [updateHeight,setUpdateHeight]=useState(height);
    const [updateGender,setUpdateGender]=useState(gender);
    const {updateCharacter}=useFavContext();


  const handleClose=()=>{
    setEditCharacter(false);
  }

  const handleConfirm=()=>{
    updateCharacter(characterName,updateHeight,updateGender);
    handleClose();
  }

  const options = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "n/a", label: "N/A" },
  ];

  return (
    <div>
      <Modal
        open={openModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <h3 className='modal-character-name'>{`Edit ${characterName}`}</h3>
         <CustomInput type='number' onChange={(e)=>setUpdateHeight(e.target.value)} value={updateHeight}  placeholder='Enter Character Height' label={'Height'}/>
         <DropDown label={'Gender'} onChange={(e)=>setUpdateGender(e.target.value)} value={updateGender} placeholder='Select Gender' options={options}/>
         <Button className='modal-confirm-btn' onClick={handleConfirm}>Confirm</Button>
         <Button className='modal-cancel-btn' onClick={handleClose}>Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}
