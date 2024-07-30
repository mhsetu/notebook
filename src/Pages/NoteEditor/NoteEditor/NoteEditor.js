import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { json } from 'react-router-dom';

const NoteEditor = () => {
  //   const [value, setValue] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;

    const title = from.title.value;
    const message = from.message.value;
    console.log(title, message);

    const note = {
      title,
      message,
    };
    // setValue(notes);
    // localStorage.setItem('note', JSON.stringify(value));

    fetch('https://notebook-server-pi.vercel.app/notes', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(note),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    from.reset();

    // console.log(from.title.value);
  };
  //   console.log(value);
  return (
    <div className='mx-4 mt-3'>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <TextField
            type='text'
            name='title'
            className='w-full'
            id='filled-basic'
            label='Title'
            variant='standard'
          />
        </div>
        <div>
          <div className='form-control mt-5'>
            <TextField
              type='text'
              name='message'
              className='w-full'
              id='outlined-multiline-static'
              label='Message'
              multiline
              rows={8}
            />
          </div>
        </div>
        {/* The button to open modal */}
        <div className='modal-action'>
          <button>
            <label
              htmlFor='noteModal'
              type='submit'
              className='btn btn-success text-white mx-4 mb-4'
            >
              Submit
            </label>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NoteEditor;
