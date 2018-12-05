import React from 'react'
import { render } from 'react-testing-library'
import { StaticQuery } from 'gatsby'
import NotFound from '../../src/pages/404'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `GatsbyJS`,
        },
      },
    })
  )
})

describe(`404`, () => {
  it(`contains NOT FOUND text`, () => {
    const { getByText } = render(<NotFound />)

    const element = getByText(`NOT FOUND`)

    expect(element).toBeInTheDocument
  })

  it(`contains NOT FOUND message`, () => {
    const { getByText } = render(<NotFound />)

    const element = getByText(
      `You just hit a route that doesn't exist... the sadness.`
    )

    expect(element).toBeInTheDocument
  })
})
