import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout from '../components/Layout';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 157px 0 100px 0;
`;

const NotFoundPageWrapper = styled.div`
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
`;

const NotFoundPage = () => {
  return (
    <NotFoundPageWrapper>
      <Layout theme="white">
        <AboveFold>
          <t.H1 green align="center">
            404
          </t.H1>
        </AboveFold>
      </Layout>
    </NotFoundPageWrapper>
  );
};

export default NotFoundPage;
