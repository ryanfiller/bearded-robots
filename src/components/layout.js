import React from "react"

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Fade from '@material-ui/core/Fade';

import Header from "./header"
import SEO from "./seo"

import "../styles/styles.css"

const Layout = (props) => {
  return (
    <>
      <Header 
        location={props.location.pathname}
      />
      <SEO {...props.data} />
      <CssBaseline />
      <Fade in={true} timeout={300}>
        <Container component="main">
          {props.children}
        </Container>
      </Fade>
    </>
  )
}

export default Layout
