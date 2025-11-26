import React, { useState } from 'react';
import { ArrowLeft, Upload, Plus, Trash2 } from 'lucide-react';

const ProductEdit: React.FC = () => {
  const [productData, setProductData] = useState({
    name: 'Ring',
    attributeSet: 'Ring',
    sku: '',
    weight: '',
    stockAvailability: 'In Stock',
    taxClass: '',
    visibility: 'Catalog, Search',
    priceType: 'Fixed',
    price: '',
    specialPrice: '',
    specialPriceFrom: '',
    specialPriceTo: '',
    metaTitle: '',
    metaKeyword: '',
    metaDescription: '',
    shortDescription: '',
    description: ''
  });

  const [productImages, setProductImages] = useState([
    { id: 1, url: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
    { id: 2, url: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
    { id: 3, url: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
    { id: 4, url: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
    { id: 5, url: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
    { id: 6, url: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
    { id: 7, url: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' },
    { id: 8, url: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1' }
  ]);

  const [careerStones, setCareerStones] = useState([
    {
      id: 1,
      careerStoneTradeName: 'Select an option',
      careerStoneWeight: 'Select an option',
      careerStoneMinimumWeight: 'Select an option'
    }
  ]);

  const [bulkStones, setBulkStones] = useState([
    {
      id: 1,
      tradeName: 'Select an option',
      weight: 'Select an option',
      minimumRequiredWeight: 'Select an option'
    }
  ]);

  const handleInputChange = (field: string, value: string) => {
    setProductData(prev => ({ ...prev, [field]: value }));
  };

  const addCareerStone = () => {
    setCareerStones(prev => [...prev, {
      id: Date.now(),
      careerStoneTradeName: 'Select an option',
      careerStoneWeight: 'Select an option',
      careerStoneMinimumWeight: 'Select an option'
    }]);
  };

  const addBulkStone = () => {
    setBulkStones(prev => [...prev, {
      id: Date.now(),
      tradeName: 'Select an option',
      weight: 'Select an option',
      minimumRequiredWeight: 'Select an option'
    }]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <button className="text-gray-600 hover:text-gray-800">
            <ArrowLeft size={20} />
          </button>
          <h2 className="text-2xl font-bold text-gray-900">Edit Product</h2>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            Back To List
          </button>
          <button className="px-4 py-2 bg-[#005257] text-white rounded-lg hover:bg-green-700">
            Save
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
              <input
                type="text"
                value={productData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Attribute Set *</label>
              <select
                value={productData.attributeSet}
                onChange={(e) => handleInputChange('attributeSet', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Ring">Ring</option>
                <option value="Necklace">Necklace</option>
                <option value="Bracelet">Bracelet</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">SKU</label>
              <input
                type="text"
                value={productData.sku}
                onChange={(e) => handleInputChange('sku', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Weight</label>
              <input
                type="text"
                value={productData.weight}
                onChange={(e) => handleInputChange('weight', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Stock Availability */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Stock Availability *</label>
              <select
                value={productData.stockAvailability}
                onChange={(e) => handleInputChange('stockAvailability', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="In Stock">In Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tax Class</label>
              <select
                value={productData.taxClass}
                onChange={(e) => handleInputChange('taxClass', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select Tax Class</option>
                <option value="Taxable">Taxable</option>
                <option value="Non-Taxable">Non-Taxable</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Visibility</label>
              <select
                value={productData.visibility}
                onChange={(e) => handleInputChange('visibility', e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="Catalog, Search">Catalog, Search</option>
                <option value="Catalog">Catalog</option>
                <option value="Search">Search</option>
                <option value="Not Visible Individually">Not Visible Individually</option>
              </select>
            </div>
          </div>

          {/* Price Information */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Price *</label>
                <input
                  type="number"
                  value={productData.price}
                  onChange={(e) => handleInputChange('price', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Price</label>
                <input
                  type="number"
                  value={productData.specialPrice}
                  onChange={(e) => handleInputChange('specialPrice', e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Product Images */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Product Images</h3>
              <button className="text-blue-600 hover:text-blue-800 text-sm">Add More</button>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
              {productImages.map((image) => (
                <div key={image.id} className="relative group">
                  <img
                    src={image.url}
                    alt="Product"
                    className="w-full h-20 object-cover rounded-lg border border-gray-200"
                  />
                  <button className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 size={12} />
                  </button>
                </div>
              ))}
              <div className="w-full h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500">
                <Upload size={20} className="text-gray-400" />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              You can upload multiple images by clicking on the above area. You can also drag and drop files. Only JPG, JPEG, PNG, GIF files are allowed.
            </p>
          </div>

          {/* Career Stone Information */}
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Career Stone Information</h3>
              <button
                onClick={addCareerStone}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
              >
                Add
              </button>
            </div>
            <div className="space-y-4">
              {careerStones.map((stone, index) => (
                <div key={stone.id} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Career Stone Trade Name</label>
                    <select className="w-full border border-gray-600 bg-gray-700 rounded-lg px-4 py-2 text-white">
                      <option>Select an option</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Career Stone Weight</label>
                    <select className="w-full border border-gray-600 bg-gray-700 rounded-lg px-4 py-2 text-white">
                      <option>Select an option</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Career Stone Minimum Weight</label>
                    <select className="w-full border border-gray-600 bg-gray-700 rounded-lg px-4 py-2 text-white">
                      <option>Select an option</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metal Info */}
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Metal Info</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Metal Weight</label>
                <input
                  type="text"
                  placeholder="0.0"
                  className="w-full border border-gray-600 bg-gray-700 rounded-lg px-4 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Minimum approximate weight of metal</label>
                <input
                  type="text"
                  className="w-full border border-gray-600 bg-gray-700 rounded-lg px-4 py-2 text-white"
                />
              </div>
            </div>
          </div>

          {/* Bulk Stone Details */}
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Bulk Stone Details</h3>
              <button
                onClick={addBulkStone}
                className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
              >
                Add New Stone Group
              </button>
            </div>
            <div className="space-y-4">
              {bulkStones.map((stone, index) => (
                <div key={stone.id} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Trade Name</label>
                    <select className="w-full border border-gray-600 bg-gray-700 rounded-lg px-4 py-2 text-white">
                      <option>Select an option</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Weight</label>
                    <select className="w-full border border-gray-600 bg-gray-700 rounded-lg px-4 py-2 text-white">
                      <option>Select an option</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Minimum Required Weight</label>
                    <select className="w-full border border-gray-600 bg-gray-700 rounded-lg px-4 py-2 text-white">
                      <option>Select an option</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="bg-gray-800 text-white p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Product Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Product Name</label>
                <input
                  type="text"
                  placeholder="Champagne Gold Natural Matching Ring With Blue Sapphire"
                  className="w-full border border-gray-600 bg-gray-700 rounded-lg px-4 py-2 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Additional Product Details</label>
                <div className="border border-gray-600 bg-gray-700 rounded-lg">
                  <div className="border-b border-gray-600 p-2">
                    <div className="flex space-x-2">
                      <button className="p-1 hover:bg-gray-600 rounded">B</button>
                      <button className="p-1 hover:bg-gray-600 rounded">I</button>
                      <button className="p-1 hover:bg-gray-600 rounded">U</button>
                      <button className="p-1 hover:bg-gray-600 rounded">≡</button>
                      <button className="p-1 hover:bg-gray-600 rounded">≡</button>
                      <button className="p-1 hover:bg-gray-600 rounded">≡</button>
                      <button className="p-1 hover:bg-gray-600 rounded">•</button>
                      <button className="p-1 hover:bg-gray-600 rounded">1.</button>
                      <button className="p-1 hover:bg-gray-600 rounded">🔗</button>
                      <button className="p-1 hover:bg-gray-600 rounded">📷</button>
                      <button className="p-1 hover:bg-gray-600 rounded">📹</button>
                      <button className="p-1 hover:bg-gray-600 rounded">📊</button>
                    </div>
                  </div>
                  <textarea
                    rows={6}
                    className="w-full bg-transparent p-4 text-white resize-none focus:outline-none"
                    placeholder="Witness the perfect fusion of nature's finest and exquisite Japanese craftsmanship with this natural and certified Thai..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;