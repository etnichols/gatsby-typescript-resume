import { graphql, StaticQuery } from 'gatsby'
import React, { FC } from 'react'
import Icon from '../components/icon'
import Layout from '../components/layout'

import { Duration, Entry, Resume, Section } from '../@types/resume.d.ts'
import data from '../data/resume'
import './resume.scss'

const Page: FC<> = () => {
  return (
    <Layout>
      <RenderResume {...data} />
    </Layout>
  )
}

const RenderResume: FC<Resume> = ({ sections }) => {
  return (
    <>
      <ResumeTitle />
      <div className="resume-body">
        {sections.map(section => (
          <RenderSection key={`section-${section.title}`} {...section} />
        ))}
      </div>
    </>
  )
}

const ResumeTitle: FC<> = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              author
              location
              description
              email
              linkedin
              github
              medium
            }
          }
        }
      `}
      render={data => {
        const {
          author,
          location,
          email,
          github,
          linkedin,
          medium,
          description,
        } = data.site.siteMetadata

        const iconsWithLinks = [
          ['email', `mailto:${email}`],
          ['github', github],
          ['linkedin', linkedin],
          ['medium', medium],
        ]

        return (
          <div className="resume-title">
          <h1 className="resume-name">{author}</h1>
          <h5 className="title-section-description">
            {location}
          </h5>
            <div className="icon-section">
              {iconsWithLinks.map(([icon, href], i) => (
                <a key={`link-${i}`} className="link-icon" href={href}>
                  <Icon key={`link-${i}`} name={icon} />
                </a>
              ))}
            </div>
          </div>
        )
      }}
    />
  )
}

/** Renders a section, a titled list of entries. */
const RenderSection: FC<Section> = ({ title, entries }) => {
  return (
    <section className="section">
      <div className="section-title-container">
        <h2 className="section-title">{title}</h2>
        <div className="section-bar" />
      </div>
      {entries.map((entry, i) => (
        <RenderEntry key={`${title}-entry-${i}`} {...entry} />
      ))}
    </section>
  )
}

/** A single entry, either a job entry or a list of skills. */
const RenderEntry: FC<Entry> = ({
  title,
  link,
  company,
  duration,
  description,
}) => {
  const header = (
    <>
      {title && (
        <h4 className="entry-title">
          {link ? <a href={link}>{title}</a> : title}
        </h4>
      )}
      {company && <h5 className="entry-company">{company}</h5>}
      {duration && (
        <div className="entry-duration">{`${duration.start} - ${
          duration.end
        }`}</div>
      )}
    </>
  )

  const body = Array.isArray(description) ? (
    <ul className="languages">
      {description.map((item, i) => (
        <li key={`languages-${item}-${i}`}>{item}</li>
      ))}
    </ul>
  ) : (
    description
  )

  return (
    <div className="entry">
      {header}
      <div className="entry-description">{body}</div>
    </div>
  )
}

export default Page
