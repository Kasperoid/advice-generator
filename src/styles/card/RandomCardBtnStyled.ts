import { Button } from 'antd';
import styled from 'styled-components';
import { baseTheme } from '../theme';

export const RandomCardBtnStyled = styled(Button)`
  && {
    position: absolute;
    bottom: -60px;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 30px;
    border-radius: 50%;
    background-color: ${baseTheme.color.secondary};
    border-color: ${baseTheme.color.secondary};
    transition: box-shadow 0.3s ease;

    &.ant-btn:hover {
      background-color: ${baseTheme.color.secondary};
      border-color: ${baseTheme.color.secondary};
      box-shadow: 0px 0px 15px 5px ${baseTheme.color.secondary};
    }

    &.ant-btn:disabled {
      opacity: 0.6;
    }
  }
`;
