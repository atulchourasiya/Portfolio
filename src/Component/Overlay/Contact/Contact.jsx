import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Buttom from '../Shared/CustomizedButton';
import AnimatedFadeIn from '../../Animation/AnimatedFadeIn';

const Contact = () => {
  return (
    <AnimatedFadeIn>
      <div className='flex justify-center items-center h-full px-4'>
        <Box
          component="form"
          autoComplete="off"
          className=' bg-white bg-opacity-90 flex-col flex rounded-3xl p-4 w-full sm:w-1/2 max-w-96 sm:max-w-md'
        >
          <TextField className='!my-2' id="filled-basic" type='text' label="Name" variant="standard" />
          <TextField className='!my-2' id="filled-basic" type='email' label="E-mail " variant="standard" />
          <TextField className='!my-2' id="filled-basic" type='text' label="Subject" variant="standard" />
          <TextField className='!my-2' id="filled-multiline-flexible" label="Message" multiline maxRows={6} variant="standard" />
          <div className="flex justify-end">
            <Buttom icon={faPaperPlane} />
          </div>
        </Box>
      </div>
    </AnimatedFadeIn>
  );
};

export default Contact;
