import React from 'react';
import { Grid, Image, Icon, Header } from 'semantic-ui-react';

/** A simple static component to render some text for the landing page. */
class Landing extends React.Component {
  render() {
    return (
        <div className={'digitsBG'}>
          <Grid stackable centered columns={3} container>

            <Grid.Column textAlign='center'>
              <Icon name='users' size='huge' > </Icon>
              <Header as='h1' >Multiple Users</Header>
              <Header as='h3' >This address book enables any number of
                users to register and save their business contacts.
                You can only see the contacts you have created.
              </Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Icon name='file alternate' size='huge' > </Icon>
              <Header as='h1' >Contact Details</Header>
              <Header as='h3' >For each contact, you can save their name, address and phone number
              </Header>
            </Grid.Column>
            <Grid.Column textAlign='center'>
              <Icon name='calendar check' size='huge' > </Icon>
              <Header as='h1' >Multiple Users</Header>
              <Header as='h3' >Each time you make contact with a contact
                you can wrtie a note that summarized the conversation. This note is saved along with a timestamp of the contact.
              </Header>
            </Grid.Column>

          </Grid>
        </div>
    );
  }
}

export default Landing;
