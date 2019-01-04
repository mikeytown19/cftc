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
  const target = e.target.getAttribute('to');
  const position = document.querySelector(`.${target}`).offsetTop;
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
                className='button is-white is-outlined margin-right' href="https://crossfittheclub.pike13.com/welcome" target="_blank">Classes
              </a >
              <a
                className='button is-white is-outlined' href="https://crossfittheclub.pike13.com/welcome" target="_blank">Sign Up
              </a >


          </div>
        </div>
    </section>
    </div>


      <div className='section intro'>
        <div className=''>
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

      <div className='margin-bottom-small nutrition bg-greens'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-8'>
            <div className='content'>
              <div>
                <br/>
                <h3 className='has-text-weight-semibold is-size-2 color-white ' style={{color: 'white'}}>
                LEAN IN 2019 NUTRITION CHALLENGE
                </h3>
                <p>The holiday's are officially over!  That means it is time to get on those 2019 nutrition goals.  What better way to get started than with a community challenge.  </p>

                <br/>
                <h4 className="has-text-white">Here are the details:</h4>
                <ul>
                  <li className="has-text-white"> Start date: Tuesday January 15th</li>
                  <li className="has-text-white"> End date: Tuesday February 19th</li>
                  <li className="has-text-white"> Cost: $50</li>
                  <li className="has-text-white"> 1 top male & 1 top female will receive a cash prize. </li>
                  <li className="has-text-white"> We will have plenty of opportunities to win great stuff throughout the challenge.  Including a chance to win a 12 week                   one-on-one nutrition coaching plan to be used anytime throughout 2019.                  </li>
                </ul>

                <h4 className="has-text-white"><u>What are the RULES?</u>  <br/>
                  NO sugar! <br/>
                  NO processed foods! <br/>
                  NO alcohol or soda!</h4>
                  <p className='has-text-white'>In addition to these rules participants will be asked to do the following as part of a point system that will contribute to your eligibility to win the challenge:</p>
                  <ul>
                    <li className="has-text-white">Get a minimum of 7 hours of sleep each night</li>
                    <li className="has-text-white">Eight to ten 8 oz glasses of water daily</li>
                    <li className="has-text-white">Weekly submission of a food journal & score sheet, which will include a weekly check-in of body weight from home.</li>
                  </ul>
                  <p className='has-text-white'>Each week a new challenge that may involve nutrition, fitness or even well-being will be released.  Participants will also be educated along the way on proper nutrition. <br/> <br/> As a participant you will be given the option to follow macro-nutrient plan or just eat healthy approved foods for the 6 weeks. Both ways will require a weekly journal submission.  Details of that will be discussed at the challenge meeting.</p>
                  <h4 className='has-text-white'>OTHER IMPORTANT DATES:</h4>
                  <ul>
                    <li className='has-text-white'> <u>Wednesday January 10th</u> - Challenge meeting to go over EVERYTHING.  Starts @ 7:00 p.m. at CFTC.  Starting weight & measurements will be taken after the meeting.</li>
                    <li className="has-text-white"> <u>Tuesday February 19th</u> - End of challenge weigh-ins & measurements.  7:00 p.m. at CFTC.</li>
                    <li className="has-text-white"><u>Friday February 22nd</u> - Challenge winners will be announced at our first Friday Night Lights & start of the 2019 Crossfit Open.</li>
                    <br/>

                    <h4 className="has-text-white">Are you ready?  If you are in simply click on the link below & complete the assessment.  Instructions for payments will be given there.  </h4>
                    <a href='https://goo.gl/forms/DZHjX0NT2OPo1zhv1'><u>https://goo.gl/forms/DZHjX0NT2OPo1zhv1</u></a>
                    <br/>
                    <h3 className='has-text-white'>Today is the day to make it happen!!  Time to get leaner, happier, & healthier.  </h3>
                    <p>Email any inquiries or questions to Brooke: <a href='mailto:cftcdiet@gmail.com'><u>cftcdiet@gmail.com</u></a> </p>



                  </ul>
                <br/>
                <br/>
              </div>

            </div>
          </div>
        </div>
      </div>
   </div>


    <div className='bg-lindsay about'>
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

    <div className='section schedule'>

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
          <td className="has-text-danger">Parisi</td>
          <td className="has-text-danger">Parisi</td>
          <td className="has-text-danger">Parisi</td>
          <td className="has-text-danger">Parisi</td>
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
          <th>5:30PM</th>
          <td className="has-text-danger">Parisi</td>
          <td className="has-text-danger">Parisi</td>
          <td className="has-text-danger">Parisi</td>
          <td className="has-text-danger">Parisi</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>6:00PM</th>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td>Crossfit</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th>6:30PM</th>
          <td className="has-text-danger">Parisi</td>
          <td className="has-text-danger">Parisi</td>
          <td className="has-text-danger">Parisi</td>
          <td className="has-text-danger">Parisi</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

      </tbody>

      </table>

        </div>
    </div>





    <div className='margin-bottom-small bg-turf'>
      <div className='container'>
        <div className='columns'>
          <div className='column is-8'>
            <div className='content'>
              <div>
                <br/>
                <h3 className='has-text-weight-semibold is-size-2 color-white ' style={{color: 'white'}}>
                  Parisi Speed School
                </h3>
                <p>Parisi has been training teams and individuals for over 20 years. Our proven methods has help teams and individuals of all sports improve their game, increase self confidence and compete at the highest level. Sessions types are made up of Linear Speed Sessions, Change of Direction Sessions, and Total Body Strength Sessions..</p>

                <br/>
                <h4 className="has-text-white">Sessions</h4>
                <p>There are 3 different types of sessions that make up the different programs at the Parisi Speed School. Depending on your athletes particular needs and the program you select from the list, he or she will be recommended to take part in certain types of training sessions. When your athlete is in the facility performing a specific session listed below, the focus described will be what they work on that day.</p>
                <ul className="color-white has-text-white">
                  <li className="has-text-white">Linear Speed Sessions: The main portion of these sessions focus on the signature Parisi straight ahead acceleration and top speed running techniques. These sessions all begin with the dynamic warm-up and conclude with a cool down.</li>
                  <li className="has-text-white">Change Of Direction: the main portion of these sessions focus on agility and on athletes ability to move in any direction quickly. These sessions all begin with a dynamic warm-up and conclude with a cool down.</li>
                  <li className="has-text-white">Total Body Strength Sessions: These sessions focus on a dynamic warm-up along with a Strength Training Program. This combination of total body strength and flexibility is critical to providing a faster, stronger, less injury prone athlete.</li>
                </ul>
                <br/>


                <a className='button is-white is-outlined' href="https://crossfittheclub.pike13.com/welcome" target="_blank">Get Started</a>
                <br/>
                <br/>
              </div>

            </div>
          </div>
        </div>
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

          <div className='plans'>
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

      <div className='contact'>
      <div className="section">
      <section className="columns">


        <div className="column is-6">
        <p className="title">Contact Us</p>
        <p>So you’re interested in changing your lifestyle to a healthier and more fulfilling one. Well you’ve come to the right place. Take a moment to fill out the form below and one of our coaches will be in contact with you soon. Thank you!</p>
        <br/>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
        <div data-netlify-recaptcha></div>
        <p className='hidden'>
          <input type="hidden" name="bot-field" />
        </p>
         <div className="field">
          <label className="label" for="name">Name</label>
          <div className="control">
            <input className="input" type="text"id="name" name="name" placeholder="Full Name" />
          </div>
        </div>


        <div className="field">
          <label className="label" for="email">Email</label>
          <div className="control">
            <input className="input" type="email" name="email"id="email"placeholder="Email" />
          </div>
        </div>


        <div className="field">
          <label className="label" for="number">Number</label>
          <div className="control">
            <input className="input" type="tel" id="number" name="number"placeholder="Phone Number" />
          </div>
        </div>

        <div className="field">
          <label className="label" for="message">Message</label>
          <div className="control">
            <textarea className="textarea" id="message" name="message"placeholder="Write us"></textarea>
          </div>
        </div>

        <div className="field is-grouped">

          <div className="control">
            <button type="submit" className="button is-primary">Submit</button>
          </div>
          <div className="control">
            <button className="button is-text">Cancel</button>
          </div>
        </div>


      </form>

        </div>


      </section>


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
