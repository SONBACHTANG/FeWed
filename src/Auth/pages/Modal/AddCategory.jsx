import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import "./AddModal.scss";
import { CreateCategory, EditCategory } from '../../Services/CategoryService';

Modal.setAppElement('#root');

const AddCategoryModal = ({ isOpen, onRequestClose, onCategoryAdded, categoryToEdit }) => {
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        setIsMounted(true);
        if (categoryToEdit) {
            setName(categoryToEdit.name);
            setImage(categoryToEdit.image);
        } else {
            setName('');
            setImage('');
        }
        return () => {
            setIsMounted(false);
        };
    }, [categoryToEdit]);

    const handleSaveCategory = async () => {
        if (!name) {
            alert('Name is required.');
            return;
        }

        try {
            if (categoryToEdit) {
                await EditCategory({
                    id: categoryToEdit.id,
                    name: name,
                    images: image,
                });
            } else {
                await CreateCategory({
                    name: name,
                    images: image,
                });
            }
            if (isMounted) {
                onRequestClose();
                onCategoryAdded();
            }
        } catch (error) {
            if (isMounted) {
                console.error('Error saving category:', error);
                alert('An error occurred while saving the category.');
            }
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (isMounted) {
                    setImage(reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel={categoryToEdit ? "Edit Category" : "Add Category"}
        >
            <h2>{categoryToEdit ? "Edit Category" : "Add New Category"}</h2>
            <form>
                <div className='form-group'>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Image:</label>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {categoryToEdit && image && (
                        <div>
                            <p>Current Image:</p>
                            <img src={image} alt="Current" style={{ height: 100 }} />
                        </div>
                    )}
                </div>
                <div className="modal-buttons">
                    <button type="button" onClick={handleSaveCategory} className="add-button">
                        {categoryToEdit ? "Save Changes" : "Add Category"}
                    </button>
                </div>
            </form>
            <button onClick={onRequestClose}>Close</button>
        </Modal>
    );
};

export default AddCategoryModal;
