import { Card, Divider, Flex, Typography, Button } from 'antd';
import { AdviceType } from '../types/advice';
import { DiceIcon } from './Icons';
import { useSWRConfig } from 'swr';
import { FETCH_URL } from '../constants/constants';
import { fetcher } from '../helpers/fetcher';
import { useState } from 'react';
import { CardContainer } from '../styles/card/CardContainer';

interface AdviceCardContainerProps extends Partial<AdviceType['slip']> {
  loading: boolean;
}

const AdviceCardContainer = ({
  id,
  advice,
  loading,
}: AdviceCardContainerProps) => {
  const onClickRandomBtn = () => {
    mutate(FETCH_URL, fetcher(FETCH_URL));
    setBlockBtn(true);
    const timer = setTimeout(() => {
      setBlockBtn(false);
      clearTimeout(timer);
    }, 1500);
  };
  const { Paragraph } = Typography;
  const [blockBtn, setBlockBtn] = useState<boolean>(false);
  const { mutate } = useSWRConfig();
  return (
    <CardContainer justify="center" align="center">
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
          disabled={blockBtn}
          className="random-card-btn"
          type="primary"
          shape="circle"
          icon={<DiceIcon />}
          onClick={() => onClickRandomBtn()}
        />
      </Card>
    </CardContainer>
  );
};

export default AdviceCardContainer;
