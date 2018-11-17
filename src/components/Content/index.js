/**
 * Created by vaibhav on 31/3/18
 */
import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

const Content1 = ({ content, size1, size2, imgSrc, className }) => (
  <div className={className + ' ' + 'columns'}>
  <div className={size1 + ' column`' }>
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />

  </div>
  <div className={size2 + ' column`' }>

  <img src={imgSrc} alt=''/>

  </div>


  </div>
)

Content.propTypes = {
  content: PropTypes.string,
  className: PropTypes.string
}

HTMLContent.propTypes = Content.propTypes

export default Content
