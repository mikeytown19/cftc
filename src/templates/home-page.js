/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Offerings from '../components/Offerings'
import Testimonials from '../components/Testimonials'
import Logo from '../img/main-logo.png'
import NavImg from '../img/nav-img.jpg'

export const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials,
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <div className="bg-home">
      <section className='section is-bold'>
        <div className='flex-center'>
          <img src={Logo} alt='' className="main-logo"/>
          <span className="color-white is-size-4">+</span>
          <p className='color-white font-large text-center'>Parisi Speed School</p>
          <div>
              <a
                className='button is-white is-outlined margin-right' to='/contact'>Explore
              </a >
              <a
                className='button is-white is-outlined' href="https://crossfittheclub.pike13.com/welcome" target="_blank">Sign Up
              </a >


          </div>
        </div>
    </section>
    </div>


      <div className='container'>

<div className=''>
  <div className='columns'>

     <div className='column is-6'>
      <div className='content'>
        <div style={{textAlign: 'center'}}>
          <img src={NavImg} alt='' style={{height: '200px',margin: '50px 0px'}}/>

        </div>
        {/* <Offerings gridItems={offerings.blurbs} />
        <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
        <Testimonials testimonials={testimonials} /> */}
      </div>
    </div>
    <div className='column is-6'>
      <div className='content'>
        <div>
          <h3 className='has-text-weight-semibold is-size-2' style={{marginTop: 50+'px'}}>

            {heading}
          </h3>
          <p>{description}</p>
        </div>
        {/* <Offerings gridItems={offerings.blurbs} />
        <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
        <Testimonials testimonials={testimonials} /> */}
      </div>
    </div>
  </div>
</div>
</div>

    <div className='bg-lindsay'>
      <div className='container'>
          <div className='columns'>
              <div className='column is-7 is-offset-1'>
                <div className='content'>
                  <div>
                    <h3 className='has-text-weight-semibold is-size-2 color-white' style={{marginTop: 50+'px', color: 'white'}}>
                      Crossfit
                    </h3>
                    <p className="color-white">If you are looking for a healthy change in your lifestyle or a training program that removes the boring and monotonous routine of the “Big Box” gyms, you’ve come to the right place. CrossFit The Club is one of Utah’s premier CrossFit facilities, training people from all walks of life. Our community atmosphere and top notch programming has proven time and again to be effective in helping individuals achieve their fitness goals.</p>
                  </div>

                </div>
              </div>
            </div>
        </div>
    </div>



      <div className='container'>

        <div className=''>
          <div className='columns'>

          </div>
        </div>
      </div>

  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

const HomePage = ({data}) => {
  const {frontmatter} = data.markdownRemark

  return (
    <HomePageTemplate
      title={frontmatter.title}
      meta_title={frontmatter.meta_title}
      meta_description={frontmatter.meta_description}
      heading={frontmatter.heading}
      description={frontmatter.description}
      offerings={frontmatter.offerings}
      testimonials={frontmatter.testimonials}
    />
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default HomePage

export const pageQuery = graphql`
  query IndexPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        meta_title
        meta_description
        heading
        description
        offerings {
          blurbs {
            image
            text
          }
        }
        testimonials {
          author
          quote
        }
      }
    }
  }
`
