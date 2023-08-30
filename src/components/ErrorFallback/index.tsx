import {SerializedError} from "@reduxjs/toolkit";
import {FetchBaseQueryError} from "@reduxjs/toolkit/dist/query";
import {Button} from "antd";
import React from "react";

import styles from "./styles.module.scss";

export interface ErrorFallbackProps {
  errorMessage?: string;
  expandError?: FetchBaseQueryError | SerializedError | undefined;
}

const defaultErrorMessage = "Ooops, something went wrong :(";

const ErrorFallback: React.FC<ErrorFallbackProps> = ({
  errorMessage = defaultErrorMessage,
  expandError,
}) => {
  const [isOpenExpandError, setOpenExpandError] = React.useState(false);
  const handleOpenButtonClick = () => setOpenExpandError((prev) => !prev);

  return (
    <div className={styles.wrapper}>
      <span>{errorMessage}</span>
      {expandError && "data" in expandError && (
        <>
          <Button onClick={handleOpenButtonClick} type="link">
            Details
          </Button>
          {isOpenExpandError && <code>{JSON.stringify(expandError)}</code>}
        </>
      )}
    </div>
  );
};

export default ErrorFallback;
