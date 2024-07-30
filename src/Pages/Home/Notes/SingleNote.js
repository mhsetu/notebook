import { TextField } from '@mui/material';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const SingleNote = () => {
  const [{ title, message, _id }] = useLoaderData();
  const [edit, setEdit] = useState(false);
  console.log(title);

  const handleUpdate = (event) => {
    event.preventDefault();
    // console.log(id);
    const title = event.target.title.value;
    const message = event.target.message.value;

    console.log(title, message);
    const value = {
      title,
      message,
    };
    // console.log(_id);
    fetch(`https://notebook-server-pi.vercel.app/note/${_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div
      className={`${
        edit
          ? ' min-h-[600px] bg-[#e9c46a] isolate  mx-16 my-16 rounded-md'
          : 'isolate  bg-gray-900 min-h-[600px]  mx-16 my-16 rounded-md'
      }`}
    >
      <div className='pt-10 pl-10'>
        <button
          onClick={() => setEdit(!edit)}
          className='flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
        >
          {edit ? <span>View</span> : <span>Edit</span>}
        </button>
      </div>
      <form onSubmit={handleUpdate}>
        <div className='mx-auto py-10'>
          <div className='mx-auto  max-w-2xl  gap-y-16'>
            <div className='mx-auto'>
              {edit ? (
                <TextField
                  className='w-full text-white'
                  name='title'
                  id='standard-basic'
                  label='Title'
                  variant='standard'
                  defaultValue={title}
                />
              ) : (
                <div>
                  <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
                    {title}
                  </h2>
                </div>
              )}

              <div className='mt-5 text-white'>
                {edit ? (
                  <TextField
                    className='w-full'
                    id='outlined-basic'
                    label='Message'
                    variant='outlined'
                    rows={8}
                    multiline
                    defaultValue={message}
                    name='message'
                  />
                ) : (
                  <p className='mt-4 text-lg leading-8 text-gray-300'>
                    {message}
                  </p>
                )}
              </div>
            </div>
            {edit ? (
              <div className='mt-5 '>
                <button
                  type='submit'
                  className='flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
                >
                  Save
                </button>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </form>
      <div
        className='absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6'
        aria-hidden='true'
      >
        <div className='aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30'></div>
      </div>
    </div>
  );
};

export default SingleNote;
