import { Divider, DividerProps } from 'antd';
import styled from 'styled-components';
import { baseTheme } from '../theme';

export const DividerCardStyled = styled(Divider)<DividerProps>`
  && {
    border-color: ${baseTheme.color.primary};
  }
`;
