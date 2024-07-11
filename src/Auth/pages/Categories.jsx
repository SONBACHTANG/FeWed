import React, { useState, useEffect } from 'react';
import AddCategoryModal from './Modal/AddCategory';
import './Button.scss';
import './Table.scss';
import { getAllCategories, DeleteCategory } from '../Services/CategoryService';
import Paging from '../components/paging/paging';

const Categories = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [categoryToEdit, setCategoryToEdit] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [pageCount, setPageCount] = useState(1);

    useEffect(() => {
        fetchCategories();
    }, [currentPage, pageSize]);

    const fetchCategories = async () => {
        try {
            const response = await getAllCategories(currentPage, pageSize);
            if (response && response.errorCode === 200) {
                setCategories(response.content.data);
                setPageCount(response.content.totalPages);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleDeleteCategory = async (categoryId) => {
        try {
            var arrayId = [categoryId]
            await DeleteCategory(arrayId);
            await fetchCategories();
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    const handleEditCategory = (category) => {
        setCategoryToEdit(category);
        setModalIsOpen(true);
    };

    const openModal = () => {
        setCategoryToEdit(null);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleChangePage = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    return (
        <div className='container' style={{ position: 'absolute', top: '20%', left: "22%" }}>
            <div className='header'>
                <h3>Categories</h3>
                <button className='button' onClick={openModal}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
            <div className='content'>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories && categories.map((item, index) => (
                            <tr key={item.id} className='data'>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td><img style={{ height: 50 }} src={item.image} alt={item.name} /></td>
                                <td>
                                    <button
                                        onClick={() => handleEditCategory(item)}
                                        className='btn-edit'><i className="fas fa-pen-square"></i></button>
                                    <button
                                        onClick={() => handleDeleteCategory(item.id.toString())}
                                        className='btn-delete'><i className="fas fa-trash"></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <AddCategoryModal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    onCategoryAdded={fetchCategories}
                    categoryToEdit={categoryToEdit}
                />

            </div>
            {categories.length > 0 &&
                <Paging
                    pageIndex={currentPage}
                    pageSize={pageSize}
                    pageCount={pageCount}
                    changePage={handleChangePage}
                />
            }
        </div>
    );
};

export default Categories;
