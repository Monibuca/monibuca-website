import { List } from 'antd'
import { Nav30DataSource } from '../../data/index'

export { Nav30DataSource }

const faqData = [
  {
    title: 'What are the requirements for Monibuca to run?',
    description: `Monibuca is written in Go language and can run on any platform that can run Go language, including x86 and
    arm architecture, with no special requirements for machine configuration.`
  },
  {
    title: 'How is Monibuca\'s concurrency?',
    description: `Monibuca benefits from the powerful concurrency of Go language and can fully utilize multi-core computing.`
  },
  {
    title: 'Is Monibuca free?',
    description: `Monibuca is completely open source and free, but software developed based on Monibuca can be charged. In addition, in order to maintain the sustainable development of the project, the team provides customized plugin services and professional version functions, which will be charged.`
  },
  {
    title: 'What is the vision of Monibuca?',
    description: `Monibuca is committed to building an eco-friendly system that is friendly to developers and can greatly reduce the cost of enterprises and individuals in developing media-related systems.`
  }
]

const lifeData = [
  {
    title: 'Developing Flash Video Conference System',
    description: `My earliest work was to develop a Flash video conference system. At that time, I used FCS (Flash Communication Server) as the streaming media server, which was later renamed FMS (Flash Media Server). Many business logics could be directly written as scripts to run. FMS is a server with excellent performance, with cluster function, the only drawback is that it is relatively expensive. So at that time, the open source java-written Red5 was born. The biggest drawback of Red5 is that its performance is relatively poor. In the process of reading the Red5 source code, I got a glimpse of the entire RTMP protocol.`
  },
  {
    title: 'Porting crtmpserver',
    description:
      'At that time, the company did not allow the use of FMS as the server (no budget), and then I found this open source rtmp server, when I used it, I found that the performance was very good. I tried to extend it on top, and implemented some of the functions of FMS, such as sharedobject, etc.'
  },
  {
    title: 'Birth of H5 Player',
    description: (
      <div>
        Actually, everything started with this player, although I have not yet open sourced it, but it has always been the original motivation for me to study and develop streaming media servers. The earliest was to find an open source project
        https://github.com/mbebenita/Broadway, this project is to compile the H264 decoding program into js through emscripten, and play the H264 video by decoding it in the browser. Then I implemented the rtmp protocol js compilation on this basis, and then transmitted it through
        websocket. Later I thought, there is no need to implement rtmp, you can just transmit raw data in websocket, which can save bandwidth and reduce the decoding pressure on the browser side. Then I started to integrate the audio decoding program into the player one after another, and finally integrated the
        h265 decoding program. There are two h265 decoding programs, lib265 and libhevc. It is now open sourced
        <a href="https://github.com/langhuihui/jessibuca">
          https://github.com/langhuihui/jessibuca
        </a>
      </div>
    )
  },
  {
    title: 'Csharprtmp: Painting a Tiger as a Cat',
    description:
      'In order to better extend the functionality and based on my enthusiasm for C#, I ported most of the functions of crtmpserver to C# https://github.com/langhuihui/csharprtmp. In this process, I gained a deep understanding of multi-threading, RTMP protocol, and AMF protocol. Of course, due to my shallow skills, this server is not very stable.'
  },
  {
    title: 'Extending MonaServer',
    description:
      'In order to save bandwidth, I started to study the RTMFP protocol. So I found OpenRTMFP, also known as Cumulus Server. Soon this project became MonaServer, using more modern C++ programming, and it was easier to develop than crtmpserver. So I chose this server for secondary development, once again implemented some of the functions of FMS, and then transmitted the audio and video raw data to the H5 player through WebSocket. But I have been troubled by memory leaks, and have not been able to solve them, so I cannot use it for commercial purposes.'
  },
  {
    title: 'Meeting srs',
    description:
      'I accidentally discovered this powerful server, which can convert srs\'s http-flv into websocket for my h5 player to transmit flv. So I used this combination in a commercial scenario. But after a round of forwarding, I always felt dissatisfied, and wanted to transform srs. But the srs code is very difficult to read, this is not to black srs, it should be that my C++ skills are still too shallow.'
  },
  {
    title: 'Node-Media-Server vs Gortmp',
    description:
      'With the decline of flash, I switched to Node.js, and found the streaming media server Node-Media-Server written in Node.js. At that time, this was still in the early development stage, and I had a lot of discussions with the author, and forked the project, wanting to do secondary development on it. But at that time, the go language was on the rise, and many go-written streaming media servers were born. After comparing multiple go projects, I finally chose gortmp as the basis for secondary development.'
  },
  {
    title: 'Influenced by the progressive thinking of vue',
    description:
      'It was a good experience to quickly develop gortmp, which gave me an inspiration. After experiencing so many rounds of secondary development, I found that secondary development of streaming media servers is a very difficult thing, and golang opened a new door, but it cannot be satisfied with patching. It needs a development framework that anyone can customize quickly. The progressive development idea of vue is very good. Inspired by this, I separated the core and peripheral functions of the streaming media server, and realized the plugin-based framework design.'
  }
]
const teamData = [
  {
    title: 'Core Team',
    description:
      'The core team is composed of individuals who have made significant contributions to Monibuca in terms of code, testing, and resource provision. They share the same values and vision, and grow together with the Monibuca project.'
  },
  {
    title: 'Contributors',
    description: 'Contributors are a group of developers who provide PR for the project. The core team will provide technical assistance to the contributors free of charge.'
  },
  {
    title: 'Sponsors',
    description:
      'Sponsors are individuals or organizations who provide funds and project support for Monibuca. The core team will provide technical support and project development services to the sponsors.'
  }
]

export const Feature140DataSource = {
  wrapper: { className: 'home-page-wrapper feature14-wrapper feature14' },
  page: { className: 'home-page feature14' },
  // OverPack: { className: 'home-page feature14', playScale: 0.3 },
  tabs: {
    className: 'feature14-content',
    wrapper: { className: 'feature14-content-wrapper' },

    titleWrapper: {
      className: 'feature14-title-wrapper',
      children: [{ name: 'title', children: '', className: 'title-h1' }],
      barWrapper: {
        className: 'feature14-title-bar-wrapper',
        children: {
          className: 'feature14-title-bar'
        }
      }
    },

    children: [
      {
        title: { className: 'feature14-title-text', children: 'FAQ' },
        className: 'feature14-item',
        name: 'block0',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature14-text',
              children: (
                <List
                  itemLayout="horizontal"
                  dataSource={faqData}
                  header={<div className="faq-header">FAQ</div>}
                  renderItem={item => (
                    <List.Item className="list-item">
                      <List.Item.Meta
                        title={<div className="faq-title">{item.title}</div>}
                        description={<div className="faq-answer">{item.description}</div>}
                      />
                    </List.Item>
                  )}
                />
              )
            }
          }
        ]
      },
      {
        title: { className: 'feature14-title-text', children: 'Development Team' },
        className: 'feature14-item',
        name: 'block1',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature14-text',
              children: (
                <List
                  itemLayout="horizontal"
                  dataSource={teamData}
                  header={<div className="faq-header">Development Team</div>}
                  renderItem={item => (
                    <List.Item className="list-item">
                      <List.Item.Meta
                        title={<div className="faq-title">{item.title}</div>}
                        description={<div className="faq-answer">{item.description}</div>}
                      />
                    </List.Item>
                  )}
                />
              )
            }
          }
        ]
      },
      {
        title: { className: 'feature14-title-text', children: 'The Birth Story' },
        className: 'feature14-item',
        name: 'block2',
        children: [
          {
            md: 24,
            xs: 24,
            children: {
              className: 'feature14-text',
              children: (
                <List
                  itemLayout="horizontal"
                  dataSource={lifeData}
                  header={<div className="faq-header">The Birth Story</div>}
                  renderItem={item => (
                    <List.Item className="list-item">
                      <List.Item.Meta
                        title={<div className="faq-title">{item.title}</div>}
                        description={<div className="faq-answer">{item.description}</div>}
                      />
                    </List.Item>
                  )}
                />
              )
            }
          }
        ]
      }
    ]
  }
}
