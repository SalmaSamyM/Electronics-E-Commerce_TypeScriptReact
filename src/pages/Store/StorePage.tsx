
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Filter, Grid, List, SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import ProductFilters from "@/components/products/ProductFilters";
import { 
  products,
  categories,
  brands,
  priceRanges,
  ratingOptions,
  getFilteredProducts
} from "@/data/mockProducts";
import { Product } from "@/types/product";
import { cn } from "@/lib/utils";

const StorePage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({});
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [viewType, setViewType] = useState<"grid" | "list">("grid");
  
  // Initialize filters from URL params
  useEffect(() => {
    const initialFilters: Record<string, string[]> = {};
  
    const categoryParams = searchParams.getAll("category");
    if (categoryParams.length > 0) {
      initialFilters.category = categoryParams;
    }
  
    const brandParams = searchParams.getAll("brand");
    if (brandParams.length > 0) {
      initialFilters.brand = brandParams;
    }
  
    const priceParams = searchParams.getAll("price");
    if (priceParams.length > 0) {
      initialFilters.price = priceParams;
    }
  
    const ratingParams = searchParams.getAll("rating");
    if (ratingParams.length > 0) {
      initialFilters.rating = ratingParams;
    }
  
    const searchParam = searchParams.get("search");
    if (searchParam) {
      initialFilters.search = [searchParam];
    }
  
    setSelectedFilters(initialFilters);
  }, [searchParams]);
  

  // Apply filters whenever they change
  useEffect(() => {
    const filtered = getFilteredProducts(products, selectedFilters);
    setFilteredProducts(filtered);
    
    // Update URL with filters
    const newSearchParams = new URLSearchParams();
    
    Object.entries(selectedFilters).forEach(([key, values]) => {
      if (values.length > 0 && key !== "search") {
        values.forEach(value => {
          newSearchParams.append(key, value);
        });
      } else if (key === "search" && values.length > 0) {
        newSearchParams.set("search", values[0]);
      }
    });
    
    setSearchParams(newSearchParams);
  }, [selectedFilters, setSearchParams]);

  const handleFilterChange = (filterType: string, value: string) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      
      // Special handling for search
      if (filterType === "search") {
        newFilters[filterType] = [value];
        return newFilters;
      }

      // For other filters: toggle the value
      if (!newFilters[filterType]) {
        newFilters[filterType] = [value];
      } else {
        const index = newFilters[filterType].indexOf(value);
        if (index >= 0) {
          newFilters[filterType] = newFilters[filterType].filter(v => v !== value);
        } else {
          newFilters[filterType] = [...newFilters[filterType], value];
        }

        // If empty, delete the key
        if (newFilters[filterType].length === 0) {
          delete newFilters[filterType];
        }
      }
      
      return newFilters;
    });
  };

  const clearFilters = () => {
    setSelectedFilters({});
    setSearchParams({});
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };

  // Prepare filter sections for the FilterComponent
  const filterSections = {
    categories: {
      title: "Categories",
      options: categories
    },
    brands: {
      title: "Brands",
      options: brands
    },
    priceRanges: {
      title: "Price",
      options: priceRanges
    },
    ratings: {
      title: "Rating",
      options: ratingOptions
    }
  };

  // Current search term if any
  const currentSearchTerm = selectedFilters.search?.[0] || "";

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop Electronics</h1>
          
          {/* Search indicator */}
          {currentSearchTerm && (
            <div className="flex items-center text-gray-600 mb-4">
              <span>Search results for: </span>
              <span className="ml-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                "{currentSearchTerm}"
                <button 
                  onClick={() => handleFilterChange("search", "")} 
                  className="ml-1 text-blue-600 hover:text-blue-800"
                >
                  <X size={14} />
                </button>
              </span>
            </div>
          )}
          
          <p className="text-gray-600">
            Browse our selection of {filteredProducts.length} products
          </p>
        </div>

        {/* Mobile Filter Controls */}
        <div className="lg:hidden flex items-center justify-between mb-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={toggleMobileFilters}
            className="flex items-center gap-2"
          >
            <Filter size={16} />
            Filters
          </Button>
          
          <div className="flex gap-2">
            <Button
              variant={viewType === "grid" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewType("grid")}
              className="p-2"
            >
              <Grid size={16} />
            </Button>
            <Button
              variant={viewType === "list" ? "default" : "outline"}
              size="sm"
              onClick={() => setViewType("list")}
              className="p-2"
            >
              <List size={16} />
            </Button>
          </div>
        </div>

        {/* Mobile Filters Panel */}
        <div className={cn(
          "lg:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-opacity",
          showMobileFilters ? "opacity-100" : "opacity-0 pointer-events-none"
        )}>
          <div className={cn(
            "absolute right-0 top-0 h-full bg-white w-80 max-w-full transform transition-transform duration-300 shadow-xl overflow-auto",
            showMobileFilters ? "translate-x-0" : "translate-x-full"
          )}>
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-semibold flex items-center text-lg">
                <SlidersHorizontal size={18} className="mr-2" /> Filters
              </h3>
              <Button variant="ghost" size="sm" onClick={toggleMobileFilters}>
                <X size={20} />
              </Button>
            </div>
            
            <div className="p-4">
              <ProductFilters
                categories={filterSections.categories}
                brands={filterSections.brands}
                priceRanges={filterSections.priceRanges}
                ratings={filterSections.ratings}
                selectedFilters={selectedFilters}
                onFilterChange={handleFilterChange}
                onClearFilters={clearFilters}
                mobileView={true}
              />
              
              {/* Mobile filter actions */}
              <div className="mt-6 flex gap-3">
                <Button 
                  variant="outline" 
                  className="flex-1"
                  onClick={clearFilters}
                >
                  Clear All
                </Button>
                <Button 
                  className="flex-1"
                  onClick={toggleMobileFilters}
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Sidebar Filters */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <ProductFilters
              categories={filterSections.categories}
              brands={filterSections.brands}
              priceRanges={filterSections.priceRanges}
              ratings={filterSections.ratings}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
              className="sticky top-24"
            />
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            {/* Desktop view toggle */}
            <div className="hidden lg:flex justify-between items-center mb-6">
              <span className="text-gray-500">
                Showing {filteredProducts.length} results
              </span>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 mr-2">View:</span>
                <Button
                  variant={viewType === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewType("grid")}
                  className="p-2 h-9 w-9"
                >
                  <Grid size={16} />
                </Button>
                <Button
                  variant={viewType === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewType("list")}
                  className="p-2 h-9 w-9"
                >
                  <List size={16} />
                </Button>
              </div>
            </div>

            {/* No products message */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search or filter criteria
                </p>
                <Button onClick={clearFilters}>Clear All Filters</Button>
              </div>
            ) : (
              <ProductGrid 
                products={filteredProducts} 
                columns={viewType === "list" ? 2 : 4}
              />
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StorePage;
