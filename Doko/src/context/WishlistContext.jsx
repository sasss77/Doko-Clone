import React, { createContext, useContext, useReducer, useEffect } from 'react';

const WishlistContext = createContext();

const wishlistReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_WISHLIST':
            const exists = state.items.find(item => item.id === action.payload.id);
            if (exists) return state;

            return {
                ...state,
                items: [...state.items, { ...action.payload, addedAt: new Date().toISOString() }]
            };

        case 'REMOVE_FROM_WISHLIST':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };

        case 'CLEAR_WISHLIST':
            return { ...state, items: [] };

        case 'MOVE_TO_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload)
            };

        default:
            return state;
    }
};

const initialState = {
    items: []
};

export const WishlistProvider = ({ children }) => {
    const [state, dispatch] = useReducer(wishlistReducer, initialState);

    useEffect(() => {
        // Load wishlist from localStorage on mount
        const savedWishlist = localStorage.getItem('doko_wishlist');
        if (savedWishlist) {
            const wishlistData = JSON.parse(savedWishlist);
            wishlistData.items.forEach(item => {
                dispatch({ type: 'ADD_TO_WISHLIST', payload: item });
            });
        }
    }, []);

    useEffect(() => {
        // Save wishlist to localStorage whenever it changes
        localStorage.setItem('doko_wishlist', JSON.stringify(state));
    }, [state]);

    const addToWishlist = (product) => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: product });

        // Show notification
        const event = new CustomEvent('showNotification', {
            detail: {
                type: 'success',
                message: `${product.name} added to wishlist! ❤️`,
                duration: 3000
            }
        });
        window.dispatchEvent(event);
    };

    const removeFromWishlist = (productId) => {
        dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: productId });
    };

    const clearWishlist = () => {
        dispatch({ type: 'CLEAR_WISHLIST' });
    };

    const moveToCart = (productId) => {
        dispatch({ type: 'MOVE_TO_CART', payload: productId });
    };

    const isInWishlist = (productId) => {
        return state.items.some(item => item.id === productId);
    };

    const getWishlistCount = () => {
        return state.items.length;
    };

    const value = {
        wishlistItems: state.items,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        moveToCart,
        isInWishlist,
        getWishlistCount
    };

    return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
};

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) {
        throw new Error('useWishlist must be used within a WishlistProvider');
    }
    return context;
};

export { WishlistContext };
