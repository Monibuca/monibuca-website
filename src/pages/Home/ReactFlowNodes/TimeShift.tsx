import React, { memo } from 'react'
import Base from './Base'
import { FlowContext } from './Node'

const TimeShift = memo<{ isMobile: boolean }>(function ({ isMobile }) {
  const ctx = new FlowContext({
    isMobile,
    sourceType: false,
    playType: false,
    nodes: []
  })
  ctx.pipe(
    {
      id: 'publisher',
      position: { x: isMobile ? 0 : 150, y: 10 },
      data: { label: 'Publisher' }
    },
    {
      id: '1s',
      position: { x: isMobile ? 100 : 250, y: 100 },
      style: { background: '#eee', width: 40, height: 30 },
      data: { label: '1s' }
    },
    {
      id: '2s',
      position: { x: isMobile ? 100 : 250, y: 150 },
      style: { background: '#eee', width: 40, height: 30 },
      data: { label: '2s' }
    },
    {
      id: '3s',
      position: { x: isMobile ? 100 : 250, y: 200 },
      style: { background: '#eee', width: 40, height: 30 },
      data: { label: '3s' }
    },
    {
      id: '4s',
      position: { x: isMobile ? 100 : 250, y: 250 },
      style: { background: '#eee', width: 40, height: 30 },
      data: { label: '4s' }
    },
    {
      id: 'Subscriber',
      position: { x: isMobile ? 0 : 150, y:  300 },
      data: { label: 'Subscriber' }
    }
  )
  ctx.config = `global:
  publish:
    buffertime: 4s
  subscribe:
    submode: 2`
  return <Base ctx={ctx} />
})
export default TimeShift
