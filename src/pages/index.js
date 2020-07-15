import React from 'react';

import Layout from '../components/Layout';
import Img from 'gatsby-image';

// import pic2 from '../assets/images/pic02.jpg';
// import pic3 from '../assets/images/pic03.jpg';
// import pic4 from '../assets/images/pic04.jpg';
// import pic5 from '../assets/images/pic05.jpg';
// import pic6 from '../assets/images/pic06.jpg';
// import pic7 from '../assets/images/pic07.jpg';

import me from '../assets/images/LinkedIn.jpg';
import outreach from '../assets/images/WE@UT.jpg';

import config from '../../config';
const IndexPage = ({ data }) => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <div className="logo">
          <span className="icon fa-diamond"></span>
        </div>
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/About" className="image">
            <img src={me} alt="" />
          </a>
          <div className="content">
            <h2 className="major">About Me</h2>
            <p>
              Hi, my name is Snigdha! I'm a software engineer with a drive to
              help others and to make useful, intuitive, and accessible
              applications.
            </p>
            <a href="/About" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/Outreach" className="image">
            <img src={outreach} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Outreach</h2>
            <p>
              I'm passionate about uplifing underrepresented groups in tech to
              bring diversity to the industry.
            </p>
            <a href="/Outreach" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Nullam dignissim</h2>
            <p>
              Lorem ipsum dolor sit amet, etiam lorem adipiscing elit. Cras
              turpis ante, nullam sit amet turpis non, sollicitudin posuere
              urna. Mauris id tellus arcu. Nunc vehicula id nulla dignissim
              dapibus. Nullam ultrices, neque et faucibus viverra, ex nulla
              cursus.
            </p>
            <a href="/#" className="special">
              Learn more
            </a>
          </div>
        </div>
      </section> */}

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Projects</h2>
          {/* <p>A few apps I've worked on.</p> */}
          <section className="features">
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <article>
                <a href={node.fields.slug} className="image">
                  <Img
                    fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                    alt="project image"
                  />
                </a>
                <h3 className="major">{node.frontmatter.title}</h3>
                <p>{node.frontmatter.subheading}</p>
                <a href={node.fields.slug} className="special">
                  Learn more
                </a>
              </article>
            ))}
            {/* <article>
              <a href="/#" className="image">
                <img src={pic4} alt="" />
              </a>
              <h3 className="major">Sed feugiat lorem</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic5} alt="" />
              </a>
              <h3 className="major">Nisl placerat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic6} alt="" />
              </a>
              <h3 className="major">Ante fermentum</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article>
            <article>
              <a href="/#" className="image">
                <img src={pic7} alt="" />
              </a>
              <h3 className="major">Fusce consequat</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                nulla dignissim dapibus ultrices.
              </p>
              <a href="/#" className="special">
                Learn more
              </a>
            </article> */}
          </section>
          <ul className="actions">
            <li>
              <a href="/Projects" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>
    </section>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 2
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            date
            title
            subheading
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 590) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
