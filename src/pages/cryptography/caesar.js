import React from 'react'
import { Card, TextArea, Input, Segment, Header, Dropdown, Label, Grid } from 'semantic-ui-react'
import Link from 'gatsby-link'

function cypher(plaintext, shift){
  return Array.apply(null, Array(plaintext.length))
    .map( (_, i) => {
      const code = plaintext.charCodeAt(i) + shift
      return String.fromCharCode(code)
    }).join("")
}

function decypher(cyphertext, shift){
  return Array.apply(null, Array(cyphertext.length))
    .map( (_, i) => {
      const code = cyphertext.charCodeAt(i) - shift
      return String.fromCharCode(code)
    }).join("")
}

export default class CaesarCypher extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      shift: 1,
      plaintext: "The quick brown fox jumped over the lazy dog"
    }
  }
  componentDidMount(){
    this.updateCypher()
  }
  plaintextChange = (e, data) => {
    const nextState = Object.assign({}, this.state, { plaintext: data.value })
    this.setState(nextState, this.updateCypher)
  }
  shiftChange = (e, data) => {
    const nextState = Object.assign({}, this.state, { shift: data.value })
    this.setState(nextState, this.updateCypher)
  }
  shiftOptions = Array.apply(null, Array(26)).map( (_, i) => ({ key: i, value: i, text: i }))
  updateCypher = () => {
    const cyphertext = cypher(this.state.plaintext, this.state.shift)
    const decyphertext = decypher(cyphertext, this.state.shift)
    const nextState = Object.assign({}, this.state, { cyphertext: cyphertext, decypher: decyphertext })
    this.setState(nextState)
  }
  render(){
    return (
      <Segment.Group>
        <Header as="h2" attached>Caesar Cypher</Header>
        <Segment>
          <Grid columns={2}>
            <Grid.Row>
              <Grid.Column width="2">Shift</Grid.Column>
                <Grid.Column>
                  <Dropdown search selection
                    placeholder='Shift'
                    options={this.shiftOptions}
                    value={this.state.shift}
                    onChange={this.shiftChange}
                  />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="2">Plaintext</Grid.Column>
                <Grid.Column>
                  <TextArea fluid placeholder='Enter plain text to encrypt' value={this.state.plaintext} onChange={ this.plaintextChange }/>
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment>
          <Header as="h5">Plain Text</Header>
          <div>{this.state.plaintext}</div>
        </Segment>
        <Segment>
          <Header as="h5">Cypher Text</Header>
          <div>{this.state.cyphertext}</div>
        </Segment>
        <Segment>
          <Header as="h5">Decypher Text</Header>
          <div>{this.state.decypher}</div>
        </Segment>
        <Segment>
          <Link to="/">Go back to the homepage</Link>
        </Segment>
      </Segment.Group>
    )
  }
}
