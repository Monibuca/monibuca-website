import React from 'react'

import { Button, Space } from 'antd'
import { Nav30DataSource } from '../../data/index'

export { Nav30DataSource }

export const Feature110DataSource = {
  wrapper: { className: 'home-page-wrapper Feature11-wrapper' },
  page: { className: 'home-page Feature11' },
  Carousel: {
    className: 'Feature11-content',
    dots: false,
    wrapper: { className: 'Feature11-content-wrapper' },
    titleWrapper: {
      className: 'Feature11-title-wrapper',
      children: [],
      barWrapper: {
        className: 'Feature11-title-bar-wrapper',
        children: {
          className: 'Feature11-title-bar'
        }
      }
    },

    children: [
      {
        title: {
          className: 'Feature11-title-text',
          children: ''
        },
        className: 'Feature11-item',
        name: 'block0',
        children: [
          {
            md: 8,
            xs: 24,
            children: {
              className: 'Feature11-text',
              children: (
                <Space className="item" direction="vertical">
                  <div className="imgbox">
                    <div className="imgbox-t1">Monibuca</div>
                    <div className="imgbox-t2">Open-source Go language media server development framework</div>
                    <img alt="" className="imgbox-img" src="/img/mb.png" />
                  </div>
                  <Space direction="vertical" align="start">
                    {/* <div className='title'>从零启动 m7s V4</div> */}
                    <div className="desc">
                      {' '}
                      This framework aims to provide developers with an extremely user-friendly and high-performance media server development framework, offering a low-threshold solution for companies and individuals looking to quickly get started with media development.
                    </div>
                    <Button
                      type="primary"
                      onClick={() => {
                        window.open(`https://monibuca.com`)
                      }}
                    >
                      View details
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
              className: 'Feature11-text',
              children: (
                <Space className="item" direction="vertical">
                  <div className="imgbox">
                    <div className="imgbox-t1">Jessibuca</div>
                    <div className="imgbox-t2">Web audio and video streaming player</div>
                    <img alt="" className="imgbox-img" src="/img/jb.png" />
                  </div>
                  <Space direction="vertical" align="start">
                    {/* <div className='title'>从零启动 m7s V4</div> */}
                    <div className="desc">
                      It is a live streaming player built purely for the web (HTML5). It is compatible with nearly all web streaming protocols and mainstream audio and video encoding formats. It features low latency, high performance, and strong compatibility.
                    </div>
                    <Button
                      type="primary"
                      onClick={() => {
                        window.open(`https://jessibuca.com`)
                      }}
                    >
                      View details
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
              className: 'Feature11-text',
              children: (
                <Space className="item" direction="vertical">
                  <div className="imgbox">
                    <div className="imgbox-t1">Rebebuca</div>
                    <div className="imgbox-t2">Rust-based desktop FFMPEG manager</div>
                    <img alt="" className="imgbox-img" src="/img/rb.png" />
                  </div>
                  <Space direction="vertical" align="start">
                    <div className="desc">
                      It is a desktop FFMPEG manager developed using Rust. It helps us better manage the numerous complex FFMPEG parameters and the running status of FFMPEG commands.
                    </div>
                    <Button
                      type="primary"
                      onClick={() => {
                        window.open(`https://rebebuca.com`)
                      }}
                    >
                      View details
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
