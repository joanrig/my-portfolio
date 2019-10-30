import React from 'react'
import { Image, Reveal, Popup } from 'semantic-ui-react'
import joanrig from './joanrig.jpg'
import memoji from './joan-memoji.png'


const Fade = () => (
  <Reveal animated='fade'>
    <Reveal.Content visible>
      <Image src={joanrig} size='small' />
    </Reveal.Content>
    <Reveal.Content hidden>
      <Image src={memoji} size='small' />
    </Reveal.Content>
  </Reveal>
)

export default Fade
