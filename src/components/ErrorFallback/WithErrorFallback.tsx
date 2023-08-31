import React from "react";
import ErrorFallback, { ErrorFallbackProps } from ".";

interface WithErrorFallbackProps extends ErrorFallbackProps {
  isError?: boolean;
  children?: React.ReactNode;
}

const WithErrorFallback: React.FC<WithErrorFallbackProps> = ({
  isError,
  children,
  ...props
}) => {
  if (isError) {
    return <ErrorFallback {...props} />;
  }

  return <>{children}</>;
};

export default WithErrorFallback;
