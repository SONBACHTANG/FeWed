import HomeSlider from "./New/slider/slider.jsx"
import Footer from "../footer/footer.jsx"
import Category from "./New/category/category.jsx";
import Bestseller from "./New/bestseller/Bestseller.jsx";
import SearchTrends from "./New/SearchTrends/SearchTrends.jsx";
import React, { useState, useEffect } from 'react';
import { getAllCategories } from '../../Auth/Services/CategoryService.js';

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories(1, 200);
        if (response && response.errorCode === 200) {
          setCategories(response.content.data);
        } else {
          console.error('Failed to fetch categories');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <HomeSlider />
      <SearchTrends />
      <Bestseller />
      {categories.map(category => (
        <Category key={category.id} categoryId={category.id} categoryName={category.name} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;

