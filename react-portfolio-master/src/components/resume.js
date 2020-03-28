import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/71534015_1322602107903808_5900120896638550016_n.jpg?_nc_cat=101&_nc_sid=110474&_nc_ohc=nVtrv8YWOcYAX-3HfwW&_nc_ht=scontent.fkhi6-1.fna&oh=88850d369bd0e585297afa8c0cdc1e47&oe=5EBBB832"
                alt="avatar"
                style={{height: '250px'}}
                 />
            </div>

            <h2 style={{paddingTop: '0.5em', color: 'grey'}}>Rana Abid</h2>
            <h4 style={{color: 'grey'}}>Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>

            <p>I am aBii, a Web Developer with over 3+ years of experience.I am running a successful digital agency that offers a wide range of services including, web design, web development, social media marketing, SEO and Cloud Computing like Dockerize / Containerize your web application and deploys on the Kubernetes. Feel free to reach out to me so we can start planning and discuss your project!. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
            <h5>Address</h5>
            <p>Karachi , Pakistan</p>
            <h5>Phone</h5>
            <p>0306-7318874</p>
            <h5>Email</h5>
            <p>samabii786@gmail.com</p>
            <h5>Website</h5>
            <p>samabii.dx.am</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '100%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2020}
              schoolName="Virtual Universty of Pakistan"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />

               <Education
                 startYear={2019}
                 endYear={2020}
                 schoolName="Axiom Education"
                 schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2016}
              endYear={2018}
              jobName="WordPress Developer"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
                startYear={2019}
                endYear={2020}
                jobName="Full Stack Developer"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                    skill="WordPress"
                    progress={90}
                    />
                    <Skills
                      skill="React"
                      progress={50}
                      />
                      <Skills
                    skill="Php"
                    progress={70}
                    />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
