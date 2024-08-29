import React from 'react';
import { Card, Divider, Flex, Typography, Button } from 'antd';
import { AdviceType } from '../types/advice';
import { DiceIcon } from './Icons';

interface AdviceCardContainerProps extends Partial<AdviceType['slip']> {
  loading: boolean;
  fetchData: () => Promise<void>;
}

const AdviceCardContainer = ({
  id,
  advice,
  loading,
  fetchData,
}: AdviceCardContainerProps) => {
  const { Paragraph } = Typography;
  return (
    <Card loading={loading} bordered={false}>
      <Flex vertical align="center">
        <Paragraph type="secondary" className="header-card-text">
          ADVICE #{id}
        </Paragraph>
        <Paragraph className="body-card-text">{advice}</Paragraph>
      </Flex>
      <Divider style={{ borderColor: 'hsl(193, 38%, 86%)' }}>
        <Flex gap={6}>
          <div className="custom-stick" />
          <div className="custom-stick" />
        </Flex>
      </Divider>
      <Button
        className="random-card-btn"
        type="primary"
        shape="circle"
        icon={<DiceIcon />}
        onClick={() => fetchData()}
      />
    </Card>
  );
};

export default AdviceCardContainer;
