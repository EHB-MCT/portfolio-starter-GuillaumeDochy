import React, { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const ModalContainer = styled.div`
  background: #fff;
  padding: 1em;
  max-width: 100%;
  max-height: 100%;
  width: 38em;
`;

const ModalHeader = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FormField = styled.div`
  margin-bottom: 1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  background: #007BFF;
  color: #fff;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #888;
`;

const EventFormModal = ({ isOpen, onRequestClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [priority, setPriority] = useState('low');

  const handleSubmit = () => {
    onSubmit({ title, description, start, end, priority });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Add Event"
      style={{
        overlay: {
          zIndex: 9999,
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          padding: '0',
          border: '1px solid #ccc',
          height: '30em'
        },
      }}
    >
      <CloseButton onClick={onRequestClose}>X</CloseButton>
      <ModalContainer>
        <ModalHeader>Add Event</ModalHeader>
        <FormField>
          <Input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormField>
        <FormField>
          <Input
            type="text"
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormField>
        <FormField>
          <DatePicker
            selected={start}
            onChange={(date) => setStart(date)}
            showTimeSelect
            dateFormat="Pp"
            placeholderText="Start Date and Time"
          />
        </FormField>
        <FormField>
          <DatePicker
            selected={end}
            onChange={(date) => setEnd(date)}
            showTimeSelect
            dateFormat="Pp"
            placeholderText="End Date and Time"
          />
        </FormField>
        <FormField>
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </Select>
        </FormField>
        <FormField>
          <Button onClick={handleSubmit}>Add Event</Button>
        </FormField>
      </ModalContainer>
    </Modal>
  );
};

export default EventFormModal;