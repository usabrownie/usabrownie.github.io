import React from 'react';

import Layout from '../components/Layout';

import codepath from '../assets/images/codepath.jpg';
import codeorange from '../assets/images/code_orange_logo.jpg';
import wece from '../assets/images/wece.jpg';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>Outreach</h2>
          <p></p>
        </div>
      </header>

      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
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
        </section>
      </section>
    </section>
  </Layout>
);

export default IndexPage;
