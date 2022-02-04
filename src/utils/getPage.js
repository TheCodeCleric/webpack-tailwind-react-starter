import React from 'react'

import CIndex from '../components/components.index'

const { Page } = CIndex

export const getPage = (title, component, props) => () =>
  <Page title={title} Component={component} props={props} />

export default getPage
