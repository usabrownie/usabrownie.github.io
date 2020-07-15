import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
// import pic from '../assets/images/Stellar-Spine3.jpg';

const IndexPage = ({ data }) => {
  const post = data.markdownRemark;
  console.log(post);
  console.log(post.frontmatter.award);
  // console.log(post.frontmatter.background);
  return (
    <Layout fullMenu>
      <section id="wrapper">
        <header>
          <div className="inner">
            <a href="/Projects" className="button primary icon fa-chevron-left">
              All Projects
            </a>
            <br></br>
            <br></br>
            <h2>
              {post.frontmatter.title}{' '}
              {post.frontmatter.award ? (
                <a href={post.frontmatter.url}>
                  <i class="fa fa-trophy"></i>
                </a>
              ) : null}
            </h2>
            <p>{post.frontmatter.subheading}</p>
          </div>
        </header>

        <div className="wrapper">
          <div className="inner">
            <h3 className="major">Background</h3>
            <div>
              {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
              {post.frontmatter.background.map((b, index) => (
                <p key={index}>{b}</p>
              ))}
            </div>
            <br></br>
            <h3 className="major">Implementation</h3>
            <div>
              {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
              {post.frontmatter.implementation.map((i, index) => (
                <p key={index}>{i}</p>
              ))}
              <div className="row gtr-uniform">
                {post.frontmatter.images.map((image, index) => {
                  const { path, caption } = image;
                  return (
                    <div className="col-4">
                      <span className="image fit">
                        <figure>
                          <img
                            src={require('../' + path + '.jpg')}
                            alt={image}
                          />
                          <figcaption>{caption}</figcaption>
                        </figure>
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <br></br>
            <h3 className="major">Results</h3>
            <div>
              {post.frontmatter.results.map((r, index) => (
                <p key={index}>{r}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subheading
        background
        implementation
        results
        url
        award
        images {
          path
          caption
        }
      }
      fields {
        slug
      }
    }
  }
`;

export default IndexPage;
