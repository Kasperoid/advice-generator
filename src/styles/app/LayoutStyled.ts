import { Layout, LayoutProps } from 'antd';
import styled from 'styled-components';
import { baseTheme } from '../theme';

export const LayoutStyled = styled(Layout)<LayoutProps>`
  && {
    background-color: ${baseTheme.color.quaternary};
    height: 100vh;
  }
`;
