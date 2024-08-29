import React, { useEffect, useState } from 'react';
import { Layout, Flex } from 'antd';
import AdviceCardContainer from './components/AdviceCardContainer';
import { AdviceType } from './types/advice';
import { FETCH_URL } from './constants/constants';
import { isAdvice } from './helpers/typeGuard';

function App() {
  const { Content } = Layout;
  const [advice, setAdvice] = useState<AdviceType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch(FETCH_URL);
    const data = (await response.json()) as AdviceType;
    if (isAdvice(data)) {
      setAdvice(data);
    } else {
      setAdvice(null);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <Content>
        <Flex justify="center" align="center">
          <AdviceCardContainer
            id={advice?.slip.id}
            advice={advice?.slip.advice}
            loading={loading}
            fetchData={fetchData}
          />
        </Flex>
      </Content>
    </Layout>
  );
}

export default App;
