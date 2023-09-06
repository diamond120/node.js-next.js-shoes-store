import  * as React from "react";
import PropTypes from "prop-types";

interface onChangeParamI{
    min:number;
    max:number;
}
interface propsI{
    min:number;
    max:number;
    step:number;
    onChange?:({min,max}:onChangeParamI)=>any;
}
const MultiRangeSlider = ({ min, max,step, onChange }:propsI) => {
  const [minVal, setMinVal] = React.useState(min);
  const [maxVal, setMaxVal] = React.useState(max);
  const minValRef = React.useRef(min);
  const maxValRef = React.useRef(max);
  const range = React.useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = React.useCallback(
    (value:any) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  React.useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  React.useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  React.useEffect(() => {
    if(onChange!==undefined){
      onChange({ min: minVal, max: maxVal });      
    }
  }, [minVal, maxVal, onChange]);

  return (
   <div className="relative">
      <input
        type="range"
        min={min}
        max={max}
        step="0.01" 
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - 1);
          setMinVal(value);
          minValRef.current = value;
        }}
        className="thumb thumb--left"
        style={{ zIndex: minVal > max - 100 ? "5" : "" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        step={step} 
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + 1);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className="thumb thumb--right"
      />
   <div className="relative">
      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="flex justify-between mt-[2rem]">
        <div className="text-primary mt-[1.5rem] text-[1rem] text-center font-poppins bg-fifth border-primary border-[.5px] px-[.5rem] py-[.5rem] w-[80px]">${minVal}</div>
        <div className="text-primary mt-[1.5rem] text-[1rem] text-center font-poppins bg-fifth border-primary border-[.5px] px-[.5rem] py-[.5rem] w-[80px]">${maxVal}</div>
        </div>
      </div>
      </div>
      </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
