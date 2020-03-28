import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Rana Abid</h2>
            <img
              src="https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/67909158_1290721264425226_3790081653993373696_o.jpg?_nc_cat=107&_nc_sid=dd9801&_nc_ohc=rZESpEsICvoAX9v-bXP&_nc_ht=scontent.fkhi6-1.fna&oh=adce49781531e86726fb6c385b66b0bf&oe=5EF30F31"
              alt="avatar"   
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>I am aBii, a Web Developer with over 3+ years of experience.I am running a successful digital agency that offers a wide range of services including, web design, web development, social media marketing, SEO and Cloud Computing like Dockerize / Containerize your web application and deploys on the Kubernetes. Feel free to reach out to me so we can start planning and discuss your project!</p>

          </Cell>
          <Cell col={6}>
            <h1>Contact Me</h1>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    0306-7318874
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-instagram" aria-hidden="true"/>
                    aBii Rajput
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    samabii786@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-facebook" aria-hidden="true"/>
                    Rana Abid
                  </ListItemContent>
                </ListItem>


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
