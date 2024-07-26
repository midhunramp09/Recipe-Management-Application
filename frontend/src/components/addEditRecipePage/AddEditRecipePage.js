import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecipe } from '../../services/contexts/RecipeContext';
import '../../assets/styles/AddEditRecipe.css';

const AddEditRecipePage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { selectedRecipe, setSelectedRecipe } = useRecipe();

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const [instructions, setInstructions] = useState([]);
    const [date, setDate] = useState('');

    useEffect(() => {
        if (id && selectedRecipe) {
            setTitle(selectedRecipe.title);
            setCategory(selectedRecipe.category);
            setIngredients(selectedRecipe.ingredients || []);
            setInstructions(selectedRecipe.instructions || []);
            setDate(selectedRecipe.date);
        }
    }, [id, selectedRecipe]);

    const handleSave = () => {
        const updatedRecipe = {
            id: parseInt(id),
            title,
            category,
            ingredients: ingredients, // Directly using array
            instructions: instructions, // Directly using array
            date
        };
        console.log("Save recipe:", updatedRecipe);
        setSelectedRecipe(null);
        navigate('/dashboard');
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
                <label>Ingredients (comma-separated):</label>
                <textarea
                    value={ingredients.join(',')} // Join array to display as a string
                    onChange={(e) => setIngredients(e.target.value.split(','))} // Split string to array
                />
            </div>
            <div className="form-group">
                <label>Instructions (comma-separated):</label>
                <textarea
                    value={instructions.join(',')} // Join array to display as a string
                    onChange={(e) => setInstructions(e.target.value.split(','))} // Split string to array
                />
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
