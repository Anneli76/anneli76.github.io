import React from 'react';
import styled from 'styled-components';
import * as Mixins from '../Mixins';
import * as t from '../Typography';
import Layout, { Content } from '../components/Layout';
import { media } from '../MediaQueries';
import Colors from '../Colors';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { darken } from 'polished';

const AboveFold = styled.div`
  ${Mixins.aboveFoldMixin}
  padding: 140px 0 60px 0;
  ${t.H1} {
    color: ${Colors.darkest};
  }
`;

const Block = styled.div`
  &:nth-child(odd) {
    border: solid 1px ${darken(0.1, Colors.light)};
    background-color: ${Colors.light};
  }
`;

const BlockContent = styled(Content)`
  ${Mixins.block}
  padding: 100px 40px;
  ${media.tablet`
    flex-direction: column;
    align-items: baseline;
  `};
  ${media.phone`
    padding: 40px 10px;
  `};
  ${t.P} {
    margin-top: 10px;
  }
  ${t.H2} {
    margin-top: 0;
  }
  img {
    width: 100%;
    height: auto;
  }
`;

const Quote = styled.div`
  padding: 1em;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
`;

const DivWrapper = styled.div`
  padding: 80px 30px;
  ${media.tablet`padding: 50px 0;`}
  &:first-child {
    ${media.tablet`
      margin-bottom: 40px;
  `};
  }
`;

const ItemImage = styled.img`
  max-width: 85%;
  position: relative;
  ${media.tablet`max-width: none;`}
`;

const HomepageWrapper = styled.div`
  ${Mixins.wrapper}
  .who-desc {
    display: block;
    margin: 0 auto 60px auto;
    max-width: 90%;
  }
  ${t.LargeP} {
    margin-bottom: 28px;
  }
  ${t.H1} {
    margin: 0 0 20px 0;
  }
  .avatar {
    max-width: 300px;
    width: 80%;
    margin: 0 auto 50px auto;
    border-radius: 50%;
    display: block;
    ${media.tablet`max-width: 70%;`}
  }
  .bookImage {
    width: 60%;
    display: block;
    margin: 0 auto 50px auto;
    box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  }
  .link {
    padding: 0;
    color: ${Colors.darkest};
    text-decoration: underlined;
    svg {
      margin-left: 7px;
    }
  }
  .portfolio {
    margin: 100px 0 50px 0;
    font-size: 42px;
  }
`;

const Centered = styled.div`
  text-align: center;
`;

const WorkWithMe = styled.div`
  padding: 80px;
  width: 73%;
  border-radius: 6px;
  box-shadow: 0 2px 26px 0 rgba(57, 55, 55, 0.08);
  background-color: #ffffff;
  text-align: center;
  position: relative;
  margin: 100px auto -150px auto;
  ${t.LargeP} {
    max-width: 80%;
    margin: 0 auto 28px auto;
  }
  ${media.tablet`
    width: auto;
    padding: 40px;
    margin: 50px 30px -100px 30px;
  `};
`;

const TitleWrapper = styled.div`
  display: inline-flex;
  text-align: center;
  flex-wrap: wrap;
`;

const ContactLink = styled.a`
  box-sizing: content-box;
  display: inline-flex;
  align-items: center;
  border-radius: 6px;
  color: ${Colors.darkest};
  padding: 0.5em 1em;
  text-decoration: none;
  margin-bottom: 0.3em;

  border: solid 1px;

  .icon {
    margin-left: 0.3em;
  }

  :hover {
    box-shadow: inset 0px 0px 0px 2px ${Colors.darkest};
  }

  transition: all 0.3s ease;
`;

const Homepage = ({ data }) => {
  return (
    <HomepageWrapper>
      <Layout theme="white" bigFooter>
        <AboveFold>
          <Img fluid={data.avatarHomepage.childImageSharp.fluid} alt="Name Surname" className="avatar" />
          <t.H1 primary align="center">
            Anneli Valpola
          </t.H1>
          <TitleWrapper>
            <t.LargeP align="center" max45>
              Valmentaja
            </t.LargeP>
            <t.LargeP align="center" max45>
              Innostaja
            </t.LargeP>
            <t.LargeP align="center" max45>
              Tietokirjailija
            </t.LargeP>
          </TitleWrapper>
        </AboveFold>
        <Content>
          <BlockContent>
            <DivWrapper>
              <Quote>
                <t.H3>”Osaaminen on onnistumisen raaka-ainetta.”</t.H3>
              </Quote>
            </DivWrapper>
            <DivWrapper>
              <Quote>
                <t.H3>”Maailma muuttuu keskustelujen avulla.”</t.H3>
              </Quote>
            </DivWrapper>
          </BlockContent>
        </Content>

        <Content>
          <a href="https://www.propublishing.fi/products/keskusteleva-viestinta-strategiatyossa-ilmestyy-10-8-2023">
            <Img
              fluid={data.bookImage2.childImageSharp.fluid}
              alt="Keskusteleva viestintä strategiatyössä"
              className="bookImage"
            />
          </a>
          <Centered>
            <ContactLink href="https://instagram.com/keskusteleva_viestinta_valpola">
              @keskusteleva_viestinta_valpola
            </ContactLink>
          </Centered>
        </Content>
        <br />
        <br />
        <Content>
          <a href="https://www.kauppakamarikauppa.fi/kirjat/toimiva-johtoryhma.html">
            <Img fluid={data.bookImage1.childImageSharp.fluid} alt="Toimiva johtoryhmä" className="bookImage" />
          </a>
        </Content>
        <WorkWithMe>
          <t.H1 green>Ota yhteyttä</t.H1>
          <t.P>
            <ContactLink href="mailto:anneli.valpola@olorin.fi">
              anneli.valpola@olorin.fi<span className="material-icons icon">mail</span>
            </ContactLink>
          </t.P>
          <t.P>
            <ContactLink href="tel:+358505556565">
              +358 505556565<span className="material-icons icon">phone</span>
            </ContactLink>
          </t.P>
        </WorkWithMe>
      </Layout>
    </HomepageWrapper>
  );
};

export default Homepage;

export const pageQuery = graphql`
  query {
    avatarHomepage: file(relativePath: { eq: "avatar.png" }) {
      ...fluidImage
    }
    bookImage1: file(relativePath: { eq: "toimiva_johtoryhma.png" }) {
      ...fluidImage
    }
    bookImage2: file(relativePath: { eq: "keskuteleva-strategia.jpeg" }) {
      ...fluidImage
    }
  }
`;
