import React from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';

const Note = ({ note, notes, setNotes }) => {
  const { title, message, _id } = note;

  const handleDelete = (id) => {
    fetch(`https://notebook-server-pi.vercel.app/note/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert('Deleted Successfully');
          const remaining = notes?.filter((not) => not?._id !== id);
          setNotes(remaining);
        }
      });
  };

  // useEffect(() => {}, [_id]);

  return (
    <div>
      <div className=' bg-[#f6bd60] w-56 h-[200px] shadow-md rounded mb-4'>
        <button onClick={() => handleDelete(_id)} className='p-3 '>
          <MdDelete color='#669bbc' fontSize='40px' />
        </button>
        <Link to={`/note/${_id}`}>
          <div className='mt-5 ml-5'>
            <h2 className='card-title text-[#ffffff]'>
              {title?.length > 15 ? title?.slice(0, 15) + '...' : title}
            </h2>
            <p>
              {message?.length > 30 ? message?.slice(0, 30) + '...' : message}
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Note;
