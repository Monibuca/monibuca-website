import { Space, Image } from 'antd'

import { Nav30DataSource } from '../../data/index'

export { Nav30DataSource }

const plugins = {
  rtmp: 'Supports push and pull using the RTMP protocol',
  rtsp: 'Supports push and pull using the RTSP protocol',
  hls: '1. Provides HLS protocol streaming playback. 2. Remote HLS retrieval to m7s',
  gb28181: 'Supports streaming playback and viewing recordings using the GB28181 protocol',
  ps: 'Receives streams in Mpeg2-PS format',
  onvif: 'Supports streaming playback using the ONVIF protocol',
  webrtc: 'Supports streaming and pulling using the WebRTC protocol',
  webtransport: 'Streaming using WebTransport',
  record: 'Recording in HLS, FLV, MP4, raw stream formats, and playback',
  hdl: '1. HTTP-FLV format streaming playback. 2. Remote HTTP-FLV retrieval to m7s',
  jessica: '1. Provides WS-FLV protocol streaming playback. 2. Provides WS-RAW protocol streaming playback.',
  fmp4: 'Provides FMP4 format streaming playback',
  preview: 'Real-time video preview capability with Jessibuca',
  snap: 'Real-time snapshot capability for I frames',
  room: 'Room functionality to broadcast messages to users in the room',
  hook: 'API hook callback capability to notify remote servers',
  exporter: 'Monitoring data export capability, supporting Prometheus, InfluxDB, ElasticSearch',
  logrotate: 'Log rotation capability',
  edge: 'Ability to use m7s instances as edge nodes',
  debug: 'Debugging capability',
  monitor: 'Monitoring data storage and access',
  demo: 'Provides example code for building plugins',
}

const plugins2 = [
  {
    name: 'mpegts',
    desc: 'Provides MPEG-TS format streaming playback',
    url: 'https://github.com/kingecg/mpegts'
  },
  {
    name: 'plugin-snapplug',
    desc: 'Automatically generates video cover images when recording starts or ends',
    url: 'https://github.com/3201301734/plugin-snapplug'
  },
  {
    name: 'm7s-reportor',
    desc: 'Reports m7s streaming information and device information to Redis',
    url: 'https://github.com/bigbeer1/m7s-reportor'
  },
  {
    name: 'plugin-jtt1078',
    desc: 'Plugin for integrating the jtt1078 protocol',
    url: 'https://github.com/bytebit/plugin-jtt1078'
  },
  {
    name: 'plugin-transform',
    desc: 'A transcoding plugin based on the ffmpeg process',
    url: 'https://github.com/erroot/plugin-transform'
  },
  {
    name: 'plugin-erwscascade',
    desc: 'Platform-level cascading of m7s streaming media based on WebSocket',
    url: 'https://github.com/erroot/plugin-erwscascade'
  },
  {
    name: 'Vacant Position',
    desc: 'Contact us to be added to this list',
    url: ''
  }
]

const plugins3 = [
  {
    name: 'plugin-cascade',
    desc: 'Cascade plugin, providing m7s with infinite cascading capability'
  },
  {
    name: 'plugin-transcode',
    desc: 'Provides transcoding capability to transcode streams into other formats'
  },
  {
    name: 'plugin-snappro',
    desc: 'Ultra-fast snapshots, over 10 times faster than the snap plugin'
  },
  {
    name: 'plugin-cryptor',
    desc: 'Provides encryption capability for streams'
  },
  {
    name: 'plugin-gb28181pro',
    desc: 'Provides cascading and other functions for the GB28181 protocol'
  },
  {
    name: 'plugin-recordpro',
    desc: 'Advanced recording plugin, with additional features like scheduled tasks'
  },
  {
    name: 'plugin-cdn',
    desc: 'Can push streams to CDN, compatible with multiple cloud vendors'
  },
  {
    name: 'plugin-sei',
    desc: 'Allows insertion of custom SEI information'
  },
  {
    name: 'plugin-voice',
    desc: 'Supports public network voice intercom, hardware purchase required'
  },
  {
    name: 'plugin-llhls',
    desc: 'Supports LLHLS protocol, providing low-latency playback'
  },
  {
    name: 'plugin-admin',
    desc: 'Elegant UI interface'
  },
  {
    name: 'Vacant Position',
    desc: 'Contact us to be added to this list'
  }
]

export const Feature130DataSource = {
  wrapper: { className: 'home-page-wrapper feature13-wrapper' },
  page: { className: 'home-page feature13' },
  // OverPack: { className: 'home-page feature13', playScale: 0.3 },
  Carousel: {
    className: 'feature13-content',
    dots: false,
    wrapper: { className: 'feature13-content-wrapper' },
    titleWrapper: {
      className: 'feature13-title-wrapper',
      // children: [{ name: 'title', children: '插件生态', className: 'title-h1' }],
      children: [],
      barWrapper: {
        className: 'feature13-title-bar-wrapper',
        children: {
          className: 'feature13-title-bar'
        }
      }
    },

    children: [
      {
        title: { className: 'feature13-title-text', children: 'Official plugin' },
        className: 'feature13-item',
        name: 'block0',
        children: Object.keys(plugins).map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
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
        title: { className: 'feature13-title-text', children: 'Third-party open source' },
        className: 'feature13-item',
        name: 'block1',
        children: plugins2.map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
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
        title: { className: 'feature13-title-text', children: 'Paid plugins' },
        className: 'feature13-item',
        name: 'block2',
        children: plugins3.map(item => {
          return {
            md: 8,
            xs: 24,
            children: {
              className: 'feature13-text',
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
