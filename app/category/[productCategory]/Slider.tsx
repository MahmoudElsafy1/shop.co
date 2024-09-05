"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `$${value}`;
}

const minDistance = 2;

type propsSlider = {
  size: number;
};

export default function PriceSlider(props: propsSlider) {
  const [value1, setValue1] = React.useState<number[]>([50, 200]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  return (
    <Box sx={{ width: `${props.size}` }}>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value1}
        max={250}
        onChange={handleChange1}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        disableSwap
        // sx={{
        //   color: "rgba(0,0,0,0.87)",
        // }}
        sx={{
          color: "rgba(0,0,0,0.87)",
          height: 4,
        }}
        valueLabelFormat={valuetext}
      />
    </Box>
  );
}
