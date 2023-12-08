import { useScrollTrigger } from "@mui/material";
import React from "react";
import { FC } from "react";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}
  
const ScrollElevation: FC<Props> = (props) => {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });


    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
};

export default ScrollElevation;