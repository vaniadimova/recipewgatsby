import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from "gatsby-plugin-image"
import {Link, graphql} from 'gatsby'
import RecipesList from "../components/RecipesList"
import SEO from '../components/SEO'


const About = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
    return (
        <Layout>
          <SEO title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>World's most delicious dishes </h2>
            <p>
         
Delicious meals are tasty, appetizing, scrumptious, yummy, 
luscious, delectable, mouth-watering, fit for a king, delightful, 
lovely, wonderful, pleasant, enjoyable, appealing, enchanting, charming.
            </p>
           
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="Person Pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
        <RecipesList  recipes={recipes}/>
        </section>
      </main>  
    </Layout>
    )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`


export default About
