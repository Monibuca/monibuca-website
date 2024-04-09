import React, { memo } from 'react'
import ReactFlow, { Background } from 'reactflow'
import 'rc-banner-anim/assets/index.css'
import 'reactflow/dist/style.css'
import stream from './type/Stream'
import plugin from './type/Plugin'
import player from './type/Player'
import source from './type/Source'
import remote from './type/Remote'
import segmented from './type/Segmented'
import m7s from './type/Monibuca'
import { TagNode as tagNode } from './type/Tag'
import { Tabs, Card, Space } from 'antd'
import { FlowContext, StreamContext } from './Node'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import './Base.css'
import { CopyOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import copy from 'copy-to-clipboard'

export default memo<{ ctx: FlowContext }>(function Base({ ctx }) {
  ctx.pluginState = React.useState(Array.from(ctx.plugins))
  ctx.nodeState = React.useState(ctx.nodes)
  ctx.edgeState = React.useState(ctx.edges)
  ctx.streamState = React.useState('live/test')
  ctx.configState = React.useState(ctx.config)

  const [copyMsg, setCopyMsg] = React.useState('复制代码')

  const rawCode = `package main

import (
  "context"
  "m7s.live/engine/v4"
${ctx.state.plugins.map(plugin => `  _ "m7s.live/plugin/${plugin}/v4"`).join('\n')}
)

func main() {
  engine.Run(
    context.Background(), "config.yaml"
  )
}`

  const markdown = `
~~~go
${rawCode}

~~~`

  const graph = (
    <div className="nowheel" style={{ width: ctx.isMobile ? '100vw' : 500, height: ctx.isMobile ? 350 : 450 }}>
      <StreamContext.Provider value={ctx.state.stream}>
        <ReactFlow
          onInit={instance => {
            if (ctx.isMobile) instance.fitView()
          }}
          nodesConnectable={false}
          connectOnClick={false}
          autoPanOnNodeDrag={false}
          autoPanOnConnect={false}
          panOnDrag={false}
          // draggable={false}
          zoomOnScroll={false}
          panOnScroll={false}
          zoomOnPinch={false}
          zoomOnDoubleClick={false}
          nodes={ctx.state.nodes}
          proOptions={{
            hideAttribution: true
          }}
          nodeTypes={{
            plugin,
            stream,
            player,
            source,
            remote,
            tagNode,
            segmented,
            m7s
          }}
          edges={ctx.state.edges}
        >
          <Background color="#ccc" variant="dots" />
        </ReactFlow>
      </StreamContext.Provider>
    </div>
  )
  const main = (
    <Markdown
      children={markdown}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <div className="code-box" style={{ width: '100vw' }}>
              <div className="copy">
                <Tooltip
                  title={copyMsg}
                  onOpenChange={value => {
                    if (copyMsg == 'Copy successful!') {
                      if (!value) {
                        setCopyMsg('Copy Code')
                      }
                    }
                  }}
                >
                  <CopyOutlined
                    onClick={() => {
                      copy(rawCode)
                      setCopyMsg('Copy successful!')
                    }}
                  />
                </Tooltip>
              </div>
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                showLineNumbers
              />
            </div>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        }
      }}
    />
  )

  const [selectedConfig, setSelectedConfig] = React.useState(ctx.state.config)
  const [selectedName, setSelectedName] = React.useState(ctx.configs ? ctx.configs[0] : 'main.go')

  const config = (
    <Markdown
      children={`
~~~yaml;
${selectedConfig || '// No configuration required'}
~~~`}
      components={{
        code(props) {
          const { children, className, node, ...rest } = props
          const match = /language-(\w+)/.exec(className || '')
          return match ? (
            <div className="code-box" style={{ width: '100vw' }}>
              {selectedConfig && (
                <div className="copy">
                  <Tooltip
                    title={copyMsg}
                    onOpenChange={value => {
                      if (copyMsg == 'Copy successful!') {
                        if (!value) {
                          setCopyMsg('Copy Code')
                        }
                      }
                    }}
                  >
                    <CopyOutlined
                      onClick={() => {
                        copy(selectedConfig)
                        setCopyMsg('Copy successful!')
                      }}
                    />
                  </Tooltip>
                </div>
              )}
              <SyntaxHighlighter
                {...rest}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                language={match[1]}
                showLineNumbers
              />
            </div>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          )
        }
      }}
    />
  )

  if (ctx.isMobile) {
    return (
      <Tabs
        centered
        items={[
          {
            label: 'Visualization',
            key: '0',
            children: graph
          },
          {
            label: 'main.go',
            key: '2',
            children: main
          },
          {
            label: 'config.yaml',
            key: '1',
            children: config
          }
        ]}
      ></Tabs>
    )
  }
  return (
    <Space direction="horizontal" style={{ width: '100%' }} align="start">
      {graph}
      <Card
        style={{ width: ctx.isMobile ? '100vw' : 500 }}
        size="small"
        tabList={['main.go']
          .concat(ctx.configs ? Object.keys(ctx.configs) : ['config.yaml'])
          .map(name => ({
            key: name,
            tab: name
          }))}
        onTabChange={name => {
          setSelectedName(name)
          if (ctx.configs) setSelectedConfig(ctx.configs[name])
        }}
      >
        {selectedName === 'main.go' ? main : config}
      </Card>
    </Space>
  )
})
