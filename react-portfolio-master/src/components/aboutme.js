import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';



class About extends Component {
  render() {
    return(
      <div>
       <Grid className="contact-grid">
          <Cell col={6}>
            <h1>Rana Abid</h1>
            <img
              src="https://scontent.fisb5-1.fna.fbcdn.net/v/t1.0-9/p960x960/45595165_1092490750914946_3590522247762149376_o.jpg?_nc_cat=106&_nc_sid=05277f&_nc_ohc=GOxMBSdmm-kAX-BY1Kl&_nc_ht=scontent.fisb5-1.fna&_nc_tp=6&oh=446fca93831cddcb60f257a78a8942d2&oe=5EC1F4C2"
              alt="avatar"   
              style={{height: '400px', width: '350px'}}
               />
            
          </Cell>
          <Cell col={6}>

            <div className="contact-list">
            <p style={{ width: '75%', margin: 'auto', paddingTop: '10em'}}>I am aBii, a Web Developer with over 3+ years of experience.I am running a successful digital agency that offers a wide range of services including, web design, web development, social media marketing, SEO and Cloud Computing like Dockerize / Containerize your web application and deploys on the Kubernetes. Feel free to reach out to me so we can start planning and discuss your project!</p>
            <p style={{ width: '75%', margin: 'auto', paddingTop: '3em'}}>I am aBii, a Web Developer with over 3+ years of experience.I am running a successful digital agency that offers a wide range of services including, web design, web development, social media marketing, SEO and Cloud Computing like Dockerize / Containerize your web application and deploys on the Kubernetes. Feel free to reach out to me so we can start planning and discuss your project!</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
