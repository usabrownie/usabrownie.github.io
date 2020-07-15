import React from 'react';

import Layout from '../components/Layout';

// import pic1 from '../assets/images/pic01.jpg';
// import pic2 from '../assets/images/pic02.jpg';
// import pic5 from '../assets/images/pic05.jpg';
// import pic6 from '../assets/images/pic06.jpg';
// import pic7 from '../assets/images/pic07.jpg';
// import pic8 from '../assets/images/pic08.jpg';
// import me from '../assets/images/LinkedIn.jpg';

const graduationCap = 'fa-graduation-cap';
const work = 'fa-briefcase';
const IndexPage = () => (
  <Layout fullMenu>
    <section id="wrapper">
      <header>
        <div className="inner">
          <h2>About me</h2>
          <p>Lover of grilled cheese and GraphQL</p>
        </div>
      </header>

      <div className="wrapper">
        <div className="inner">
          <section>
            <div className="inner">
              <h3 className="major">Background</h3>
              {/* <p> */}
              {/* <span className="image left">
                  <img height="200px" src={me} alt="" />
                </span> */}
              <p>
                As a software engineer, my goals are to improve diversity and
                inclusion in the tech industry and to leverage my technical
                skills to benefit others. I aim to involve myself in as many
                projects as I can that align with both of these goals.{' '}
              </p>
              {/* <p>
                  In 2019, I graduated from The Univeristy of Texas at Austin
                  with a{' '}
                  <strong>BS in Electrical and Computer Engineering</strong>{' '}
                  with a specialization in Software Engineering &amp; Design.
                  Since then, I have been working in the industy as a Software
                  Engineer.{' '}
                </p>
                <p>
                  Concurrently, I am attending Georgia Institute of Technology
                  part time in pursuit of my{' '}
                  <strong>MS in Computer Science</strong> with a specialization
                  in Interactive Intelligence. I will combine the skills that I
                  learn in industry
                </p> */}
              <ul className="contact">
                <li className={graduationCap} key={'hi'}>
                  In 2019, I graduated from The Univeristy of Texas at Austin
                  with a{' '}
                  <strong>BS in Electrical and Computer Engineering</strong> ,
                  specializing in Software Engineering &amp; Design.
                </li>
                <li className={work} key={'idk'}>
                  Since then, I have been working in the industry as a Software
                  Engineer.
                </li>
                <li className={graduationCap} key={'hi'}>
                  Concurrently, I am attending Georgia Institute of Technology
                  part time in pursuit of my{' '}
                  <strong>MS in Computer Science</strong> with a specialization
                  in Interactive Intelligence.
                </li>
              </ul>
              {/* </p> */}
            </div>
          </section>

          {/* <br></br>
          <br></br> */}
          {/* <section>
            <div className="inner">
              <h3 className="major">Skills</h3>
              <p>
                <strong>Languages</strong>
              </p>
              <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <ul>
                  <li>React (Gatsby, React Native)</li>
                  <li>Node</li>
                </ul>
                <li>Python</li>
              </ul>
            </div>
          </section> */}
          {/* <section>
            <div className="inner">
              <h3 className="major">Skills</h3>
              <ul className="contact">
                <p>Databases</p>
                <div className="row">
                  <div className="col-4 col-12-medium">
                    <li className={`fa-database`} key={'hi'}>
                      MongoDB
                    </li>
                  </div>
                  <div className="col-4 col-12-medium">
                    <li className={`${graduationCap}`} key={'hi'}>
                      Firebase Realtime Database
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </section> */}

          <section>
            <div className="inner">
              <h3 className="major">Resume</h3>
              <iframe
                title="Resume"
                style={{ border: `1px solid rgba(0, 0, 0, 0.1)` }}
                width="400"
                height="500"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FWbT09Tn0HKv18F3hrAIsBp%2FResume%3Fnode-id%3D0%253A1&chrome=DOCUMENTATION"
                allowfullscreen
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
