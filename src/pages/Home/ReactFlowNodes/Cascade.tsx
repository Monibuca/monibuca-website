import React, { memo } from 'react'
import Base from './Base'
import { FlowContext } from './Node'
const createLiveStage = (ctx: FlowContext) => {
  ctx.pipe(
    {
      id: 'publisher',
      position: { x: 150, y: 40 },
      data: { label: 'Publisher' }
    },
    {
      id: 'cascadeServer',
      position: { x: 150, y: 100 },
      style: {},
      data: { label: 'Source Server + CascadeServer Plugin' }
    },
    {
      id: 'cascadeClient1',
      position: { x: 0, y: 200 },
      style: {},
      data: { label: 'Edge Server + CascadeClient Plugin' }
    },
    {
      id: 'subscriber1',
      position: { x: 0, y: 300 },
      data: { label: 'Subscriber1' }
    }
  )
  ctx.pipe(
    'cascadeServer',
    {
      id: 'cascadeClient2',
      position: { x: 150, y: 200 },
      style: {},
      data: { label: 'Edge Server + CascadeClient Plugin' }
    },
    {
      id: 'subscriber2',
      position: { x: 150, y: 300 },
      data: { label: 'Subscriber' }
    }
  )
  ctx.pipe(
    'cascadeServer',
    {
      id: 'cascadeClient3',
      position: { x: 300, y: 200 },
      style: {},
      data: { label: 'Edge Server + CascadeClient Plugin' }
    },
    {
      id: 'subscriber3',
      position: { x: 300, y: 300 },
      data: { label: 'Subscriber' }
    }
  )
}
const createWatchStage = (ctx: FlowContext) => {
  ctx.pipe(
    {
      id: 'cascadeServer2',
      position: { x: 150, y: 250 },
      style: {},
      data: { label: 'Monitoring Server + CascadeServer Plugin' }
    },
    {
      id: 'subscriber',
      position: { x: 150, y: 350 },
      data: { label: 'Subscriber' }
    }
  )
  ctx.pipe(
    {
      id: 'publish1',
      position: { x: 0, y: 50 },
      style: {},
      data: { label: 'Camera1' }
    },
    {
      id: 'cascadeClient21',
      position: { x: 0, y: 150 },
      style: {},
      data: { label: 'Pull Stream Server + CascadeClient Plugin' }
    },
    'cascadeServer2'
  )
  ctx.pipe(
    {
      id: 'publish2',
      position: { x: 150, y: 50 },
      style: {},
      data: { label: 'Camera2' }
    },
    {
      id: 'cascadeClient22',
      position: { x: 150, y: 150 },
      style: {},
      data: { label: 'Pull Stream Server + CascadeClient Plugin' }
    },
    'cascadeServer2'
  )
  ctx.pipe(
    {
      id: 'publish3',
      position: { x: 300, y: 50 },
      style: {},
      data: { label: 'Camera3' }
    },
    {
      id: 'cascadeClient23',
      position: { x: 300, y: 150 },
      style: {},
      data: { label: 'Pull Stream Server + CascadeClient Plugin' }
    },
    'cascadeServer2'
  )
}
const TimeShift = memo<{ isMobile: boolean }>(function ({ isMobile }) {
  const sNode = {
    id: 'typeSelector',
    type: 'segmented',
    position: { x: 0, y: 0 },
    data: {
      options: ['Live Scene', 'Monitoring Scene'],
      value: 'Live Scene',
      onChange: (stage: 'Live Scene' | 'Monitoring Scene') => {
        ctx.clear()
        sNode.data.value = stage
        ctx.addNode(sNode)
        switch (stage) {
          case 'Live Scene':
            createLiveStage(ctx)
            ctx._updateNodes()
            ctx._updateEdges()
            break
          case 'Monitoring Scene':
            createWatchStage(ctx)
            ctx._updateNodes()
            ctx._updateEdges()
            break
        }
      }
    }
  }

  const ctx = new FlowContext({
    isMobile,
    sourceType: false,
    playType: false,
    nodes: [sNode]
  })
  createLiveStage(ctx)
  ctx.plugins.add('cascade')
  ctx.configs = {
    'server.yaml': `cascadeserver:
  quic:
    listenaddr: :44944`,
    'client.yaml': `cascadeclient:
  server: 192.168.1.100`
  }
  ctx.config = ctx.configs['server.yaml']
  return <Base ctx={ctx} />
})
export default TimeShift
