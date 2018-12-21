import { graphql } from 'gatsby'
import React from 'react'
import Card from 'react-bootstrap/lib/Card'
import Col from 'react-bootstrap/lib/Col'
import ListGroup from 'react-bootstrap/lib/ListGroup'
import Row from 'react-bootstrap/lib/Row'
import Layout from '../components/layout'
import AvatarImage from '../images/me.jpg'
import styles from './index.module.css'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges: employmentHistory },
  },
}) => (
  <Layout>
    <Row>
      <Col>
        <h3 className={styles.biographyHeader}>Biography</h3>
        <div className={styles.biocontainer}>
          <img
            className={styles.avatar}
            src={AvatarImage}
            height={100}
            alt="Portrait of Christian"
          />
          <p className={styles.profile}>
            I have been programming for 13 years, starting at the age of 12. I
            am interested in working with iOS mobile software, web development,
            and software engineering, especially in a functional style. My
            especially broad knowledge and high adaptability is due to much of
            my experience coming from personal experience in open source
            software. I am looking for a full-time position in front-end or
            full-stack software engineering.
          </p>
        </div>
        <h3>Employment History</h3>
      </Col>
    </Row>
    <Row>
      {employmentHistory.map(
        ({
          node: {
            id,
            html,
            frontmatter: { title, subtitle },
          },
        }) => (
          <Col key={id} lg="6" style={{ marginBottom: '2rem' }}>
            <Card>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {subtitle}
                </Card.Subtitle>
                <Card.Text dangerouslySetInnerHTML={{ __html: html }} />
              </Card.Body>
            </Card>
          </Col>
        )
      )}
    </Row>
    <Row>
      <Col>
        <h3>Education</h3>
        <p>
          <b>Virginia Tech</b> — Computer Science, Fall 2018
        </p>
        <h3>Skills</h3>
      </Col>
    </Row>
    <Row style={{ marginBottom: '2rem' }}>
      <Col xs="6">
        <ListGroup>
          <ListGroup.Item>iOS, XCode, Swift, MVC</ListGroup.Item>
          <ListGroup.Item>Javascript/ES6 (babel, webpack)</ListGroup.Item>
          <ListGroup.Item>Node.js and npm/yarn</ListGroup.Item>
          <ListGroup.Item>React, Redux, Next.js, Gatsby</ListGroup.Item>
          <ListGroup.Item>RxJS, RxSwift, MVVM</ListGroup.Item>
          <ListGroup.Item>GraphQL/Apollo</ListGroup.Item>
        </ListGroup>
      </Col>
      <Col xs="6">
        <ListGroup>
          <ListGroup.Item>HTML, CSS and SASS</ListGroup.Item>
          <ListGroup.Item>Functional Programming, Elm</ListGroup.Item>
          <ListGroup.Item>Elixir, OTP, distributed systems</ListGroup.Item>
          <ListGroup.Item>Git/Github and open source</ListGroup.Item>
          <ListGroup.Item>
            <a href="https://github.com/ankhers/mongodb/blob/master/lib/mongo/topology_description.ex">
              MongoDB
            </a>
            , PostgreSQL, Firebase
          </ListGroup.Item>
          <ListGroup.Item>Linux, OS X and Windows</ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/employment//" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            subtitle
            date
          }
        }
      }
    }
  }
`
