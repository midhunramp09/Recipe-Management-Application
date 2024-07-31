// src/components/addEditRecipePage/AddEditRecipePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipe } from '../../services/contexts/RecipeContext';
import '../../assets/styles/AddEditRecipe.css';
import { createRecipe, updateRecipe } from '../../apis/RecipeApiCalls';

const AddEditRecipePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { selectedRecipe, setSelectedRecipe } = useRecipe();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [date, setDate] = useState('');

    const [errors, setErrors] = useState({
        title: '',
        category: '',
        ingredients: '',
        instructions: '',
        date: ''
    });

    useEffect(() => {
        if (id && selectedRecipe) {
            setTitle(selectedRecipe.title);
            setCategory(selectedRecipe.category);
            setIngredients(selectedRecipe.ingredients.join(', '));
            setInstructions(selectedRecipe.instructions.join(', '));
            setDate(selectedRecipe.date);
        }
    }, [id, selectedRecipe]);

    const validateForm = () => {
        let valid = true;
        const newErrors = {
            title: '',
            category: '',
            ingredients: '',
            instructions: '',
            date: ''
        };

        if (!title) {
            newErrors.title = 'Title is required';
            valid = false;
        }

        if (!category) {
            newErrors.category = 'Category is required';
            valid = false;
        }

        if (!ingredients) {
            newErrors.ingredients = 'Ingredients are required';
            valid = false;
        }

        if (!instructions) {
            newErrors.instructions = 'Instructions are required';
            valid = false;
        }

        if (!date) {
            newErrors.date = 'Date is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSave = () => {
        if (!validateForm()) {
            return;
        }

        const updatedRecipe = {
            title,
            category,
            ingredients: ingredients.split(', '),
            instructions: instructions.split(', '),
            date
        };

        if (id) {
            updateRecipe(id, updatedRecipe)
                .then(response => {
                    console.log('Recipe updated:', response.data);
                    setSelectedRecipe(null);
                    navigate('/dashboard');
                })
                .catch(error => console.error('Error updating recipe:', error));
        } else {
            createRecipe(updatedRecipe)
                .then(response => {
                    console.log('Recipe saved:', response.data);
                    setSelectedRecipe(null);
                    navigate('/dashboard');
                })
                .catch(error => console.error('Error saving recipe:', error));
        }
    };

    const handleCancel = () => {
        setSelectedRecipe(null);
        navigate('/dashboard');
    };

    return (
        <div className="recipe-form">
            <div className="form-group">
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && <p className="error-message">{errors.title}</p>}
            </div>
            <div className="form-group">
                <label>Category:</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />
                {errors.category && <p className="error-message">{errors.category}</p>}
            </div>
            <div className="form-group">
                <label>Ingredients:</label>
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
                {errors.ingredients && <p className="error-message">{errors.ingredients}</p>}
            </div>
            <div className="form-group">
                <label>Instructions:</label>
                <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
                {errors.instructions && <p className="error-message">{errors.instructions}</p>}
            </div>
            <div className="form-group">
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                {errors.date && <p className="error-message">{errors.date}</p>}
            </div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default AddEditRecipePage;
