import React from 'react';
import NoteEditor from '../NoteEditor/NoteEditor';

const NoteModal = () => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type='checkbox' id='noteModal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <label
            htmlFor='noteModal'
            className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
          >
            ✕
          </label>
          <NoteEditor />
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
