const React = require('react')
const gatsby = jest.requireActual('gatsby')

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(({ to, ...rest }) =>
    React.createElement('a', {
      ...rest,
      'aria-current': 'page',
      className: '',
      onClick: Function,
      onMouseEnter: Function,
      href: to,
    })
  ),
  StaticQuery: jest.fn(),
}
