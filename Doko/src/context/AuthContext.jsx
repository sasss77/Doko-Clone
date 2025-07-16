import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return { ...state, isLoading: true, error: null };
    case 'LOGIN_SUCCESS':
      return { 
        ...state, 
        isLoading: false, 
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
        error: null 
      };
    case 'LOGIN_FAILURE':
      return { 
        ...state, 
        isLoading: false, 
        error: action.payload,
        isAuthenticated: false 
      };
    case 'LOGOUT':
      return { 
        ...state, 
        user: null, 
        token: null, 
        isAuthenticated: false,
        error: null 
      };
    case 'UPDATE_PROFILE':
      return { 
        ...state, 
        user: { ...state.user, ...action.payload } 
      };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
};

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
  isLoading: false,
  error: null
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    // Check for stored auth data on mount
    const storedUser = localStorage.getItem('doko_user');
    const storedToken = localStorage.getItem('doko_token');
    
    if (storedUser && storedToken) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: JSON.parse(storedUser),
          token: storedToken
        }
      });
    }
  }, []);

  const login = async (email, password, role = 'customer', rememberMe = false) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data based on role
      const mockUser = {
        id: `${role}_${Date.now()}`,
        email,
        role,
        firstName: role === 'customer' ? 'राम' : role === 'seller' ? 'सीता' : 'Admin',
        lastName: role === 'customer' ? 'Sharma' : role === 'seller' ? 'Tamang' : 'User',
        avatar: null,
        createdAt: new Date().toISOString(),
        isVip: role === 'customer' && email.includes('vip'),
        preferences: {
          newsletter: true,
          smsNotifications: false,
          emailNotifications: true,
          orderUpdates: true
        }
      };
      
      const mockToken = `doko_token_${Date.now()}`;
      
      // Store auth data
      if (rememberMe) {
        localStorage.setItem('doko_user', JSON.stringify(mockUser));
        localStorage.setItem('doko_token', mockToken);
      } else {
        sessionStorage.setItem('doko_user', JSON.stringify(mockUser));
        sessionStorage.setItem('doko_token', mockToken);
      }
      
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: mockUser, token: mockToken }
      });
      
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: 'Invalid credentials. Please try again.'
      });
    }
  };

  const register = async (userData) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful registration
      console.log('Registration successful:', userData);
      
    } catch (error) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: 'Registration failed. Please try again.'
      });
    }
  };

  const logout = () => {
    localStorage.removeItem('doko_user');
    localStorage.removeItem('doko_token');
    sessionStorage.removeItem('doko_user');
    sessionStorage.removeItem('doko_token');
    
    dispatch({ type: 'LOGOUT' });
  };

  const updateProfile = async (profileData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      dispatch({
        type: 'UPDATE_PROFILE',
        payload: profileData
      });
      
      // Update stored user data
      const updatedUser = { ...state.user, ...profileData };
      localStorage.setItem('doko_user', JSON.stringify(updatedUser));
      
    } catch (error) {
      throw new Error('Profile update failed');
    }
  };

  const changePassword = async (currentPassword, newPassword) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock password change
      console.log('Password changed successfully');
      
    } catch (error) {
      throw new Error('Password change failed');
    }
  };

  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  const value = {
    ...state,
    login,
    register,
    logout,
    updateProfile,
    changePassword,
    clearError
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthContext };
