import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

function AddYourOwn() {
  return (
    <div className="card my-4">
      <div className="card-body">
        <h5 className="card-title d-flex align-items-center">
          <FaPlusCircle className="me-2" /> Add your own
        </h5>
        <p className="card-text">
          Are you a teacher or expert? Do you sell or rent out equipment, venue or event tickets? Or, you know someone who should be on hobbycue? Go ahead and Add your Own page.
        </p>
        <button className="btn btn-primary">Add new</button>
      </div>
    </div>
  );
}

export default AddYourOwn;
