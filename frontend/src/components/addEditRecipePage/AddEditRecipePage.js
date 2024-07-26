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

    useEffect(() => {
        if (id && selectedRecipe) {
            setTitle(selectedRecipe.title);
            setCategory(selectedRecipe.category);
            setIngredients(selectedRecipe.ingredients.join(', '));
            setInstructions(selectedRecipe.instructions.join(', '));
            setDate(selectedRecipe.date);
        }
    }, [id, selectedRecipe]);

    const handleSave = () => {
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
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Category:</label>
                <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Ingredients:</label>
                <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Instructions:</label>
                <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} />
            </div>
            <div className="form-group">
                <label>Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default AddEditRecipePage;
