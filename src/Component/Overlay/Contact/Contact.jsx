import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Button from '../Shared/CustomizedButton';
import AnimatedFadeIn from '../../Animation/AnimatedFadeIn';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const sendEmail = (event) => {
    setLoading(true);
    event.preventDefault();
    emailjs.sendForm('service_z0f74wi', 'template_hycqo5h', form.current, 'QMzbq2FyRcp7tv59T')
      .then((result) => {
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setLoading(false);
        toast.success('Message sent successfully');
      }, (error) => {
        toast.error('Failed to send message');
        setLoading(false);
      });
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const theme = createTheme({
    components: {
      MuiFormLabel: {
        styleOverrides: {
          asterisk: { opacity: 0 },
        },
      },
    },

  });
  return (
    <AnimatedFadeIn>
      <div className='flex justify-center items-center h-[calc(100%-52.7px)] md:h-full px-4'>
        <Box
          component="form"
          ref={form}
          autoComplete="off"
          onSubmit={sendEmail}
          className=' bg-white bg-opacity-90 flex-col flex rounded-3xl p-4 w-full sm:w-1/2 max-w-96 sm:max-w-md'
        >
          <ThemeProvider theme={theme}>
            <TextField className='!my-2' id="filled-basic" type='text' required name='from_name' label="Name" variant="standard" value={formData.name} onInput={handleChange} />
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <TextField required className='!my-2' id="filled-basic" type='email' name='from_email' label="E-mail " variant="standard" value={formData.email} onInput={handleChange} />
          </ThemeProvider>
          <ThemeProvider theme={theme}>
            <TextField required className='!my-2' id="filled-multiline-basic" label="Message" multiline maxRows={3} name='message' variant="standard" value={formData.message} onInput={handleChange} />
          </ThemeProvider>
          <button type='submit' disabled={loading} className="flex justify-end">
            <Button icon={faPaperPlane} />
          </button>
        </Box>
      </div>
    </AnimatedFadeIn>
  );
};

export default Contact;
