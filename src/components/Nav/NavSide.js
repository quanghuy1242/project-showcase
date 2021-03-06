import React, { Component } from 'react';
import { Nav } from 'office-ui-fabric-react/lib/Nav';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import { initializeIcons } from '@uifabric/icons';
import { Link, withRouter } from 'react-router-dom';
import { getStyle } from './NavSide.style';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
initializeIcons()

class NavSide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        {
          name: 'Home',
          url: '/',
          key: "keyHome",
          icon: 'Home'
        },
        {
          name: 'Projects',
          url: '/projects',
          key: "keyProjects",
          icon: 'TimelineProgress'
        },
        {
          name: 'Categories',
          url: '/categories',
          key: 'keyCategories',
          icon: 'Taskboard'
        },
        {
          name: 'Blog',
          url: 'http://quanghuy.web.app/home',
          key: 'keyBlog',
          icon: 'ReadingMode'
        },
        {
          name: 'About',
          url: '/about',
          key: 'keyAbout',
          icon: 'Info'
        }
      ],
      selectedKey: null
    };
  }

  componentDidMount() {
    this.props.history.listen((location, action) => {
      const currentRoute = this.state.links.find(link => link.url === location.pathname);
      if (currentRoute) {
        this.setState({
          selectedKey: currentRoute.key
        });
        this.props.isOverlay && !this.props.isCollapsed && this.props.onDismiss(); // đóng navside chỉ khi navside đang mở
      };
    })
  }

  onRenderLink = (props) => {
    const content =
      <span style={{display: 'flex'}}>
        { props.iconProps && <Icon style={{margin: '0 10px', fontSize: '20px'}} {...props.iconProps} /> }
        {props.children}
      </span>
    return (
      /^(http|https).+/.test(props.href)
        ? (
          <a 
            className={props.className} 
            style={{color: 'inherit', boxSizing: 'border-box'}}
            href={props.href}
            target='_blank'
            rel='noopener noreferrer'
          >
            {content}
          </a>
        )
        : (
          <Link 
            className={props.className}
            style={{color: 'inherit', boxSizing: 'border-box'}}
            to={props.href}
          >
            {content}
          </Link>
        )
    );
  }

  render() {
    let selectedKey = this.state.selectedKey ? this.state.selectedKey : null;
    const classNames = getStyle(this.props);
    return (
      <>
        <div className={classNames.navWrapper}>
          {/* <div className={classNames.searchBoxWrapper}>
            <SearchBoxTop />
          </div> */}
          <Nav
            expandedStateText="expanded"
            collapsedStateText="collapsed"
            {...selectedKey}
            onLinkClick={() => {}}
            styles={{
              root: {
                width: 250,
                boxSizing: 'border-box',
                overflowY: 'auto',
                zIndex: 98,
                height: 'calc(100vh - 180px)',
                marginTop: '0.5rem',
              }
            }}
            groups={[{ links: this.state.links }]}
            linkAs={this.onRenderLink}
          />
          <Separator />
          <Stack className={classNames.credit} verticalAlign="center" horizontalAlign="center">
            <Text nowrap>Project Showcase</Text>
            <Text nowrap>2019</Text>
          </Stack>
        </div>
        {
          this.props.isOverlay
            ? !this.props.isCollapsed
              ? <div className={classNames.navOverlay} onClick={this.props.onDismiss}></div>
              : <></>
            : <></>
        }
      </>
    );
  }
}

export default withRouter(NavSide);