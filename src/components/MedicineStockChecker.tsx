import React, { useState, useMemo } from 'react';
import { Search, RotateCcw, AlertTriangle, CheckCircle, HelpCircle, XCircle, ShoppingBag } from 'lucide-react';
import stockData from '../data/medicineStock.json';
import { Medicine } from '../types';

interface MedicineStockCheckerProps {
  onSelectMedicineForOrder?: (medName: string) => void;
}

export default function MedicineStockChecker({ onSelectMedicineForOrder }: MedicineStockCheckerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  
  // Cast JSON data to typed Medicine objects
  const inventory: Medicine[] = useMemo(() => stockData as Medicine[], []);

  // Filter medicines based on search term and selected status
  const filteredMedicines = useMemo(() => {
    return inventory.filter(med => {
      const matchesSearch = med.medicineName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            med.brand.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = selectedStatus === 'all' || med.status === selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, selectedStatus, inventory]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedStatus('all');
  };

  const getStatusBadge = (status: Medicine['status']) => {
    switch (status) {
      case 'Available':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/50 dark:border-emerald-800/40">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Available</span>
          </span>
        );
      case 'Limited Stock':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border border-amber-200/50 dark:border-amber-800/40">
            <AlertTriangle className="w-3.5 h-3.5 animate-pulse" />
            <span>Limited Stock</span>
          </span>
        );
      case 'Out of Stock':
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border border-rose-200/50 dark:border-rose-800/40">
            <XCircle className="w-3.5 h-3.5" />
            <span>Out of Stock</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-xs font-bold bg-slate-50 text-slate-500">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Unknown</span>
          </span>
        );
    }
  };

  return (
    <div className="w-full rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl overflow-hidden transition-all duration-300">
      
      {/* Header section of stock checker */}
      <div className="bg-gradient-to-r from-teal-500 to-emerald-600 dark:from-teal-600 dark:to-emerald-700 p-6 sm:p-8 text-white text-center">
        <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight">Live Medicine Stock Checker</h3>
        <p className="text-sm text-teal-50/90 mt-1.5 max-w-lg mx-auto">
          Query our real-time inventory at Chadauti, Gaya instantly. If in stock, you can click to order via WhatsApp immediately.
        </p>
      </div>

      <div className="p-5 sm:p-8 space-y-6">
        {/* Search controls */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Medicine Name, Brand, Formula (e.g. Dolo, Paracetamol, Cipla)..."
              className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 pl-11 pr-4 py-3 text-sm text-slate-950 dark:text-white placeholder-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/10 transition-all"
            />
          </div>

          <div className="flex gap-2 shrink-0">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950 px-4 py-3 text-sm text-slate-700 dark:text-slate-300 focus:border-teal-500 focus:outline-none transition-all cursor-pointer"
            >
              <option value="all">All Stock Statuses</option>
              <option value="Available">Available</option>
              <option value="Limited Stock">Limited Stock</option>
              <option value="Out of Stock">Out of Stock</option>
            </select>

            {(searchQuery || selectedStatus !== 'all') && (
              <button
                onClick={handleReset}
                className="inline-flex items-center justify-center p-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors"
                title="Reset filters"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Results grid / table */}
        <div className="overflow-x-auto border border-slate-100 dark:border-slate-800/40 rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-950 text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                <th className="px-5 py-4">Medicine & Brand</th>
                <th className="px-5 py-4">Price (MRP)</th>
                <th className="px-5 py-4">Expiry Date</th>
                <th className="px-5 py-4 text-center">Availability</th>
                <th className="px-5 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60 text-sm">
              {filteredMedicines.length > 0 ? (
                filteredMedicines.map((med) => (
                  <tr 
                    key={med.id} 
                    className="hover:bg-slate-50/50 dark:hover:bg-slate-850/20 transition-colors"
                  >
                    <td className="px-5 py-4">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {med.medicineName}
                      </div>
                      <div className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                        Brand: {med.brand}
                      </div>
                    </td>
                    <td className="px-5 py-4 font-mono font-semibold text-slate-800 dark:text-slate-300">
                      ₹{med.mrp.toFixed(2)}
                    </td>
                    <td className="px-5 py-4 text-slate-500 dark:text-slate-400 text-xs font-mono">
                      {med.expiry}
                    </td>
                    <td className="px-5 py-4 text-center">
                      {getStatusBadge(med.status)}
                    </td>
                    <td className="px-5 py-4 text-right">
                      {med.status !== 'Out of Stock' ? (
                        <button
                          onClick={() => onSelectMedicineForOrder?.(med.medicineName)}
                          className="inline-flex items-center space-x-1 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm hover:shadow active:scale-95 transition-all cursor-pointer"
                        >
                          <ShoppingBag className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Order Now</span>
                        </button>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-600 px-3 py-1.5 rounded-lg text-xs font-bold cursor-not-allowed"
                        >
                          <XCircle className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Unavailable</span>
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-5 py-12 text-center text-slate-400 dark:text-slate-500 bg-slate-50/20 dark:bg-slate-950/10">
                    <div className="max-w-xs mx-auto space-y-2">
                      <HelpCircle className="w-8 h-8 text-slate-300 mx-auto" />
                      <p className="font-semibold text-slate-600 dark:text-slate-400">No medicines found</p>
                      <p className="text-xs">Try searching for other brand terms or names. Contact us if you cannot find your required drug.</p>
                      <button
                        onClick={handleReset}
                        className="mt-2 text-xs text-teal-600 hover:underline font-bold"
                      >
                        Reset Search Filters
                      </button>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Informative Disclaimer footnote */}
        <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center italic">
          Disclaimer: Inventory statuses are synchronized at regular hourly intervals. Some high-demand prescription items might have real-time discrepancies. A medical doctor prescription copy is legally mandated to complete the dispense of prescription drugs.
        </p>

      </div>
    </div>
  );
}
