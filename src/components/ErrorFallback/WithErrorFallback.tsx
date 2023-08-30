import React, {ReactNode} from "react";
import ErrorFallback, {ErrorFallbackProps} from ".";

interface WithErrorFallbackProps extends ErrorFallbackProps {
  isError?: boolean;
  children?: ReactNode;
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
