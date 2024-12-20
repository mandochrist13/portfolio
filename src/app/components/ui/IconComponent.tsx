import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const IconComponent = forwardRef<HTMLDivElement, { icon: string }>(
  (props, ref): JSX.Element => {
    return (
      <p ref={ref} {...props}>
        {props.icon}
      </p>
    );
  }
);
IconComponent.displayName = "IconComponent";
export default IconComponent;
