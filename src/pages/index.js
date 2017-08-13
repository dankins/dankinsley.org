import React from 'react'
import Link from 'gatsby-link'
import { Card, Grid } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const IndexPage = () =>
  <div>
    <Card as={Link} to="/cryptography/caesar">
      <Card.Content>
        <Card.Header>Caesar Cypher</Card.Header>
        <Card.Meta>2017-08-12</Card.Meta>
        <Card.Description>An example of one of the earliest uses of cryptography.</Card.Description>
      </Card.Content>
    </Card>
  </div>

export default IndexPage
