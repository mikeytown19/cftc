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
import Icon3 from '../img//icons/icon3.svg'
import Icon4 from '../img//icons/icon4.svg'
import Icon2 from '../img//icons/icon2.svg'

function scrollTo(e) {
  console.log(e.target)

  const target = e.target.getAttribute('to');
  const position = document.querySelector(`.${target}`).offsetTop;
  console.log(position.offsetTop);
  window.scrollTo({
    top: position,
    behavior: 'smooth',
  })

}

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
                className='button is-white is-outlined margin-right' to='intro'  onClick={scrollTo}>Explore
              </a >
              <a
                className='button is-white is-outlined' href="https://crossfittheclub.pike13.com/welcome" target="_blank">Sign Up
              </a >


          </div>
        </div>
    </section>
    </div>


      <div className='container intro'>
        <div className='section'>
          <div className='columns'>

            <div className='column is-6'>
              <div className='content'>
                <div style={{textAlign: 'center'}}>
                  <img src={NavImg} alt='' style={{height: '200px'}}/>

                </div>
                {/* <Offerings gridItems={offerings.blurbs} />
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} /> */}
              </div>
            </div>
            <div className='column is-6'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>

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

                    <a className='button is-white is-outlined' href="https://crossfittheclub.pike13.com/welcome" target="_blank">Get Started</a>
                  </div>
                  <br/>

                </div>
              </div>
            </div>
        </div>
    </div>

    <div className='section'>

    <h2 className="text-center is-size-2">Crossfit the Club Classes</h2>
    <br/>
      <div className='container table-container'>

      <table className="table is-bordered is-striped is-narrow  is-fullwidth">
      <thead>
        <tr>
          <th></th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wedensday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>

      </thead>

      <tbody>
        <tr>
          <th>5:00AM </th>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>6:00AM</th>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td></td>
        </tr>
        <tr>
          <th>7:00AM</th>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td></td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td></td>
        </tr>
        <tr>
          <th>9:00AM</th>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td></td>
        </tr>
        <tr>
          <th>10:00AM</th>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td></td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td></td>
        </tr>
        <tr>
          <th>4:00PM</th>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>4:30PM</th>
          <td></td>
          <td>Parisi</td>
          <td></td>
          <td>Parisi</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>5:00PM</th>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>6:00PM</th>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

      </tbody>

      </table>

        </div>
    </div>

    <div className='margin-bottom-small'>

          <div className='container'>
            <div className='columns'>
              <div className='column is-6 margin-auto is-hidden-mobile'>
                <div className='content'>
                  <div style={{textAlign: 'center'}}>
                    <img className='icon-people' src={Icon4} alt=''/>

                  </div>
                </div>
            </div>
              <div className='column is-6'>
                <div className='content'>
                  <div>
                    <h3 className='has-text-weight-semibold is-size-2'>
                      Nutrition
                    </h3>
                    <p>You can’t simply workout from day to day to achieve your fitness goals. It is much bigger than that. In order for you to really become a better athlete, it’s important to focus on how you fuel your body. At CrossFit The Club, we realize that everyone is different. Not one of us is built the same, therefore we don’t believe in one specific diet for everyone. What might work for one person, may not be optimal for another. We offer a wide variety of diet options to utilize with your training. We even offer Diet Coaching Plans from our trainers to those that wish it.</p>

                    <a className='button is-dark is-outlined' href="https://crossfittheclub.pike13.com/welcome" target="_blank">Get Started</a>
                  </div>

                </div>
              </div>
            </div>
        </div>


    </div>

          <div className=''>
        <div className='container'>
          <div className='columns'>


            <div className='column is-6'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>
                  Plans and Passes</h3>
                  <p>High Intensity, Functional Fitness that is constantly varied. Some works will be short and fast other will be long on grueling. Our goal at CrossFit The Club is to become better and the 10 General Physical Skill of fitness. Endurance, stamina, strength, flexibility, power, speed, coordination, agility, balance, accuracy </p>
                  <a className='button is-dark is-outlined' href="https://crossfittheclub.pike13.com/shop" target="_blank">Learn More</a>
                </div>
              </div>
            </div>

            <div className='column is-6 margin-auto is-hidden-mobile'>
              <div className='content'>
                <div style={{textAlign: 'center'}}>
                  <img className='icon-people' src={Icon3} alt=''/>

                </div>
                {/* <Offerings gridItems={offerings.blurbs} />
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='columns'>
          <div className='column is-6 margin-auto'>
            <div className='content'>
              <div style={{textAlign: 'center'}}>
                <img className='icon-people is-hidden-mobile' style={{maxWidth:'155px'}} src={Icon2} alt=''/>

              </div>
            </div>
        </div>
          <div className='column is-6'>
            <div className='content'>
              <div>
                <h3 className='has-text-weight-semibold is-size-2'>
                  Playcare
                </h3>
                <p>Parents we have you covered with Playcare. You need some time for yourself and time to workout with no one bothering you.  We will have a separate room for your children with adult supervision to keep them entertained while you workout! </p>
              </div>

            </div>
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
