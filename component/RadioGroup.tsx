import { Sticks } from '@/interfaces';
import React from 'react';

type Props = {
  options: Sticks[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioGroup = ({ options, selectedValue, onChange }: Props) => {
  return (
    <div className="flex justify-center items-center gap-5 pt-10">
      {options.map((option: Sticks, idx: number) => {
        const isSelected = option.value === selectedValue
        return <label htmlFor={`${option.value}_${idx}`} key={option.value} className={`min-h-24 relative cursor-pointer bg-[#dee2ea] select-none border-gray-400 flex items-center p-5 border rounded-xl ${option.isBest ? 'bg-[#ecebfe] border-indigo-700' : ''}`}>
          {option.isBest && (
            <div className="absolute -top-5 left-1/2 w-max text-sm -translate-x-1/2 bg-[#5a58f2] text-white px-4 py-2 rounded-lg">
              BEST DEAL
            </div>
          )}
          <input
            type="radio"
            id={`${option.value}_${idx}`}
            className="hidden appearance-none"
            checked={isSelected}
            onChange={() => onChange(option.value)}
          />
          <label
            htmlFor={`${option.value}_${idx}`}
            className="flex items-center justify-center w-8 h-8 border border-gray-300 rounded-full cursor-pointer transition-colors duration-200"
            style={{
              backgroundColor: isSelected ? '#5a58f2' : 'white',
            }}
          >
            <span className={`absolute rounded-full w-4 h-4 bg-white transition duration-200 ${option.value === selectedValue ? 'scale-100' : 'scale-0'}`}></span>
          </label>
          <div className='flex flex-col'>
            <span className="ml-2 font-bold">{option.label}</span>
            <span className="ml-2">{option.extraInfo}</span>
          </div>
        </label>
      }
      )}
    </div>
  );
};

export default RadioGroup;
