import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import { media } from '../MediaQueries';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding-bottom: 100px;

  ${t.H1} {
    margin-bottom: 25px;
  }
  ${t.H4} {
    line-height: 1.14;
  }
  ${media.tablet`background-position: center top 0px;`};
`;

const Divider = styled.hr`
  max-width: 20%;
  margin-top: 2em;
  margin-bottom: 2em;
`;

const AboutMeWrapper = styled.div`
  min-height: 100vh;
  ${Mixins.wrapper}
  .m-b-60 {
    margin-bottom: 60px;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  .background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    min-height: 540px;
    ${media.phone`min-height: 620px;`};
  }
  .gatsby-image {
    ${media.tablet`text-align: center;`}
    div {
      padding: 0;
    }
    picture img {
      max-width: 85%;
      position: relative;
      ${media.tablet`max-width: 80%;`}
    }
  }
  .avatar {
    max-width: 400px;
    width: 80%;
    margin: 0 auto 100px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
`;

const AboutMe = ({ data }) => {
  return (
    <AboutMeWrapper>
      <Layout theme="white">
        <AboveFold>
          <t.H1 green align="center">
            Anneli Valpola
          </t.H1>
          <t.LargeP align="left" max45 thin>
            Työvuosistani olen pitkään toiminut sekä yritysten johdossa että konsulttina mielenkiintoisissa haasteissa.
            Osa on liittynyt yritysten kansainvälistymiseen, isoihin toiminnan muutoksiin tai yrityskauppoihin ja osa
            erilaisten ihmisten kehittämiseen ja vahvuuksien vahvistamiseen. Sparraan mielelläni strategian
            toteuttamisessa, muutosjohtamisen suunnittelussa ja johdon onnistumisen tukemisessa. Innostun osaamisen
            kehittämisestä.
          </t.LargeP>
          <Divider />
          <t.LargeP align="left" max45 thin>
            Monesta teemasta olen kirjoittanut johtamisen kirjoja ja oppaita erilaisiin tarpeisiin: Kehityskeskustelut,
            mentorointi, muutosjohtaminen, strategian toteuttaminen, arkiluovuus, yritysten yhteenmenot, johtaminen ja
            johtajuus.
          </t.LargeP>
          <Divider />
          <t.LargeP align="left" max45 thin>
            Sain paljon uusia virikkeitä kahden vuoden aikana (2017-2019) kun roolissani Visiting Fellow oli
            mahdollisuus osallistua LSE (London School of Economics and Political Science), Departement of Media and
            Communications’ toimintaan. Strategisen viestinnän oivallukseni syvenivät, uutta ymmärrystä tuli
            uutistoiminnan roolista demokratian tukena ja kokeneiden uutistoimittajien osaamistarpeista muuttuvassa
            mediaympäristössä, mielenkiintoisesta selvityksestä jonka tein LSE:ssä.
          </t.LargeP>
        </AboveFold>
        <Content>
          <Img fluid={data.avatarAbout.childImageSharp.fluid} alt="Anneli Valpola" className="avatar" />
        </Content>
      </Layout>
    </AboutMeWrapper>
  );
};

export default AboutMe;

export const pageQuery = graphql`
  query {
    avatarAbout: file(relativePath: { eq: "avatar.png" }) {
      ...fluidImage
    }
  }
`;
