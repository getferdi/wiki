import React from "react"

import {
  FooterContainer,
  SupportLink
} from '../styles/footer'
import buildInfo from './buildInfo.json';

const Footer = () => {
  return (
    <FooterContainer>
      <SupportLink href="https://github.com/vantezzen/sprous">
        powered by <span role="img" aria-label="sprout emoji">🌱</span>sprous
      </SupportLink>

      <div className={'published'}>Published on: {buildInfo.date}</div>
    </FooterContainer>
  )
}

export default Footer
