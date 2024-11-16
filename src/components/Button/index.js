import React from "react";
import Button from "react-bootstrap/Button";

function MyButton({
  variant,
  className,
  children,
  action,
  size,
  loading,
  disabled,
}) {
  return (
    <>
      <Button
        variant={variant}
        className={className}
        children={children}
        onClick={action}
        size={size}
        loading={loading}
        disabled={disabled}
      >
        {loading ? "Loading..." : children}
      </Button>
    </>
  );
}

export default MyButton;
