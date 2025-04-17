import React, { useEffect, useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp, Filter } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterSection {
  title: string;
  options: FilterOption[];
}

interface ProductFiltersProps {
  categories: FilterSection;
  brands: FilterSection;
  priceRanges: FilterSection;
  ratings: FilterSection;
  selectedFilters: Record<string, string[]>;
  onFilterChange: (filterType: string, value: string) => void;
  onClearFilters: () => void;
  className?: string;
  mobileView?: boolean;
}

function updateQueryParams(key: string, value: string, isSelected: boolean): void {
  const url = new URL(window.location.href);
  const currentValues = url.searchParams.getAll(key);
  url.searchParams.delete(key);

  const newValues = isSelected
    ? [...currentValues, value]
    : currentValues.filter(val => val !== value);

  newValues.forEach(val => url.searchParams.append(key, val));
  window.history.pushState(null, '', url.toString());
}

const ProductFilters = ({
  categories,
  brands,
  priceRanges,
  ratings,
  selectedFilters,
  onFilterChange,
  onClearFilters,
  className,
  mobileView = false,
}: ProductFiltersProps): JSX.Element => {
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [brandsOpen, setBrandsOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [ratingsOpen, setRatingsOpen] = useState(true);

  const [localFilters, setLocalFilters] = useState<Record<string, string[]>>({});

  useEffect(() => {
    setLocalFilters(selectedFilters);
  }, [selectedFilters]);

  const handleFilterChange = (filterType: string, optionId: string, isSelected: boolean): void => {
    const prevValues = localFilters[filterType] || [];
    const updatedValues = isSelected
      ? [...prevValues, optionId]
      : prevValues.filter(val => val !== optionId);

    const newFilters = {
      ...localFilters,
      [filterType]: updatedValues,
    };

    setLocalFilters(newFilters);
    onFilterChange(filterType, optionId);
    updateQueryParams(filterType, optionId, isSelected);
  };

  const renderFilterSection = (
    section: FilterSection,
    filterType: string,
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  ): JSX.Element => (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <div className="border-b pb-2">
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2 font-medium">
          {section.title}
          {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2 pb-4">
          <div className="space-y-2">
            {section.options.map((option) => {
              const isChecked = localFilters[filterType]?.includes(option.id) || false;
              return (
                <div key={option.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`${filterType}-${option.id}`}
                    checked={isChecked}
                    onCheckedChange={(checked) =>
                      handleFilterChange(filterType, option.id, !!checked)
                    }
                  />
                  <label
                    htmlFor={`${filterType}-${option.id}`}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {option.label}
                  </label>
                </div>
              );
            })}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );

  return (
    <div className={cn('bg-white p-4 rounded-lg', mobileView ? '' : 'shadow-md', className)}>
      <div className="flex justify-between items-center mb-4 pb-2 border-b">
        <h3 className="font-semibold flex items-center">
          <Filter size={18} className="mr-2" /> Filters
        </h3>
        <Button variant={mobileView ? 'outline' : 'link'} size="sm" onClick={onClearFilters}>
          Clear All
        </Button>
      </div>

      {renderFilterSection(categories, 'category', categoryOpen, setCategoryOpen)}
      {renderFilterSection(brands, 'brand', brandsOpen, setBrandsOpen)}
      {renderFilterSection(priceRanges, 'price', priceOpen, setPriceOpen)}
      {renderFilterSection(ratings, 'rating', ratingsOpen, setRatingsOpen)}
    </div>
  );
};

export default ProductFilters;
