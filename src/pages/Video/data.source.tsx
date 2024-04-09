import { Space, Image } from 'antd'
import { Nav30DataSource } from '../../data/index'
import { LinkOutlined } from '@ant-design/icons'

export { Nav30DataSource }

const videoData = [
  {
    bannerTitle: 'Start from Scratch',
    title: 'Start from Scratch with m7s V4',
    desc: 'This video explains the process of creating a go project from scratch and introducing m7s, starting the engine without any plugins.',
    createdDate: '2022-3-4',
    url: 'https://www.bilibili.com/video/BV1iq4y147N4/?spm_id_from=333.999.0.0',
    pv: 8092
  },
  {
    bannerTitle: 'Plugin Introduction',
    title: 'm7s V4 - Plugin Introduction',
    desc: 'Practical demonstration, introducing the process of introducing rtmp and hdl plugins of m7s v4 version, and the points to note',
    createdDate: '2022-3-5',
    url: 'https://www.bilibili.com/video/BV1sP4y1g7BF/?spm_id_from=333.999.0.0',
    pv: 3978
  },
  {
    bannerTitle: 'Pulling Streams from Remote',
    title: 'm7s v4 —Pulling Streams from Remote',
    desc: 'This video demonstrates the dynamic process of pulling streams from remote using rtmp and hdl plugins in m7s v4 version',
    createdDate: '2022-3-9',
    url: 'https://www.bilibili.com/video/BV1Nq4y1i7Zn/?spm_id_from=333.999.0.0',
    pv: 2558
  },
  {
    bannerTitle: 'Pushing Streams to Remote',
    title: 'm7s v4 Video Tutorial——Pushing Streams to Remote',
    desc: 'This video introduces the functionality of pushing streams to remote using the rtmp plugin in m7s v4 version',
    createdDate: '2022-3-13',
    url: 'https://www.bilibili.com/video/BV1mq4y1i7rp/?spm_id_from=333.999.0.0',
    pv: 1733
  },
  {
    bannerTitle: 'On-demand Streaming',
    title: 'm7s v4 Video Tutorial——On-demand Streaming',
    desc: 'This video introduces the on-demand streaming feature of the rtmp plugin in m7s v4 version',
    createdDate: '2022-3-14',
    url: 'https://www.bilibili.com/video/BV1YF411s7nu/?spm_id_from=333.999.0.0',
    pv: 1773
  },
  {
    bannerTitle: 'Continuous Deployment',
    title: 'm7s v4 Video Tutorial——Continuous Deployment',
    desc: 'This video introduces the continuous deployment feature of m7s v4 version, as well as the state machine diagram of the stream',
    createdDate: '2022-3-16',
    url: 'https://www.bilibili.com/video/BV1ar4y1i79S/?spm_id_from=333.999.0.0',
    pv: 1619
  },
  {
    bannerTitle: 'Rtsp Plugin Source Code Analysis',
    title: 'm7s v4 Video Tutorial——Rtsp Plugin Source Code Analysis',
    desc: 'This video provides a detailed analysis of the rtsp plugin, which can be used as a reference for custom secondary development plugins',
    createdDate: '2022-3-20',
    url: 'https://www.bilibili.com/video/BV1BS4y1U71m/?spm_id_from=333.999.0.0',
    pv: 1598
  },
  {
    bannerTitle: 'WebTransport Demonstration',
    title: 'm7s v4 Video Tutorial——WebTransport Demonstration',
    desc: 'This video introduces the preview plugin, screenshot plugin, and the process of testing WebTransport locally in m7s v4 version. It also compares the delay of playing streams with different protocols.',
    createdDate: '2022-6-27',
    url: 'https://www.bilibili.com/video/BV1EL4y1P7pf/?spm_id_from=333.999.0.0',
    pv: 1270
  },
  {
    bannerTitle: 'gb28181 dump',
    title: 'm7s v4 Video Tutorial——gb28181 dump',
    desc: 'This video introduces the ps stream dump function of the gb28181 plugin in m7s v4 version, which is used to analyze video stream data',
    createdDate: '2022-9-12',
    url: 'https://www.bilibili.com/video/BV1TV4y1g7g6/?spm_id_from=333.999.0.0',
    pv: 1249
  },
  {
    bannerTitle: 'Configuration Override Mechanism',
    title: 'm7s v4 Video Tutorial——Configuration Override Mechanism',
    desc: 'This video introduces the configuration override mechanism of m7s v4 version. m7s is an open source pure go pluginized streaming media development framework.',
    createdDate: '2022-10-16',
    url: 'https://www.bilibili.com/video/BV1vD4y1r7j9/?spm_id_from=333.999.0.0',
    pv: 675
  },
  {
    bannerTitle: 'Room Demonstration',
    title: 'm7s v4 Video Tutorial——Room Demonstration',
    desc: 'This video introduces the Room demonstration function of m7s v4 version. The Room plugin provides the basic functions of the room, including signaling broadcast, entering and leaving the room, text chat, and multi-person video.',
    createdDate: '2023-3-17',
    url: 'https://www.bilibili.com/video/BV1BT411k77t/?spm_id_from=333.999.0.0',
    pv: 805
  },
  {
    bannerTitle: 'Engine Startup Process',
    title: 'm7s v4 Source Code Analysis——Engine Startup Process',
    desc: 'This video explains the engine startup process of m7s v4',
    createdDate: '2022-3-26',
    url: 'https://www.bilibili.com/video/BV1L94y1f7s4/?spm_id_from=333.999.0.0',
    pv: 1244
  },
  {
    bannerTitle: 'Stream Structure',
    title: 'm7s v4 Source Code Analysis——Stream Structure',
    desc: 'This video introduces the details of the Stream structure in the m7s v4 engine',
    createdDate: '2022-3-27',
    url: 'https://www.bilibili.com/video/BV1aZ4y1m7Fo/?spm_id_from=333.999.0.0',
    pv: 907
  },
  {
    bannerTitle: 'Publisher Logic',
    title: 'm7s v4 Source Code Analysis——Publisher Logic',
    desc: 'This video introduces the definition and structure of the publisher in m7s v4',
    createdDate: '2022-4-2',
    url: 'https://www.bilibili.com/video/BV1NT4y1v7NK/?spm_id_from=333.999.0.0',
    pv: 932
  },
  {
    bannerTitle: 'Subscriber Logic',
    title: 'm7s v4 Source Code Analysis——Subscriber Logic',
    desc: 'This video introduces the definition and related logic of the subscriber in m7s v4',
    createdDate: '2022-4-3',
    url: 'https://www.bilibili.com/video/BV1M5411D7UL/?spm_id_from=333.999.0.0',
    pv: 614
  },
  {
    bannerTitle: 'Processing Video Frames',
    title: 'm7s v4 Source Code Analysis——Processing Video Frames',
    desc: 'This video explains how m7s v4 engine handles video frames of different formats and memory reuse',
    createdDate: '2022-4-5',
    url: 'https://www.bilibili.com/video/BV14T4y1v7E5/?spm_id_from=333.999.0.0',
    pv: 900
  },
  {
    bannerTitle: 'RingBuffer',
    title: 'm7s v4 Source Code Analysis——RingBuffer',
    desc: 'This video introduces the most core component of the m7s v4 version in the flow forwarding——RingBuffer',
    createdDate: '2022-4-10',
    url: 'https://www.bilibili.com/video/BV1uq4y1Y7gV/?spm_id_from=333.999.0.0',
    pv: 1198
  }
]

export const Feature100DataSource = {
  wrapper: { className: 'home-page-wrapper feature10-wrapper' },
  page: { className: 'home-page feature10' },
  Carousel: {
    className: 'feature10-content',
    dots: false,
    wrapper: { className: 'feature10-content-wrapper' },
    titleWrapper: {
      className: 'feature10-title-wrapper',
      children: [
        {
          name: 'title',
          children: 'm7s V4 Video Tutorials',
          className: 'title-h1'
        }
      ],
      barWrapper: {
        className: 'feature10-title-bar-wrapper',
        children: {
          className: 'feature10-title-bar'
        }
      }
    },

    children: [
      {
        title: {
          className: 'feature10-title-text',
          children: (
            <Space>
              <div className="sub-title" style={{ color: '#5A00FF' }}>
                17
              </div>
              <div className="sub-title">Videos</div>
              <div className="sub-title" style={{ margin: '0 16px' }}>
                |
              </div>
              <div className="sub-title" style={{ color: '#5A00FF' }}>
                2023-3-17
              </div>
              <div className="sub-title">Last Update</div>
            </Space>
          )
        },
        className: 'feature10-item',
        name: 'block0',
        children: videoData.map(item => {
          const obj = {
            md: 8,
            xs: 24,
            children: {
              className: 'feature10-text',
              children: (
                <Space className="item" direction="vertical">
                  <div
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                      window.open(item.url)
                    }}
                  >
                    <Image className="img" preview={false} src="/img/video-bg.png" />
                    <div className="banner-title">—— {item.bannerTitle}</div>
                  </div>
                  <Space direction="vertical" align="start">
                    <div className="title">{item.title}</div>
                    {/* <div className="title">{item.title} <LinkOutlined /></div> */}
                    <div className="desc">{item.desc}</div>
                    <div className="desc">
                      Created on {item.createdDate} &nbsp;<span>|</span>&nbsp; Views {item.pv}
                    </div>
                  </Space>
                </Space>
              )
            }
          }
          return obj
        })
      }
    ]
  }
}
