import React from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"
import RecipesList from "../components/RecipesList"
import SEO from '../components/SEO'

const Contact = ({ data }) => {
  const recipes = data.allContentfulRecipe.nodes
    return (
        <Layout>
          <SEO title="Contact" />
          <main className="page">
              <section className="contact-page">
              <article className="contact-info">
            <h3>Have a Question? Get In Touch 😁</h3>
            <h4>Reason to reach out</h4>
            <p>
           We Share Food Lovers Recipes from around the world!
            </p>
            <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
            <p>
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>
          <article>
            <form className="form contact-form"
            action="https://formspree.io/f/xayaylyr"
            method="POST">

              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="name">your phone</label>
                <input type="number" name="phone" id="phone" placeholder="416-444-4444" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
              </section>
              <section className="featured-recipes">
          <h5>Look at this Awesomesouce!</h5>
          <RecipesList recipes={recipes} />
       
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
export default Contact
