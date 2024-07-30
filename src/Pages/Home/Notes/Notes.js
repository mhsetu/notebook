import React, { useEffect, useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import Note from './Note';
import NoteModal from '../../NoteEditor/NoteModal/NoteModal';

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(`https://notebook-server-pi.vercel.app/note`)
      .then((res) => res.json())
      .then((data) => {
        setNotes(data);
        // console.log(data);
      });
  }, [setNotes, notes]);

  return (
    <div>
      <div className='my-10 flex justify-center items-center gap-3'>
        <p>Add a new note</p>
        <label htmlFor='noteModal' className='btn btn-ghost btn-outline'>
          <IoAdd className='text-3xl' />
        </label>
        <NoteModal></NoteModal>
      </div>
      <div className='grid grid-cols-3 gap-3 mx-16 '>
        {notes.map((note) => (
          <Note
            note={note}
            notes={notes}
            setNotes={setNotes}
            key={note._id}
          ></Note>
        ))}
      </div>
    </div>
  );
};

export default Notes;
