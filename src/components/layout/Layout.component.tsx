import React, { FC } from 'react';
import { Layout as AntLayout } from 'antd';

const {Content} = AntLayout

const Layout: FC = ({ children }) => (
  <AntLayout style={{ minHeight: '100vh' }}>
    <Content>{children}</Content>
  </AntLayout>
);

export default Layout;
