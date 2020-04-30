import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const AuthorBio = props => {
  const { author, github, profileImage, introduction } = props

  return (
    <div className="bio">
      <div className="author">
        <div className="author-description">
          <img
            className="author-image"
            src={profileImage}
            alt={author}
            style={{
              borderRadius: `100%`,
              marginTop: '12px',
              marginRight: '12px',
              marginBottom: '0',
              width: '72px',
              height: '100%',
            }}
          />
          <div className="author-name">
            <span className="author-name-prefix">Written by</span>
            <Link to={'/about'} className="author-name-content">
              <span>@{author}</span>
            </Link>
            <div className="author-introduction">{introduction}</div>
            <p className="author-socials">
              {github && <a href={`https://github.com/${github}`}>GitHub</a>}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthorBio
