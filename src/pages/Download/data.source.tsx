import React from 'react'

import { Button, Space } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'

import { Nav30DataSource } from '../../data/index'

export { Nav30DataSource }
const version = 'v4.7.4'
const beta = 'v4.7.5-beta02111031'
export const Feature120DataSource = {
  wrapper: { className: 'home-page-wrapper Feature12-wrapper' },
  page: { className: 'home-page Feature12' },
  // OverPack: { className: 'home-page Feature12', playScale: 0.3 },
  Carousel: {
    className: 'Feature12-content',
    dots: false,
    wrapper: { className: 'Feature12-content-wrapper' },
    titleWrapper: {
      className: 'Feature12-title-wrapper',
      children: [
        // { name: 'title', children: '插件生态', className: 'title-h1' },
      ],
      barWrapper: {
        className: 'Feature12-title-bar-wrapper',
        children: {
          className: 'Feature12-title-bar'
        }
      }
    },

    children: [
      {
        title: {
          className: 'Feature12-title-text',
          children: 'Official Release'
        },
        className: 'Feature12-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Mac(Intel)</div>
                      <div className="sub-title">Version: {version}</div>
                    </Space>
                    <img className="img" src="/img/ic_mac.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      icon={<DownloadOutlined />}
                      type="primary"
                      onClick={() => {
                        window.open('https://download.m7s.live/bin/m7s_darwin_amd64.tar.gz')
                      }}
                    >
                      Download Now
                    </Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction="vertical">
                      <div className="title">Linux(x86) </div>
                      <div className="sub-title">Version: {version}</div>
                    </Space>
                    <img className="img" src="/img/ic_linux.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      icon={<DownloadOutlined />}
                      type="primary"
                      onClick={() => {
                        window.open('https://download.m7s.live/bin/m7s_linux_amd64.tar.gz')
                      }}
                    >
                      Download Now
                    </Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction="vertical">
                      <div className="title">Windows(x86) </div>
                      <div className="sub-title">Version: {version}</div>
                    </Space>
                    <img className="img" src="/img/ic_windows.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      onClick={() => {
                        window.open('https://download.m7s.live/bin/m7s_windows_amd64.tar.gz')
                      }}
                    >
                      Download Now
                    </Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Mac(Apple Silicon) </div>
                      <div className="sub-title">Version: {version}</div>
                    </Space>
                    <img className="img" src="/img/ic_mac.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      onClick={() => {
                        window.open('https://download.m7s.live/bin/m7s_darwin_arm64.tar.gz')
                      }}
                    >
                      Download Now
                    </Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction="vertical">
                      <div className="title">Linux(arm) </div>
                      <div className="sub-title">Version: {version}</div>
                    </Space>
                    <img className="img" src="/img/ic_linux.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      onClick={() => {
                        window.open('https://download.m7s.live/bin/m7s_linux_arm64.tar.gz')
                      }}
                    >
                      Download Now
                    </Button>
                  </Space>
                </Space>
              )
            }
          }
        ]
      },
      {
        title: {
          className: 'Feature12-title-text',
          children: ' Beta Release'
        },
        className: 'Feature12-item',
        name: 'block1',
        children: [
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Mac(Intel) </div>
                      <div className="sub-title">Version: {beta}</div>
                    </Space>
                    <img className="img" src="/img/ic_mac.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      icon={<DownloadOutlined />}
                      type="primary"
                      onClick={() => {
                        window.open('https://download.m7s.live/beta/m7s_darwin_amd64.tar.gz')
                      }}
                    >
                      Download Now
                    </Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction="vertical">
                      <div className="title">Linux(x86) </div>
                      <div className="sub-title">Version: {beta}</div>
                    </Space>
                    <img className="img" src="/img/ic_linux.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      icon={<DownloadOutlined />}
                      type="primary"
                      onClick={() => {
                        window.open('https://download.m7s.live/beta/m7s_linux_amd64.tar.gz')
                      }}
                    >
                      Download Now
                    </Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction="vertical">
                      <div className="title">Windows(x86) </div>
                      <div className="sub-title">Version: {beta}</div>
                    </Space>
                    <img className="img" src="/img/ic_windows.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      onClick={() => {
                        window.open('https://download.m7s.live/beta/m7s_windows_amd64.tar.gz')
                      }}
                    >
                      Download Now
                    </Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    <Space direction="vertical">
                      <div className="title">Mac(Apple Silicon) </div>
                      <div className="sub-title">Version: {beta}</div>
                    </Space>
                    <img className="img" src="/img/ic_mac.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      onClick={() => {
                        window.open('https://download.m7s.live/beta/m7s_darwin_arm64.tar.gz')
                      }}
                    >
                      Download Now
                    </Button>
                  </Space>
                </Space>
              )
            }
          },
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature12-text',
              children: (
                <Space direction="vertical" className="item">
                  <Space className="item-wrap">
                    {/* <div className='desc'> <span style={{ color: '#000', fontWeight: 500 }}>Monibuca</span>旨在提供一个对开发者极度友好，兼具高性能的流媒体服务器开发框架，对于想快速入门流媒体开发的公司和个人提供一个低门槛的方案。</div> */}
                    <Space direction="vertical">
                      <div className="title">Linux(arm) </div>
                      <div className="sub-title">Version: {beta}</div>
                    </Space>
                    <img className="img" src="/img/ic_linux.png" alt="" />
                  </Space>
                  <Space direction="vertical" align="start">
                    <Button
                      type="primary"
                      icon={<DownloadOutlined />}
                      onClick={() => {
                        window.open('https://download.m7s.live/beta/m7s_linux_arm64.tar.gz')
                      }}
                    >
                      Download Now
                    </Button>
                  </Space>
                </Space>
              )
            }
          }
        ]
      }
    ]
  }
}
