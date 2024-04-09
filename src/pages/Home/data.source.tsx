import React from 'react'

import { Space, Image, Typography, Popover, Button } from 'antd'
// @ts-ignore
import { enquireScreen } from 'enquire-js'

import { Nav30DataSource } from '../../data/index'
import Live from './ReactFlowNodes/Live'
import Relay from './ReactFlowNodes/Relay'
import CDN from './ReactFlowNodes/CDN'
import Crypto from './ReactFlowNodes/Crypto'
import Transcode from './ReactFlowNodes/Transcode'
import TimeShift from './ReactFlowNodes/TimeShift'
import Cascade from './ReactFlowNodes/Cascade'
import Voice from './ReactFlowNodes/Voice'
import Meet from './ReactFlowNodes/Meet'
import Other from './ReactFlowNodes/Other'
const { Text } = Typography

const downloadUrl = {
  M7S_WIN: 'https://download.m7s.live/bin/m7s_windows_amd64.tar.gz',
  M7S_IOS: 'https://download.m7s.live/bin/m7s_darwin_amd64.tar.gz',
  M7S_LINUX: 'https://download.m7s.live/bin/m7s_linux_amd64.tar.gz'
}

let isMobile
enquireScreen((b: boolean) => {
  isMobile = b
})

export { Nav30DataSource }
export const Banner10DataSource = {
  wrapper: { className: 'banner1' },
  defaultPreset: 'live',
  presets: {
    live: {
      acceptPush: {
        enabled: true,
        port: 'tcp:1935'
      }
    },
    custom: {}
  }
}
export const Banner20DataSource = {
  wrapper: { className: 'banner2' },
  BannerAnim: {
    children: [
      {
        name: 'elem0',
        BannerElement: { className: 'banner-user-elem' },
        page: { className: 'home-page banner2-page' },
        textWrapper: {
          className: 'banner2-text-wrapper',
          style: isMobile ? {} : { backdropFilter: 'blur(10px)', width: 500 }
        },
        bg: { className: 'bg bg0' },
        title: {
          className: 'banner2-title',
          children: 'Open-source Go language media server development framework'
        },
        content: {
          className: 'banner2-version',
          children: (
            <Text copyable code style={{ color: '#fff', textWrap: 'wrap', fontSize: '20px' }}>
              docker run -id -p 1935:1935 -p 8080:8080 -p 8443:8443 -p 554:554 -p
              58200:58200 -p 5060:5060/udp -p 8000:8000/udp -p 9000:9000
              langhuihui/monibuca:latest
            </Text>

            // <code>
            //   <pre style={{ textWrap: 'wrap' ,margin:0}}>
            //     docker run -id -p 1935:1935 -p 8080:8080 -p 8443:8443 -p 554:554 -p 58200-59200:58200-59200 -p
            //     5060:5060/udp -p 9000:9000 langhuihui/monibuca:latest
            //   </pre>
            // </code>
          ),
          style: isMobile
            ? { marginTop: 300 }
            : { background: 'black', color: 'white', borderRadius: 5, padding: 10 },
          onClick: () => {
            // window.open('https://mp.weixin.qq.com/s/wXNSoMl6H6Wp9Sz2xzaxuw')
          }
        },
        kun: {
          className: 'banner2-content',
          children: 'Developer-friendly, clean code, rich plugins, ultra-low latency, powerful performance, easy deployment, ecosystem collaboration, win-win cooperation'
        },
        button: {
          className: 'banner2-button',
          children: 'Community',
          style: isMobile ? { width: '40vw', background: '#263036' } : { background: '#263036' },
          onClick: () => {
            window.open('https://github.com/langhuihui/monibuca')
          }
        },
        button2: {
          className: 'banner2-button',
          children: 'Professional',
          style: isMobile ? { width: '40vw', background: '#5A00FF' } : { background: '#5A00FF' },
          onClick: () => {
            window.open('https://github.com/Monibuca/pro')
          }
        }
      }
    ]
  }
}

export const Content40DataSource = {
  wrapper: { className: 'home-page-wrapper content4-wrapper' },
  page: { className: 'home-page content4' },
  OverPack: { playScale: 0.3, className: '' },
  titleWrapper: {
    // className: 'title-wrapp',
    children: [
      {
        name: 'title',
        children: 'Partners',
        className: 'title-h1'
      }
    ]
  },
  video: {
    className: 'content4-video',
    children: {
      // video: "https://os.alipayobjects.com/rmsportal/EejaUGsyExkXyXr.mp4",
      // image: "https://zos.alipayobjects.com/rmsportal/HZgzhugQZkqUwBVeNyfz.jpg",
    }
  }
}

export const Content50DataSource = {
  wrapper: { className: 'home-page-wrapper content5-wrapper' },
  page: { className: 'home-page content5' },
  OverPack: { playScale: 0.3, className: 'home-page' },
  titleWrapper: {
    className: 'content5-title-wrapper',
    children: [
      { name: 'title', children: 'Satisfy various industry needs', className: 'title-h1' },
      {
        name: 'content',
        className: 'title-content',
        children: (
          <div>
            Up to now, we have provided road testing, real-time monitoring, <br/>
            emergency command, conferences, factory safety production, smart agriculture, driver examination monitoring, <br/>
            substation video monitoring, security video networking scenarios, CDN, reverse proxy, AI for hundreds of enterprises.
          </div>
        )
      }
    ]
  },
  block: {
    className: 'content5-img-wrapper',
    gutter: 16,
    children: [
      {
        name: 'block3',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/65_VOhDgjlty2MXZ-ZOZ3g',
            target: '_blank'
          },
          img: {
            children: '/kehu/hang-tian.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca 客户案例—航天科技控股集团</div>
                <div className="desc">
                  业务聚焦航天应用、物联网、汽车电子围绕一横三纵的业务布局推动产业发展
                </div>
              </div>
            )
          }
        }
      },
      {
        name: 'block2',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/g7Ye6dRo1EZA8trNphaSmg',
            target: '_blank'
          },
          img: {
            children: '/kehu/yu-ji.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca 客户案例—厦门宇基数字科技</div>
                <div className="desc">
                  团队致力于为电力、建筑、市政、教育、交通等行业提供全方位、全生命周期的一体化综合服务
                </div>
              </div>
            )
          }
        }
      },
      {
        name: 'block1',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/WCS6y9nc3CRYWhp56efB8A',
            target: '_blank'
          },
          img: {
            children: '/kehu/dian-li.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca 客户案例—电力服务</div>
                <div className="desc">
                  电气数字化，构建 IOT 平台，依托于 M7S
                  优秀的架构设计，和快速的社区解答效率，并且支持所有主流协议
                </div>
              </div>
            )
          }
        }
      },
      {
        name: 'block4',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/_o2U23FszOJ_Xn5PhN0pjA',
            target: '_blank'
          },
          img: {
            children: '/kehu/guang-xi.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca 客户案例—广西计算中心</div>
                <div className="desc">
                  主要以解决分散的高速公路监控设备进行统一接入，实现集中管理为目的，构建视频监控管理平台
                </div>
              </div>
            )
          }
        }
      },
      {
        name: 'block0',
        className: 'block',
        md: 8,
        xs: 24,
        children: {
          wrapper: {
            className: 'content5-block-content',
            href: 'https://mp.weixin.qq.com/s/4U-myuuhJ-ZXxPxLP_6aNw',
            target: '_blank'
          },
          img: {
            children: '/kehu/tan-tan.png'
          },
          content: {
            children: (
              <div className="box">
                <div className="title">Monibuca 客户案例—坦坦科技</div>
                <div className="desc">
                  一个专注于做视频 AI 算法项目的团队，从视频汇聚接入、到视频 AIOT
                  平台开发等业务领域都有涉及
                </div>
              </div>
            )
          }
        }
      }
    ]
  }
}

export const Feature40DataSource = {
  wrapper: { className: 'home-page-wrapper feature4-wrapper feature4' },
  page: { className: 'home-page feature4' },
  // OverPack: { className: 'home-page feature4', playScale: 0.3 },
  tabs: {
    className: 'feature4-content',
    wrapper: { className: 'feature4-content-wrapper' },

    titleWrapper: {
      className: 'feature4-title-wrapper',
      children: [{ name: 'title', children: 'Use Cases', className: 'title-h1' }],
      barWrapper: {
        className: 'feature4-title-bar-wrapper',
        children: {
          className: 'feature4-title-bar'
        }
      }
    },

    children: [
      {
        title: 'Push Streaming Live',
        children: Live
      },
      {
        "title": "Pull Streaming Relay",
        "children": Relay
      },
      {
        "title": "Forwarding",
        "children": CDN
      },
      {
        "title": "Encryption",
        "children": Crypto
      },
      {
        "title": "Transcoding",
        "children": Transcode
      },
      {
        "title": "Time Shift",
        "children": TimeShift
      },
      {
        "title": "Cascade",
        "children": Cascade
      },
      {
        "title": "Voice Intercom",
        "children": Voice
      },
      {
        "title": "Video Conference",
        "children": Meet
      },
      {
        "title": "Other Functions",
        "children": Other
      }
    ]
  }
}

export const Feature60DataSource = {
  wrapper: { className: 'home-page-wrapper feature6-wrapper' },
  page: { className: 'home-page feature6' },
  // OverPack: { className: 'home-page feature6', playScale: 0.3 },
  Carousel: {
    className: 'feature6-content',
    dots: false,
    wrapper: { className: 'feature6-content-wrapper' },

    titleWrapper: {
      className: 'feature6-title-wrapper',
      children: [{ name: 'title', children: 'Advantages', className: 'title-h1' }],
      barWrapper: {
        className: 'feature6-title-bar-wrapper',
        children: {
          className: 'feature6-title-bar'
        }
      }
    },

    children: [
      {
        title: { className: 'feature6-title-text', children: 'Ultimate Simplicity' },
        className: 'feature6-item',
        name: 'block0',
        children: [
          {
            md: 12,
            xs: 24,
            children: {
              children: (
                <Space direction="vertical" align="start">
                  <div className="feature6-t1">GO Language + Concise Code Logic</div>
                  <div className="feature6-t2">
                    The simplicity of Go language combined with a pursuit of extreme brevity and elegance in code design. Reading the source code becomes a delightful experience
                    <br /> The project provides standardized entry examples, making plugin integration extremely simple
                  </div>
                  <div
                    onClick={() => {
                      window.open('https://github.com/langhuihui/monibuca')
                    }}
                    className="feature6-button"
                    type="primary"
                    style={{ marginTop: '40px' }}
                  >
                    <img src="/svg/github.svg" alt="" width={30} style={{ marginRight: '9px' }} />
                    Example
                  </div>
                </Space>
              )
            }
          },
          {
            md: 12,
            xs: 24,
            children: {
              className: 'feature6-text',
              children: (
                <Space align="end">
                  <Image preview={true} width={400} src="/img/plugin-go-code.png" />
                </Space>
              )
            }
          }
        ]
      },
      {
        title: { className: 'feature6-title-text', children: 'Highly Scalable' },
        className: 'feature6-item',
        name: 'block1',
        children: [
          {
            md: 12,
            xs: 24,
            children: {
              children: (
                <Space direction="vertical" align="start">
                  <div className="feature6-t1">Exquisite</div>
                  <div className="feature6-t2">
                    Well-designed plugin mechanism that achieves high cohesion and low coupling, with outstanding extensibility
                    <br />
                    Lock-free design and surgical precision in memory reuse, making full use of multi-core computing for powerful performance
                  </div>
                  <div
                    className="feature6-button"
                    type="primary"
                    style={{ marginTop: '40px' }}
                    onClick={() => {
                      window.open('https://github.com/Monibuca')
                    }}
                  >
                    <img src="/svg/github.svg" alt="" width={30} style={{ marginRight: '9px' }} />
                    Github
                  </div>
                </Space>
              )
            }
          },
          {
            md: 12,
            xs: 24,
            children: {
              className: 'feature6-text',
              children: (
                <Space align="end">
                  <svg
                    style={{ height: '400px', width: '100%' }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -5 205 150"
                  >
                    <defs />
                    <g id="p-e">
                      <line class="cls-6" x1="104" y1="28" x2="104" y2="59">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="50;0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </g>
                    <g id="e-s">
                      <line class="cls-8" x1="104" y1="82" x2="104" y2="106">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="50;0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </g>
                    <g id="c-p">
                      <line class="cls-6" x1="27" y1="25" x2="69" y2="25">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="50;0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </g>
                    <g id="r-p">
                      <line class="cls-8" x1="132" y1="25" x2="177" y2="25">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;50"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </g>
                    <g id="s-r">
                      <line class="cls-6" x1="180" y1="112" x2="137" y2="112">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;50"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </g>
                    <g id="s-c">
                      <line class="cls-8" x1="71" y1="112" x2="28" y2="112">
                        <animate
                          attributeName="stroke-dashoffset"
                          values="50;0"
                          dur="2s"
                          repeatCount="indefinite"
                        />
                      </line>
                    </g>
                    <rect class="cls-1" x="60" y="50" width="86" height="38.13" rx="8" />
                    <text class="cls-2" transform="translate(85 74)">
                      Stream
                    </text>
                    <rect class="cls-4" x="60" y="9" width="86" height="32.07" />
                    <rect class="cls-5" x="60" y="96" width="86" height="32.07" />

                    <text class="cls-2" transform="translate(79 30)">
                      Publisher
                    </text>
                    <text class="cls-2" transform="translate(78 116)">
                      Subsciber
                    </text>
                    <rect class="cls-3" x="50" y="1" width="106" height="135"></rect>
                    <rect class="cls-16" x="172" y="9" width="32" height="47.18" />
                    <rect class="cls-16" x="172" y="80" width="32" height="47.18" />
                    <text class="cls-17" transform="matrix(0.47, 0.88, -0.88, 0.47, 174.38, 12.72)">
                      remote server
                    </text>
                    <text class="cls-17" transform="matrix(0.47, 0.88, -0.88, 0.47, 174.38, 84.94)">
                      remote server
                    </text>
                    <rect class="cls-22" x="1" y="9" width="32" height="47.18" />
                    <rect class="cls-22" x="1" y="81" width="32" height="47.18" />
                    <text class="cls-17" transform="matrix(0.47, 0.88, -0.88, 0.47, 9.68, 24.12)">
                      client
                    </text>
                    <text class="cls-17" transform="matrix(0.47, 0.88, -0.88, 0.47, 9.68, 95.91)">
                      client
                    </text>

                    <circle id="ring2" cx="83" cy="69" r="12">
                      <animate
                        attributeName="stroke-dashoffset"
                        values="40;0"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    <circle id="ring1" cx="125" cy="69" r="12">
                      <animate
                        attributeName="stroke-dashoffset"
                        values="0;40"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                </Space>
              )
            }
          }
        ]
      },
      {
        title: { className: 'feature6-title-text', children: 'Easy to Use' },
        className: 'feature6-item',
        name: 'block2',
        children: [
          {
            md: 12,
            xs: 24,
            children: {
              children: (
                <Space direction="vertical" align="start">
                  <div className="feature6-t1">User-friendly</div>
                  <div className="feature6-t2">
                    No need for environment configuration or runtime installation, simply download the executable file
                    <br />
                    Provides thoughtful compilation versions for ARM architecture, ready for direct download and execution
                    <br />
                    Can also be started using Docker
                  </div>
                  <div
                    className="feature6-button"
                    type="primary"
                    style={{ marginTop: '40px' }}
                    onClick={() => {
                      window.open('https://github.com/langhuihui/monibuca/releases')
                    }}
                  >
                    <img src="/svg/github.svg" alt="" width={30} style={{ marginRight: '9px' }} />
                    All Versions
                  </div>
                </Space>
              )
            }
          },
          {
            md: 12,
            xs: 24,
            children: {
              className: 'feature6-text',
              children: (
                <div>
                  <Space align="end">
                    <div className="download">
                      <div className="download-item windows">
                        <a className="iconfont icon-windows" href={downloadUrl.M7S_WIN}></a>
                      </div>
                      <div className="download-item apple">
                        <a className="iconfont icon-apple" href={downloadUrl.M7S_IOS}></a>
                      </div>
                      <div className="download-item linux">
                        <a className="iconfont icon-linux" href={downloadUrl.M7S_LINUX}></a>
                      </div>
                    </div>
                  </Space>
                  <div class="docker">
                    <Text copyable style={{ color: '#fff' }}>
                      docker run -id -p 1935:1935 -p 8080:8080 -p 8443:8443 -p 554:554 -p
                      58200:58200 -p 5060:5060/udp -p 8000:8000/udp -p 9000:9000
                      langhuihui/monibuca:latest
                    </Text>
                  </div>
                </div>
              )
            }
          }
        ]
      }
    ]
  }
}

const plugins = {
  rtmp: 'Accept push and pull via the RTMP protocol, and push externally',
  rtsp: 'Accept push and pull via the RTSP protocol, and push externally',
  hls: '1. Provide HLS protocol for streaming playback. 2. Remote pull HLS to m7s',
  gb28181: 'Play and view recordings via the GB28181 protocol',
  ps: 'Receive streams in Mpeg2-PS format',
  onvif: 'Play streams via the ONVIF protocol',
  webrtc: 'Push and pull streams via the WebRTC protocol',
  webtransport: 'Push and pull streams via WebTransport',
  record: 'Recording function in HLS, FLV, MP4, raw stream formats, and playback',
  hdl: '1. Play streams in HTTP-FLV format. 2. Remote pull HTTP-FLV to m7s',
  jessica: '1. Provide WS-FLV protocol for streaming playback. 2. Provide WS-RAW protocol for streaming playback',
  fmp4: 'Provide FMP4 format for streaming playback',
  preview: 'Real-time video preview capability provided by Jessibuca',
  snap: 'Real-time snapshot capability for I frames',
  room: 'Room functionality provided for broadcasting messages to users in the room',
  hook: 'API hook callback capability provided to notify remote servers',
  exporter: 'Monitoring data export capability provided, supporting Prometheus, InfluxDB, ElasticSearch',
  logrotate: 'Log rotation capability provided',
  edge: 'Ability to use m7s instances as edge nodes',
  debug: 'Debugging capability provided',
  monitor: 'Monitoring data storage and access provided'
}

const plugins2 = [
  {
    name: 'mpegts',
    desc: 'Provide MPEG-TS format for streaming playback',
    url: 'https://github.com/kingecg/mpegts'
  },
  {
    name: 'plugin-snapplug',
    desc: 'Automatically generate video cover images when recording starts or ends',
    url: 'https://github.com/3201301734/plugin-snapplug'
  },
  {
    name: 'm7s-reportor',
    desc: 'Report m7s stream and device information to Redis',
    url: 'https://github.com/bigbeer1/m7s-reportor'
  },
  {
    name: 'Vacant',
    desc: 'Contact us to add to this list',
    url: ''
  }
]


const plugins3 = [
  {
    name: 'cascade',
    desc: 'Cascade plugin, providing infinite cascading capability for m7s'
  },
  {
    name: 'transcode',
    desc: 'Provide transcoding capability to convert streams to other formats'
  },
  {
    name: 'snappro',
    desc: 'Ultra-fast snapshot capability, more than 10 times faster than the snap plugin'
  },
  {
    name: 'cryptor',
    desc: 'Provide encryption capability for streams'
  },
  {
    name: 'gb28181pro',
    desc: 'Provide cascading and other functions for the GB28181 protocol'
  },
  {
    name: 'recordpro',
    desc: 'Advanced recording plugin, adding additional features such as scheduled tasks'
  },
  {
    name: 'plugin-cdn',
    desc: 'Push streams to CDN, compatible with various cloud providers'
  },
  {
    name: 'Vacant',
    desc: 'Contact us to add to this list'
  }
]


export const Feature70DataSource = {
  wrapper: { className: 'home-page-wrapper feature7-wrapper' },
  page: { className: 'home-page feature7' },
  // OverPack: { className: 'home-page feature7', playScale: 0.3 },
  Carousel: {
    className: 'feature7-content',
    dots: false,
    wrapper: { className: 'feature7-content-wrapper' },
    titleWrapper: {
      className: 'feature7-title-wrapper',
      children: [{ name: 'title', children: '插件生态', className: 'title-h1' }],
      barWrapper: {
        className: 'feature7-title-bar-wrapper',
        children: {
          className: 'feature7-title-bar'
        }
      }
    },

    children: [
      {
        title: { className: 'feature7-title-text', children: '官方插件' },
        className: 'feature7-item',
        name: 'block0',
        children: Object.keys(plugins).map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature7-text',
              children: (
                <Space
                  className="item"
                  onClick={() => {
                    window.open(`https://github.com/Monibuca/plugin-${item}`)
                  }}
                >
                  <Image className="img" preview={false} src="/img/plugin.png" />
                  <Space direction="vertical" align="start">
                    <div className="title">Plugin-{item}</div>
                    <div className="desc">{plugins[item]}</div>
                  </Space>
                </Space>
              )
            }
          }
        })
      },
      {
        title: { className: 'feature7-title-text', children: '第三方开源' },
        className: 'feature7-item',
        name: 'block1',
        children: plugins2.map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature7-text',
              children: (
                <Space
                  className="item"
                  onClick={() => {
                    window.open(item.url)
                  }}
                >
                  <Image className="img" preview={false} src="/img/plugin.png" />
                  <Space direction="vertical" align="start">
                    <div className="title">{item.name}</div>
                    <div className="desc">{item.desc}</div>
                  </Space>
                </Space>
              )
            }
          }
        })
      },
      {
        title: { className: 'feature7-title-text', children: '付费插件' },
        className: 'feature7-item',
        name: 'block2',
        children: plugins3.map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature7-text',
              children: (
                <Space className="item">
                  <Image className="img" preview={false} src="/img/plugin.png" />
                  <Space direction="vertical" align="start">
                    <div className="title">{item.name}</div>
                    <div className="desc">{item.desc}</div>
                  </Space>
                </Space>
              )
            }
          }
        })
      }
    ]
  }
}

export const Feature80DataSource = {
  zhan: { className: 'feature8-zhan' },
  wrapper: { className: 'home-page-wrapper feature8-wrapper' },
  OverPack: { className: 'feature8', playScale: 0.3 },
  Carousel: {
    className: 'feature8-content',
    dots: false,
    wrapper: { className: 'feature8-content-wrapper' },

    titleWrapper: {
      className: 'feature8-title-wrapper',
      children: [{ name: 'title', children: 'Efficient Management Tools', className: 'title-h1' }],
      barWrapper: {
        className: 'feature8-title-bar-wrapper',
        children: {
          className: 'feature8-title-bar'
        }
      }
    },

    children: [
      {
        title: { className: 'feature8-title-text', children: 'Admin' },
        className: 'feature8-item',
        name: 'block2',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature8-text',
              children: (
                <Space direction="vertical">
                  <Image
                    className="img-box"
                    preview={false}
                    width={!isMobile ? 900 : 300}
                    height={!isMobile ? 599 : 200}
                    src="/img/admin.png"
                  />
                  <div className="desc">
                    Explanation: Admin provides a visual UI interface for the m7s pro version (including premium plugins).
                  </div>
                  <Space size="large">
                    <div
                      className="btn1"
                      onClick={() => {
                        window.open('https://test.monibuca.com/ui')
                      }}
                    >
                      Online
                    </div>
                    <div
                      className="btn2"
                      onClick={() => {
                        window.open('https://github.com/Monibuca/pro')
                      }}
                    >
                      Github
                    </div>
                  </Space>
                </Space>
              )
            }
          }
        ]
      },
      {
        title: { className: 'feature8-title-text', children: 'Console' },
        className: 'feature8-item',
        name: 'block1',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature8-text',
              children: (
                <Space direction="vertical">
                  <Image
                    className="img-box"
                    preview={false}
                    width={!isMobile ? 900 : 300}
                    height={!isMobile ? 599 : 200}
                    src="/img/console.png"
                  />
                  <div className="desc">
                    Explanation: Console provides the ability to manage m7s instances through a visual admin dashboard, supporting multi-instance management. Please check the online version and Docker deployment. We also offer downloads for the Windows version and Mac (arm64) version.
                  </div>
                  <Space size="large">
                    <div
                      className="btn1"
                      onClick={() => {
                        window.open('https://console.monibuca.com')
                      }}
                    >
                      Online
                    </div>
                    <div
                      className="btn2"
                      onClick={() => {
                        window.open(
                          'https://mp.weixin.qq.com/s?__biz=MzkyMDQ5Nzg5MQ==&mid=2247483848&idx=1&sn=b0908a8387ad10beef92323f0722dad7&chksm=c190ba44f6e7335227003e949412b0406e0f0696ffad79234c186e87c3f28bd4975aad0dfb19&scene=178&cur_album_id=2996567829959376897#rd'
                        )
                      }}
                    >
                      Docker Deploy
                    </div>
                  </Space>
                  <Space style={{ marginTop: '36px' }} direction={isMobile ? 'vertical' : 'horizontal' }>
                    <Space direction="vertical" className="item">
                      <Space className="item-wrap">
                        <Space direction="vertical">
                          <div className="title">Mac(arm64)</div>
                          <div className="sub-title">System Version: Please refer to the installation tutorial.</div>
                        </Space>
                        <img className="img" src="/img/ic_mac.png" alt="" />
                      </Space>
                      <Space direction="vertical" align="start">
                        <Button
                          type="primary"
                          onClick={() => {
                            window.open('https://download.m7s.live/bin/console_mac.zip?v=0.1.20')
                          }}
                        >
                          Download Now
                        </Button>
                      </Space>
                    </Space>
                    <Space direction="vertical" className="item">
                      <Space className="item-wrap">
                        <Space direction="vertical">
                          <div className="title">Windows </div>
                          <div className="sub-title">Windows 10+</div>
                        </Space>
                        <img className="img" src="/img/ic_windows.png" alt="" />
                      </Space>
                      <Space direction="vertical" align="start">
                        <Button
                          type="primary"
                          onClick={() => {
                            window.open(
                              'https://download.m7s.live/bin/console_windows_amd64.zip?v=0.1.20'
                            )
                          }}
                        >
                          Download Now
                        </Button>
                      </Space>
                    </Space>
                  </Space>
                </Space>
              )
            }
          }
        ]
      },
      {
        title: { className: 'feature8-title-text', children: 'API Debug Tool' },
        className: 'feature8-item',
        name: 'block0',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature8-text',
              children: (
                <Space direction="vertical">
                  <Image
                    className="img-box"
                    preview={false}
                    width={!isMobile ? 900 : 300}
                    height={!isMobile ? 599 : 200}
                    src="/img/api.png"
                  />
                  {/* TODO: 收款码替换 */}
                  <div className="desc">
                    Explanation: The trial version includes all interfaces under `global` but excludes plugin interfaces. To obtain the full version, hover over the appreciation button, sponsor 99 RMB, and then 【screenshot】 the transaction. Send the screenshot to the official WeChat account of "BuKa Technology" via private message, and we will provide you with the full version.
                  </div>
                  <Space size="large">
                    <Popover
                      content={
                        <Space>
                          <div style={{ marginRight: '20px' }}>
                            <img src="/img/wx-pay.jpg" alt="" height={250} />
                          </div>
                          <div>
                            <img src="/img/zf-pay.jpg" alt="" height={250} />
                          </div>
                        </Space>
                      }
                    >
                      <div className="btn1">
                        <img
                          src="/svg/ic_QR code.svg"
                          alt=""
                          width={24}
                          style={{ marginRight: '9px' }}
                        />
                        赞赏 99 元
                      </div>
                    </Popover>
                    <div
                      className="btn2"
                      onClick={() => {
                        window.open(
                          'https://apifox.com/apidoc/shared-53418b09-8f45-49e5-94e3-1b93870b304f'
                        )
                      }}
                    >
                      Experience it now
                    </div>
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

export const Footer10DataSource = {
  wrapper: { className: 'home-page-wrapper footer1-wrapper' },
  // OverPack: { className: 'footer1', playScale: 0.2 },
  page: { className: 'footer1 home-page', playScale: 0.2 },
  block: {
    className: 'home-page',
    gutter: 0,
    children: [
      {
        name: 'block0',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: 'Video Tutorial' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: 'Bilibili' },
            { name: 'link1', href: '#', children: 'RTS' }
          ]
        }
      },
      {
        name: 'block1',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: '产品文档' },
        childWrapper: {
          children: [
            { name: 'link0', href: '#', children: 'Quick Start' },
            { name: 'link1', href: '#', children: 'User Manual' },
            { name: 'link2', href: '#', children: 'FAQ' },
            { name: 'link3', href: '#', children: 'Secondary Development' }
          ]
        }
      },
      {
        name: 'block2',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: 'Download' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Windows' },
            { href: '#', name: 'link1', children: 'Mac' },
            { href: '#', name: 'link2', children: 'Mac(arm64)' },
            { href: '#', name: 'link3', children: 'Linux' },
            { href: '#', name: 'link4', children: 'Linux(arm64)' }
          ]
        }
      },
      {
        name: 'block3',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: 'BuKa Series' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Monibuca' },
            { href: '#', name: 'link1', children: 'Jessibuca' },
            { href: '#', name: 'link2', children: 'Rebebuca' }
          ]
        }
      },
      {
        name: 'block4',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: 'About Us' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'FAQ' },
            { href: '#', name: 'link1', children: 'Development Team' },
            { href: '#', name: 'link2', children: 'The Birth Story' }
          ]
        }
      },
      {
        name: 'block5',
        xs: 24,
        md: 4,
        className: 'block',
        title: { children: 'Contact' },
        childWrapper: {
          children: [
            { href: '#', name: 'link0', children: 'Monibuca 微信交流群' },
            { href: '#', name: 'link1', children: '[ 不卡学院 ] 交流群' }
          ]
        }
      }
    ]
  },
  copyrightWrapper: { className: 'copyright-wrapper' },
  copyrightPage: { className: 'home-page' },
  copyright: {
    className: 'copyright',
    children: <span>Copyright © Monibuca Teams</span>
  }
}
