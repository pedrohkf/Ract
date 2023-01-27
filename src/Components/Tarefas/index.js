import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Tarefas.css';

export default function Tarefas({ tarefas, handleEdit, handleDelete }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <div>
            <FaEdit className="edit" onClick={(e) => handleEdit(e, index)} />
            <FaWindowClose
              className="delete"
              onClick={(e) => handleDelete(e, index)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequered,
  handleEdit: PropTypes.func.isRequered,
  handleDelete: PropTypes.func.isRequered,
};
