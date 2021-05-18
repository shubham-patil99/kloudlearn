import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import Body from "../components/body"

const IndexPage = () => (
 <>
   <div>
   <Header />
   </div>

   <div>
        
    <Body />

   </div>

   <div>
   <Footer />
  </div>
</>
)

export default IndexPage

