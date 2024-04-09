import React, { memo } from 'react'
import Base from './Base'
import { FlowContext, PushOutContainer, PusherContainer, StreamContext } from './Node'

const CDN = memo<{ isMobile: boolean }>(function ({ isMobile }) {
  const ctx = new FlowContext({ isMobile })
  const pusher = new PusherContainer(
    {
      id: 'source',
      type: 'source',
      position: { x: 0, y: 0 },
      data: {
        title: 'Live Streaming',
        tool: 'ffmpeg'
      }
    },
    ctx
  )
  const player = new PushOutContainer(
    { id: 'player', type: 'remote', position: { x: 0, y: 200 }, data: {} },
    ctx
  )
  ctx.pipe(
    pusher,
    {
      id: 'plugin1',
      type: 'plugin',
      position: { x: 35, y: 32 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {
        big: true
      }
    },
    {
      id: 'stream1',
      type: 'stream',
      position: { x: 35, y: 150 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {}
    },
    {
      id: 'plugin2',
      type: 'plugin',
      position: { x: 35, y: 256 },
      parentNode: 'm7s',
      extent: 'parent',
      data: {
        big: true,
        reverse: true
      }
    },
    player
  )
  pusher.changeProtocol('rtmp')
  player.changeProtocol('CDN')
  return <Base ctx={ctx} />
})
export default CDN
