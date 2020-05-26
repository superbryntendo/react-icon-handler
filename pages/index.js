import styled from 'styled-components'
import Icon from '../components/icon'

const list = ['', 'instagram', 'check-fill','check-path', 'archive']
const sizes = [32, 24, 16, 12, 8]

export default function Home() {
  
  
  return list.map(glyph => <Icon glyph={glyph} />)
}
