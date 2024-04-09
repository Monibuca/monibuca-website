import React from 'react'
import TweenOne from 'rc-tween-one'
import QueueAnim from 'rc-queue-anim'
import { Row, Col, Popover } from 'antd'
import { getChildrenToRender, isImg } from '../../utils'
import './less/antMotionStyle.less'

class Footer extends React.Component {
  static defaultProps = {
    className: 'footer1'
  }

  getLiChildren = data =>
    data.map((item, i) => {
      const { title, childWrapper, ...itemProps } = item
      return (
        <Col key={i.toString()} {...itemProps} title={null} content={null}>
          <h2 {...title}>
            {typeof title.children === 'string' && title.children.match(isImg) ? (
              <img src={title.children} width="100%" alt="img" />
            ) : (
              title.children
            )}
          </h2>
          <div {...childWrapper}>{childWrapper.children.map(getChildrenToRender)}</div>
        </Col>
      )
    })

  render() {
    const { ...props } = this.props
    const { dataSource, isMobile } = props
    delete props.dataSource
    delete props.isMobile
    const childrenToRender = this.getLiChildren(dataSource.block.children)
    return (
      <div {...props} {...dataSource.wrapper}>
        <div {...dataSource.page}>
          {!isMobile && (
            <div className="footer1-top">
              <div className="footer1-top-left">
                <img src="/img/footer-logo.png" height={39} alt="" />
              </div>
              <div className="footer1-top-right">
                <div className="footer1-top-right-item">
                  <a
                    href="https://github.com/langhuihui/monibuca"
                    style={{ opacity: 0.5 }}
                    target="blank"
                  >
                    <img src="/svg/github.svg" alt="" width={30} />
                  </a>
                </div>
                <div className="footer1-top-right-item">Monibuca Community</div>
                <div className="footer1-top-right-item">|</div>
                <div className="footer1-top-right-item">Support us</div>
                <div className="footer1-top-right-item">
                  <Popover
                    content={
                      <div>
                        <img src="/img/wx-pay.jpg" alt="" height={250} />
                      </div>
                    }
                  >
                    <img src="/img/weixin.png" alt="" width={30} />
                  </Popover>
                </div>
                <div className="footer1-top-right-item">
                  <Popover
                    content={
                      <div>
                        <img src="/img/zf-pay.jpg" alt="" height={250} />
                      </div>
                    }
                  >
                    <img src="/img/zhifubao.png" alt="" width={30} />
                  </Popover>
                </div>
              </div>
            </div>
          )}
          <QueueAnim type="bottom" key="ul" leaveReverse component={Row} {...dataSource.block}>
            {childrenToRender}
          </QueueAnim>
        </div>
        <TweenOne
          animation={{ y: '+=30', opacity: 0, type: 'from' }}
          key="copyright"
          {...dataSource.copyrightWrapper}
        >
          <div {...dataSource.copyrightPage}>
            <div {...dataSource.copyright}>{dataSource.copyright.children}</div>
          </div>
        </TweenOne>
      </div>
    )
  }
}

export default Footer
