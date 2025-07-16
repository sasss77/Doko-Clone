import React, { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { 
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
  Squares2X2Icon,
  ListBulletIcon,
  FunnelIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import ProductGrid from '../components/product/ProductGrid';
import CategoryFilter from '../components/product/CategoryFilter';
import LoadingSpinner from '../components/common/LoadingSpinner';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import Dropdown from '../components/ui/Dropdown';

const ProductListingPage = () => {
  const { category } = useParams();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalProducts, setTotalProducts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [gridColumns, setGridColumns] = useState(4);
  
  const [filters, setFilters] = useState({
    category: category || '',
    priceRange: [0, 50000],
    rating: '',
    availability: '',
    sortBy: 'relevance',
    search: ''
  });

  // Category information
  const categoryInfo = {
    'musical-instruments': {
      name: 'Musical Instruments',
      nepaliName: 'संगीत वाद्ययन्त्र',
      description: 'Authentic traditional Nepali musical instruments crafted by skilled artisans',
      icon: '🎵',
      color: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50'
    },
    'handicrafts': {
      name: 'Handicrafts',
      nepaliName: 'हस्तकला',
      description: 'Beautiful handmade crafts representing Nepal\'s artistic heritage',
      icon: '🎨',
      color: 'from-blue-500 to-purple-500',
      bgColor: 'bg-blue-50'
    },
    'grocery': {
      name: 'Nepali Grocery',
      nepaliName: 'नेपाली किराना',
      description: 'Traditional Nepali food items and organic produce',
      icon: '🥘',
      color: 'from-green-500 to-teal-500',
      bgColor: 'bg-green-50'
    },
    'tools-crafts': {
      name: 'Tools & Crafts',
      nepaliName: 'औजार र शिल्प',
      description: 'Traditional tools and utility items for daily use',
      icon: '🔧',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-50'
    },
    'clothing': {
      name: 'Traditional Clothing',
      nepaliName: 'परम्परागत पोशाक',
      description: 'Authentic Nepali traditional clothing and accessories',
      icon: '👘',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    }
  };

  const currentCategory = categoryInfo[category] || {
    name: 'All Products',
    nepaliName: 'सबै उत्पादनहरू',
    description: 'Browse all authentic Nepali products',
    icon: '🛍️',
    color: 'from-red-500 to-blue-500',
    bgColor: 'bg-gradient-to-r from-red-50 to-blue-50'
  };

  // Mock product data
  const mockProducts = [
    {
      id: 1,
      name: 'Handcrafted Sarangi',
      price: 15000,
      originalPrice: 18000,
      image: '/api/placeholder/300/300',
      rating: 4.8,
      reviewCount: 24,
      category: 'musical-instruments',
      isNew: true,
      isAuthentic: true,
      stock: 5,
      description: 'Traditional Nepali string instrument',
      emoji: '🎻'
    },
    {
      id: 2,
      name: 'Traditional Doko Basket',
      price: 2500,
      image: '/api/placeholder/300/300',
      rating: 4.9,
      reviewCount: 31,
      category: 'tools-crafts',
      isAuthentic: true,
      stock: 12,
      description: 'Handwoven bamboo basket',
      emoji: '🧺'
    },
    {
      id: 3,
      name: 'Handwoven Dhaka Topi',
      price: 1200,
      originalPrice: 1500,
      image: '/api/placeholder/300/300',
      rating: 4.7,
      reviewCount: 18,
      category: 'clothing',
      isAuthentic: true,
      stock: 8,
      description: 'Traditional Nepali cap',
      emoji: '🧢'
    },
    {
      id: 4,
      name: 'Authentic Khukuri',
      price: 8000,
      image: '/api/placeholder/300/300',
      rating: 5.0,
      reviewCount: 42,
      category: 'tools-crafts',
      isAuthentic: true,
      stock: 3,
      description: 'Traditional Nepali knife',
      emoji: '🗡️'
    },
    {
      id: 5,
      name: 'Thanka Painting',
      price: 12000,
      image: '/api/placeholder/300/300',
      rating: 4.9,
      reviewCount: 15,
      category: 'handicrafts',
      isAuthentic: true,
      stock: 7,
      description: 'Traditional Buddhist art',
      emoji: '🖼️'
    },
    {
      id: 6,
      name: 'Organic Nepali Honey',
      price: 800,
      image: '/api/placeholder/300/300',
      rating: 4.6,
      reviewCount: 28,
      category: 'grocery',
      isAuthentic: true,
      stock: 15,
      description: 'Pure mountain honey',
      emoji: '🍯'
    },
    {
      id: 7,
      name: 'Madal Drum',
      price: 4500,
      image: '/api/placeholder/300/300',
      rating: 4.8,
      reviewCount: 19,
      category: 'musical-instruments',
      isAuthentic: true,
      stock: 6,
      description: 'Traditional percussion instrument',
      emoji: '🥁'
    },
    {
      id: 8,
      name: 'Daura Suruwal Set',
      price: 6500,
      image: '/api/placeholder/300/300',
      rating: 4.7,
      reviewCount: 22,
      category: 'clothing',
      isAuthentic: true,
      stock: 9,
      description: 'Traditional Nepali formal wear',
      emoji: '👔'
    }
  ];

  // Get search query from URL
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search') || '';
    
    setFilters(prev => ({
      ...prev,
      search: searchTerm,
      category: category || ''
    }));
  }, [category, location.search]);

  // Load products based on filters
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      
      // Filter products based on current filters
      let filteredProducts = mockProducts;
      
      // Filter by category
      if (filters.category) {
        filteredProducts = filteredProducts.filter(p => p.category === filters.category);
      }
      
      // Filter by search term
      if (filters.search) {
        filteredProducts = filteredProducts.filter(p => 
          p.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          p.description.toLowerCase().includes(filters.search.toLowerCase())
        );
      }
      
      // Filter by price range
      filteredProducts = filteredProducts.filter(p => 
        p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
      );
      
      // Filter by rating
      if (filters.rating) {
        filteredProducts = filteredProducts.filter(p => p.rating >= parseFloat(filters.rating));
      }
      
      // Filter by availability
      if (filters.availability === 'in-stock') {
        filteredProducts = filteredProducts.filter(p => p.stock > 0);
      } else if (filters.availability === 'out-of-stock') {
        filteredProducts = filteredProducts.filter(p => p.stock === 0);
      }
      
      // Sort products
      switch (filters.sortBy) {
        case 'price-low':
          filteredProducts.sort((a, b) => a.price - b.price);
          break;
        case 'price-high':
          filteredProducts.sort((a, b) => b.price - a.price);
          break;
        case 'rating':
          filteredProducts.sort((a, b) => b.rating - a.rating);
          break;
        case 'newest':
          filteredProducts.sort((a, b) => b.isNew - a.isNew);
          break;
        case 'popular':
          filteredProducts.sort((a, b) => b.reviewCount - a.reviewCount);
          break;
        default:
          // relevance - keep original order
          break;
      }
      
      setTimeout(() => {
        setProducts(filteredProducts);
        setTotalProducts(filteredProducts.length);
        setLoading(false);
      }, 500);
    };

    loadProducts();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const handleLoadMore = () => {
    // Simulate loading more products
    setCurrentPage(prev => prev + 1);
  };

  const getBreadcrumbs = () => {
    const breadcrumbs = [
      { name: 'Home', path: '/' },
      { name: 'Categories', path: '/categories' }
    ];
    
    if (category) {
      breadcrumbs.push({ name: currentCategory.name, path: `/products/${category}` });
    }
    
    return breadcrumbs;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm">
            {getBreadcrumbs().map((crumb, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-gray-400">/</span>}
                <Link
                  to={crumb.path}
                  className={`${
                    index === getBreadcrumbs().length - 1
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-600 hover:text-red-600'
                  } transition-colors`}
                >
                  {crumb.name}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>

      {/* Category Header */}
      <section className={`${currentCategory.bgColor} py-12`}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-6xl mb-4">{currentCategory.icon}</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              {currentCategory.name}
            </h1>
            <p className="text-xl text-gray-600 mb-2">{currentCategory.nepaliName}</p>
            <p className="text-gray-700 max-w-2xl mx-auto">{currentCategory.description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar - Desktop */}
          <div className="hidden lg:block w-72 flex-shrink-0">
            <CategoryFilter
              onFilterChange={handleFilterChange}
              initialFilters={filters}
            />
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-6">
              <Button
                onClick={() => setIsMobileFiltersOpen(true)}
                variant="outline"
                className="w-full flex items-center justify-center space-x-2"
              >
                <FunnelIcon className="h-5 w-5" />
                <span>Filters</span>
                <Badge variant="primary" size="sm">
                  {Object.values(filters).filter(Boolean).length}
                </Badge>
              </Button>
            </div>

            {/* Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {loading ? 'Loading...' : `${totalProducts} Products Found`}
                </h2>
                {filters.search && (
                  <p className="text-gray-600">Results for "{filters.search}"</p>
                )}
              </div>

              {/* View Controls */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">View:</span>
                  <div className="flex items-center bg-gray-100 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'grid'
                          ? 'bg-white text-red-600 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Squares2X2Icon className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${
                        viewMode === 'list'
                          ? 'bg-white text-red-600 shadow-sm'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <ListBulletIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                {viewMode === 'grid' && (
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Columns:</span>
                    <select
                      value={gridColumns}
                      onChange={(e) => setGridColumns(parseInt(e.target.value))}
                      className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Products Grid */}
            <ProductGrid
              products={products}
              loading={loading}
              onLoadMore={handleLoadMore}
              hasMore={hasMore}
              columns={gridColumns}
              showQuickView={true}
            />
          </div>
        </div>
      </div>

      {/* Mobile Filters Modal */}
      {isMobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-y-0 right-0 max-w-sm w-full bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-md"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <CategoryFilter
                onFilterChange={handleFilterChange}
                initialFilters={filters}
                isCollapsed={false}
              />
            </div>
          </div>
        </div>
      )}

      {/* Cultural Info Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Authentic {currentCategory.name}
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Each product in our {currentCategory.name.toLowerCase()} collection represents centuries of 
              Nepali craftsmanship and cultural heritage. Made by skilled artisans using traditional 
              techniques passed down through generations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductListingPage;
