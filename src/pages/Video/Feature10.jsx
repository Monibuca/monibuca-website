import React from 'react';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import { Carousel as AntCarousel, Row, Col, Space, Image } from 'antd';
import TweenOne from 'rc-tween-one';
import Children from 'rc-tween-one/lib/plugin/ChildrenPlugin';

import { getChildrenToRender as kunRender } from '../utils';

TweenOne.plugins.push(Children);

class Feature10 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.carouselRef = React.createRef();
    this.state = {
      current: 0
    };
  }

  onTitleClick = (_, i) => {
    const carouselRef = this.carouselRef.current.childRefs.carousel;
    carouselRef.goTo(i);
  };

  onBeforeChange = (_, newIndex) => {
    this.setState({
      current: newIndex
    });
  };

  getChildrenToRender = dataSource => {
    const { current } = this.state;
    const { Carousel } = dataSource;
    const { titleWrapper, children: childWrapper, wrapper, ...carouselProps } = Carousel;

    const { barWrapper, title: titleChild, ...titleWrapperProps } = titleWrapper;
    const titleToRender = [];

    const childrenToRender = childWrapper.map((item, ii) => {
      const { title, children, ...itemProps } = item;
      titleToRender.push(
        <div
          {...title}
          key={ii.toString()}
          onClick={e => {
            this.onTitleClick(e, ii);
          }}
          className={ii === current ? `${title.className || ''} active` : title.className}
        >
          {title.children}
        </div>
      );
      const childrenItem = children.map(($item, i) => {
        const { number, children: child, ...childProps } = $item;
        return (
          <Col {...childProps} key={i.toString()}>
            <p {...child}>{child.children}</p>
          </Col>
        );
      });
      return (
        <div key={ii.toString()}>
          <QueueAnim type="bottom" component={Row} {...itemProps}>
            {childrenItem}
          </QueueAnim>
        </div>
      );
    });

    const width = 100 / childrenToRender.length;
    return (
      <QueueAnim
        key="queue"
        leaveReverse
        type="bottom"
        delay={[0, 100]}
        {...wrapper}
        ref={this.carouselRef}
      >
        <div {...titleWrapperProps} key="title">
          <div key="title" {...titleWrapper}>
            {titleWrapper.children.map(kunRender)}
          </div>
          <div {...titleChild}>
            {titleToRender}
            <div
              {...barWrapper}
              style={{
                width: `${width}%`,
                left: `${width * current}%`
              }}
            >
              <em {...barWrapper.children} />
            </div>
          </div>
        </div>
        <AntCarousel
          {...carouselProps}
          key="carousel"
          infinite={false}
          beforeChange={this.onBeforeChange}
        >
          {childrenToRender}
        </AntCarousel>
      </QueueAnim>
    );
  };

  render() {
    const { dataSource, isMobile, ...props } = this.props;
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          <div className="feature10-video-title">
            {!isMobile && (
              <Row>
                <Col span={8} className="left"  style={{ overflowY: 'scroll', maxHeight: '450px' }}>
                  <Space direction="vertical">
                    <div className="left-title">Evolution of Monibuca's Architecture</div>
                    <div className="left-title-sub bj">Background Description</div>
                    <div className="left-desc">
                      In order to focus on scalability, Monibuca has undergone several major version iterations in a short period of time, each time refactoring its core. Many users still cannot understand the changes that have occurred in between and whether they should upgrade to the latest version.
                    </div>
                    <div className="left-title-sub dg">Content Outline</div>
                    <div className="left-desc">1. Briefly introduce the characteristics of Monibuca and how it addresses industry pain points.</div>
                    <div class="left-desc">
                      2. Highlight the architectural evolution of Monibuca from 1.0 to 4.0, enabling existing users to understand the necessity of upgrading to 4.0.
                    </div>
                    <div class="left-desc">3. Discuss the challenges encountered when upgrading the architecture of open-source projects.</div>
                  </Space>
                </Col>
                <Col span={16}>
                  {/* <iframe
                    src="//player.bilibili.com/player.html?aid=518354873&bvid=BV1jg411H7qE&cid=910583689&p=1"
                    scrolling="no"
                    border="0"
                    frameborder="no"
                    framespacing="0"
                    allowfullscreen="true"
                    height={"100%"}
                    width={"100%"}
                  >
                    {" "}
                  </iframe> */}
                  <Image
                    style={{ cursor: 'pointer' }}
                    preview={false}
                    src="/img/video-title.png"
                    onClick={() => {
                      window.open(
                        'https://www.bilibili.com/video/BV1jg411H7qE/?vd_source=3385e5c4706f720a2a249f63b97a1849'
                      );
                    }}
                  ></Image>
                </Col>
              </Row>
            )}
            {isMobile && (
              <Row>
                <Col span={24}>
                  <Image
                    style={{ cursor: 'pointer' }}
                    preview={false}
                    src="/img/video-title.png"
                    onClick={() => {
                      window.open(
                        'https://www.bilibili.com/video/BV1jg411H7qE/?vd_source=3385e5c4706f720a2a249f63b97a1849'
                      );
                    }}
                  ></Image>
                </Col>
                <Col span={24} className="left">
                  <Space direction="vertical">
                    <div className="left-title">Evolution of Monibuca's Architecture</div>
                    <div className="left-title-sub bj">Background Description</div>
                    <div class="left-desc">
                      In order to focus on scalability, Monibuca has undergone several major version iterations in a relatively short period, with each iteration involving core refactoring. Many users still struggle to understand the changes that have taken place during these iterations and whether they should upgrade to the latest version.
                    </div>
                    <div class="left-title-sub dg">Content Outline</div>
                    <div class="left-desc">1. Provide a brief introduction to the characteristics of Monibuca and how it addresses industry pain points.</div>
                    <div class="left-desc">
                      2. Highlight the architectural evolution of Monibuca from version 1.0 to 4.0, helping existing users understand the necessity of upgrading to version 4.0.
                    </div>
                    <div class="left-desc">3. Discuss the challenges encountered when upgrading the architecture of open-source projects.</div>
                  </Space>
                </Col>
              </Row>
            )}
          </div>
          {/* <OverPack {...dataSource.OverPack}>
            {this.getChildrenToRender(dataSource)}
          </OverPack> */}
          {this.getChildrenToRender(dataSource)}
        </div>
      </div>
    );
  }
}
export default Feature10;
