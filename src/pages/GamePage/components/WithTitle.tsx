import React, { ReactNode } from "react";
import { Typography } from "antd";

const { Title } = Typography;

interface WithTitleProps {
  children: ReactNode;
  title: string;
}

const WithTitle: React.FC<WithTitleProps> = ({ children, title }) => {
  return (
    <>
      <Title level={4}>{title}</Title>
      {children}
    </>
  );
};

export default WithTitle;
