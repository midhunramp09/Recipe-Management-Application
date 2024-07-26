import React, { createContext, useState, useContext } from 'react';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    return (
        <RecipeContext.Provider value={{ selectedRecipe, setSelectedRecipe }}>
            {children}
        </RecipeContext.Provider>
    );
};

export const useRecipe = () => useContext(RecipeContext);
