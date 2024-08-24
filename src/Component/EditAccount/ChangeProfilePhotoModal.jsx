import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, Button, Input, Select } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { updateProfilePhotoAction } from '../../Redux/User/Action'; // Import your action

export const ChangeProfilePhotoModal = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const dispatch = useDispatch();

  const onDrop = (acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      const formData = new FormData();
      formData.append('profilePhoto', selectedFile);
      formData.append('name', name);
      formData.append('mobile', mobile);
      formData.append('gender', gender);
      dispatch(updateProfilePhotoAction(formData)); // Dispatch the action to update profile photo and additional details
      onClose(); // Close the modal after submission
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">Change Profile Photo</h2>
            <div {...getRootProps({ className: 'dropzone' })} className="border-2 border-dashed border-gray-300 p-4 rounded-lg text-center">
              <input {...getInputProps()} />
              {selectedFile ? (
                <div>
                  <img src={URL.createObjectURL(selectedFile)} alt="Selected" className="w-full h-auto rounded-md" />
                </div>
              ) : (
                <p>Drag 'n' drop a file here, or click to select one</p>
              )}
            </div>
            <div className="mt-4">
              <Input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                mb={4}
              />
              <Input
                placeholder="Mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                mb={4}
              />
              <Select
                placeholder="Select gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                mb={4}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </Select>
            </div>
            <div className="flex justify-end mt-4">
              <Button colorScheme="blue" onClick={handleSubmit} isDisabled={!selectedFile}>
                Save Changes
              </Button>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChangeProfilePhotoModal;
