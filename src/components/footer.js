import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import CallIcon from '@material-ui/icons/Call'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Footer = () => (

    <footer
        style={{
            background : `#181818`,
            marginTop : `3rem`,
            position: `relative`,
            height: `30rem`,
        }}
     >
    <div style={{
        marginTop:`3rem`,
    }}>   
    <h3
          style={{
            color: `white`,
            marginLeft : `15rem`,
            marginTop : `3rem`,
            textDecoration: `none`,
            display: "inline-block",
            position: `absolute`
            
          }}
        >
          Resources
          <h4 style={{
              marginTop: `2rem`,
              position: `absolute`,
          }}>
        <Link to="/"
          style={{
            textDecoration: `none`,
            color:`#b69b9b`,
          }}      
         > Books and Guides<br></br>
          Blog<br></br>
          Changelog <br></br>
          Help Center<br></br>
          Status Page<br></br>
          Support<br></br>
          </Link>
          </h4>
      </h3>   
      <h3
          style={{
            color: `white`,
            marginLeft : `35rem`,
            marginTop : `3rem`,
            textDecoration: `none`,
            display: "inline-block",
            position: `absolute`
          }}
        >
          Company
          <h4 style={{
              position: `absolute`,
             
              marginTop: `2rem`,
              
          }}>
    <Link to="/"
          style={{
            textDecoration: `none`,
            color:`#b69b9b`,
            marginTop: `2rem`,
          }}>
          Books and Guides<br></br>
          Blog<br></br>
          Changelog <br></br>
          Help Center<br></br>
          Status Page<br></br>
          Support<br></br>
          </Link>
          </h4>
      </h3>
      <h3
          style={{
            color: `white`,
            marginLeft : `55rem`,
            marginTop : `3rem`,
            display: "inline-block",
            
          }}
        >
          Features
          <h4 style={{
              marginTop: `2rem`,
          }}>
          <Link to="/"
          style={{
            textDecoration: `none`,
            color:`#b69b9b`,
          }}
          > Books and Guides<br></br>
          Blog<br></br>
          Changelog <br></br>
          Help Center<br></br>
          Status Page<br></br>
          Support<br></br>
          </Link>
          </h4>
          
        </h3>
      </div>  

      <div style={{marginLeft:`10rem `, marginTop:`9rem` }}>
          <Link to="/"> <FacebookIcon style={{color:`#b69b9b`}}/> </Link>
          <Link to="/"><TwitterIcon style={{color:`#b69b9b` ,marginLeft:`3rem `}}/></Link>
          <Link to="/"><LinkedInIcon style={{color:`#b69b9b` ,marginLeft:`3rem `}}/></Link>
          <Link to="/"><CallIcon style={{color:`#b69b9b` ,marginLeft:`3rem `}}/></Link>
      </div>
      <div ><h6 style={{ position:`absolute`, marginLeft:"55rem", marginTop:"-1.5rem", color:`#b69b9b`}}><Link to="/" style={{textDecoration:`none`, color:`white`}}>
          © KLOUDLEARN.</Link> 2020 ALL RIGHTS RESERVED</h6></div>
    </footer>

)

export default Footer