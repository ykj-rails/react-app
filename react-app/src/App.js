import React from 'react'
import PropTypes from 'prop-types'
import { Hello } from './Hello'
import { Counter } from './counter'
import { Toggle } from './toggle'

export const App = () => {
  const message = 'HELLO'
  const profiles = [
    {
      name: 'Taro',
      age: 10,
    },
    {
      name: 'Kanna',
      age: 5,
    },
    {
      name: 'noname',
      age: 3,
    },
  ]
  return (
    <React.Fragment>
      <h1>Hello World!!</h1>
      <h1>{message}</h1>
      <Hello />
      <label htmlFor="bar">bar</label>
      <input
        type="text"
        onClick={() => {
          console.log('Hi!')
        }}
      ></input>
      {profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index} />
      })}
      <Counter />
      <Toggle />
    </React.Fragment>
  )
}

const User = (props) => {
  return (
    <p>
      Hi, I am{props.name}, and {props.age} years old!
    </p>
  )
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
}
