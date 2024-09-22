import { Card, CardProps } from 'antd';
import styled from 'styled-components';
import { baseTheme } from '../theme';

export const CardContainerInner = styled(Card)<CardProps>`
  && {
    position: relative;
    background-color: ${baseTheme.color.tertiary};
    width: 550px;

    & .ant-card-body {
      padding: 45px;
      @media screen and (max-width: 375px) {
        padding: 45px 25px;
      }
    }
  }
`;
