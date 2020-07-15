import React from 'react';

import Layout from '../components/Layout';

import Img from 'gatsby-image';

// import pic1 from '../assets/images/pic01.jpg';
// import pic2 from '../assets/images/pic02.jpg';
// import pic4 from '../assets/images/pic04.jpg';
// import pic5 from '../assets/images/pic05.jpg';
// import pic6 from '../assets/images/pic06.jpg';
// import pic7 from '../assets/images/pic07.jpg';
// import pic8 from '../assets/images/pic08.jpg';
// import codepath from '../assets/images/codepath.jpg';
// import codeorange from '../assets/images/code_orange_logo.jpg';
// import wece from '../assets/images/wece.jpg';

const IndexPage = ({ data }) => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Projects</h2>
          <p>Some apps I've worked on</p>
        </div>
      </header>

      <section id="wrapper">
        {/* <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <a href="https://codepath.org" className="image">
              <img src={codepath} alt="" />
            </a>
            <div className="content">
              <h2 className="major">CodePath.org</h2>
              <p>
                "CodePath.org is a 501 (c)(3) nonprofit increasing diversity in
                tech by transforming college C.S. education for underrepresented
                minorities and underserved populations." -{' '}
                <a href="https://codepath.org">CodePath.org</a>{' '}
              </p>
              <p>
                During the summer of 2020, I volunteered as a mentor for the
                Advanced Interview Prep course, where I conducted mock technical
                interviews for 6 college students.
              </p>
              <a href="/About" className="special">
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section id="two" className="wrapper alt spotlight style2">
          <div className="inner">
            <a href="https://sites.utexas.edu/wece/" className="image">
              <img src={wece} alt="" />
            </a>
            <div className="content">
              <h2 className="major">
                Women in Electrical and Computer Engineering (WECE)
              </h2>
              <p>
                "WECE fosters a community of engineering women within the
                Electrical and Computer Engineering department through social,
                academic, and professional opportunities." -{' '}
                <a href="https://sites.utexas.edu/wece/">WECE</a>
              </p>
              <p>Through my role as Conference/Outreach Coodinator, I</p>
              <ul>
                <li>
                  Led several K-12 outreach events featuring{' '}
                  <a href="https://sites.utexas.edu/wece/girl-day-2-24-18/">
                    LED butterflies
                  </a>
                  , where children learned how to light up LEDs by closing a
                  circuit and attached decorated wings
                </li>
                <li>
                  Founded an internal Outreach Committee and oversaw a new
                  partnership with the Boys & Girls Club of Austin
                </li>
                <li>
                  Coordinated logistics for our members to attend the Grace
                  Hopper Conference in 2018
                </li>
              </ul>
              <a href="/#" className="special">
                Learn more
              </a>
            </div>
          </div>
        </section>

        <section id="three" className="wrapper spotlight style3">
          <div className="inner">
            <a href="http://codeorange.io/" className="image">
              <img src={codeorange} alt="" />
            </a>
            <div className="content">
              <h2 className="major">Code Orange</h2>
              <p>
                "Code Orange is an organization dedicated to enabling UT
                students to make a positive, lasting impact in the lives of
                children in underserved communities here in Austin through
                technical education, mentorship, and outreach." -{' '}
                <a href="http://codeorange.io">Code Orange</a>
              </p>
              <p>
                Each semester, I assisted my mentee in either learning
                coding/circuit fundamentals (Code.org/Snap Circuits) or
                designing and implementing a project (Scratch).{' '}
              </p>
              <a href="/Outreach" className="special">
                Learn more
              </a>
            </div>
          </div>
        </section> */}

        <section id="four" className="wrapper alt style1">
          <div className="inner">
            {/* <h2 className="major">Projects</h2>
            <p>some of my projects</p> */}
            <section className="features">
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <article>
                  <a href={node.fields.slug} className="image">
                    <img src={node.frontmatter.publicURL} alt="" />
                    <Img
                      fluid={
                        node.frontmatter.featuredImage.childImageSharp.fluid
                      }
                      alt="stellar spine image"
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
                  {<img src={pic4} alt="" />}
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
            {/* <ul className="actions">
              <li>
                <a href="/#" className="button">
                  Browse All
                </a>
              </li>
            </ul> */}
          </div>
        </section>
      </section>
    </section>
  </Layout>
);

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          html
          fileAbsolutePath
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
