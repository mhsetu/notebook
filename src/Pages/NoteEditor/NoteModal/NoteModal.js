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
          {/* <div className='modal-action'>
            <label
              htmlFor='noteModal'
              className='btn btn-success text-white mx-4 mb-4'
            >
              Submit
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NoteModal;
