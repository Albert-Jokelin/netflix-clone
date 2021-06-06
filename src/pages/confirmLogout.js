import React, { useContext } from 'react';
import { FirebaseContext } from '../context/firebase'
import { Form, Header } from '../components'
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';
import { FooterContainer } from '../containers/footer';

export default function ConfirmLogout() {
  console.log('Hey I\'ve logged out' )
  const { firebase } = useContext(FirebaseContext);
  firebase.auth().signOut();

  const myStyles = {
    color: "white",
    fontSize: "20px",
  }

  return(
    <>
      <Header src="logout">
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        </Header.Frame>
        <Form>
        <Form.Base>
          <Form.Title>Leaving So Soon?</Form.Title>
          <div style={myStyles}>Just so you know, you don’t always need to sign out of Netflix. It’s only necessary if you’re on a shared or public computer.<br /> <br /> Click the logo to return to the main page.</div>
        </Form.Base>
      </Form>
      </Header>

      <FooterContainer />
    </>
  )
}
