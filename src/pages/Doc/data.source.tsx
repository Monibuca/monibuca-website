import { Space } from 'antd'
import { Nav30DataSource } from '@/data'

export { Nav30DataSource }
const data = [
  {
    title: "Quickstart",
    children: [
      {
        title: '📖 Intro',
        content: 'What is Monibuca',
        href: '/docs/guide/introduction.html',
      },
      {
        title: '⏬ Download',
        content: 'Installation and Execution',
        href: '/docs/guide/startup.html',
      },
      {
        title: '💿 Version',
        content: 'Latest Version and Release Notes',
        href: '/docs/guide/v4.html',
      },
    ]
  },
  {
    title: "Handbook",
    children: [
      {
        title: '🛠️ Config',
        content: 'Modifying Configuration Files',
        href: '/docs/guide/config.html',
      },
      {
        title: '🔑 API',
        content: 'Controlling Monibuca via HTTP Requests',
        href: '/docs/guide/api.html',
      },
      {
        title: '🔐 OAuth',
        content: 'Securing Push and Pull Streaming Control',
        href: '/docs/guide/authentication.html'
      },
    ]
  },
  {
    title: "FAQ",
    children: [
      {
        title: '💢 Crash',
        content: 'How to Find the Cause of a Program Crash',
        href: '/docs/guide/qa/error.html',
      },
      {
        title: '🎥 Push',
        content: 'Key Considerations When Push Streaming',
        href: '/docs/guide/qa/push.html',
      },
      {
        title: '🖥️ Play',
        content: 'What is the playback URL？',
        href: '/docs/guide/qa/play.html'
      },
    ]
  },
  {
    title: "Custom",
    children: [
      {
        title: '🦾 Prepare',
        content: 'IDE、Language、Environment',
        href: '/docs/devel/startup.html',
      },
      {
        title: '🧩 Defining Plugins',
        content: 'How to Define a Plugin',
        href: '/docs/devel/plugin.html',
      },
      {
        title: '🔌 Plugin API',
        content: 'How to Expose an HTTP Interface Externally',
        href: '/docs/devel/api.html'
      },
    ]
  },
];
export const Feature140DataSource = {
  wrapper: { className: 'home-page-wrapper Feature14-wrapper' },
  page: { className: 'home-page Feature14' },
  Carousel: {
    className: 'Feature14-content',
    dots: false,
    wrapper: { className: 'Feature14-content-wrapper' },
    titleWrapper: {
      className: 'Feature14-title-wrapper',
      children: [],
      barWrapper: {
        className: 'Feature14-title-bar-wrapper',
        children: {
          className: 'Feature14-title-bar'
        }
      }
    },
    children: data.map((item, i) => ({
      title: { className: 'Feature14-title-text', children: item.title },
      className: 'Feature14-item',
      name: `block${i}`,
      children: item.children.map((child) => ({
        md: 8,
        xs: 24,
        children: {
          className: 'Feature14-text',
          children: (<Space
            className="item"
            style={{ cursor: 'pointer' }}
            onClick={() => {
              window.open(child.href)
            }}
          >
            <Space direction="vertical" align="start">
              <div className="title">{child.title}</div>
              <div className="desc">{child.content}</div>
            </Space>
          </Space>)
        }
      }))
    }))
  }
}
