import React, { Component } from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { IconButton, CommandButton } from 'office-ui-fabric-react/lib/Button';
import NavLink from '../NavLink/NavLink';
import { getStyle } from './TopNav.style';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { AppContext } from '../../context/AppContext';
import { Callout, List, Spinner } from 'office-ui-fabric-react';
import { CommunicationColors } from '@uifabric/fluent-theme';
import { ProjectAPI } from '../../api/projects.api';
import { Link } from 'react-router-dom';

class TopNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      links: [
        { name: 'Project Showcase', href: '/' },
      ],
      isSearchBoxShow: false,
      isSuggestionHide: true,
      searchContent: '',
      searchResuilt: [],
      isSearchDone: true
    };
    this.searchBoxRef = React.createRef();
    this.delayFunc = 0;
  }

  setIsSuggestionHide(bool) {
    this.setState({ isSuggestionHide: bool });
  }

  closeSearchBoxAndRelatedThing() {
    this.setState({
      isSearchBoxShow: false,
      isSuggestionHide: true
    });
  }

  render() {
    const classNames = getStyle();
    const isMobile = window.matchMedia("(max-width: 599px)").matches;
    return (
      <Stack verticalAlign='center' horizontal className={classNames.topNav}>
        {!this.state.isSearchBoxShow ? (
          <>
            <Stack.Item>
              <IconButton
                iconProps={{ iconName: 'GlobalNavButton' }}
                className={classNames.toggleSideBar}
                style={{ color: 'black', marginRight: '0.5rem' }}
                onClick={this.props.onToggleSideBar}
              />
            </Stack.Item>
            <Stack.Item>
              <NavLink href='/'>
                <Text variant='xLarge'>Showcase</Text>
              </NavLink>
            </Stack.Item>
          </>
        ) : (
          <></>
        )}
        <Stack.Item grow disableShrink>
          <Stack horizontal verticalAlign='center'>
            <Stack.Item disableShrink grow>
              <Stack horizontal verticalAlign='center'>
                <Stack.Item disableShrink grow>
                  {(this.state.isSearchBoxShow || !isMobile) ? (
                    <>
                      <Stack horizontalAlign="end">
                        <div ref={this.searchBoxRef} {...isMobile && { style: { width: '100%' } }}>
                          <SearchBox
                            className={classNames.searchBox}
                            {...!isMobile && { styles: { root: { width: 260 } }}}
                            autoComplete="off"
                            placeholder="Type a part of name..."
                            onClear={() => this.setIsSuggestionHide(true)}
                            onChange={e => {
                              if (e) {
                                const text = e.target.value;
                                this.setState({ isSearchDone: false });
                                if (text.trim() !== '') {
                                  this.setState({ searchResuilt: [] })
                                  this.setIsSuggestionHide(false);
                                } else {
                                  this.setIsSuggestionHide(true)
                                }
                                this.setState({ searchContent: text });
                                
                                clearTimeout(this.delayFunc);
                                this.delayFunc = setTimeout(async () => {
                                  this.setState({
                                    searchResuilt: await ProjectAPI.search(text),
                                    isSearchDone: true
                                  });
                                }, 600);
                              }
                            }}
                          />
                        </div>
                      </Stack>
                      <Callout
                        hidden={this.state.isSuggestionHide}
                        target={this.searchBoxRef.current}
                        isBeakVisible={false}
                        gapSpace={2}
                        style={{ width: 260 }}
                      >
                        <Stack
                          verticalAlign="center"
                          style={{
                            height: 40,
                            padding: '0.25rem 1rem 0 1rem',
                            borderBottom: '1px solid rgb(237, 235, 233)'
                          }}
                        >
                          <Text variant="medium" style={{ color: CommunicationColors.primary }}>Result</Text>
                        </Stack>
                        {this.state.searchResuilt.length
                          ? (
                            <List
                              style={{ width: 260 }}
                              items={this.state.searchResuilt}
                              onRenderCell={(item, index) => {
                                return (
                                  <Link to={`/projects/${item._id}`} className={classNames.link}>
                                    <Stack
                                      key={index}
                                      className={classNames.cell}
                                      verticalAlign="center"
                                      onClick={() => this.closeSearchBoxAndRelatedThing()}
                                    >
                                      {item.name} - {item.technology.name}
                                    </Stack>
                                  </Link>
                                );
                              }}
                            />
                          )
                          : !this.state.isSearchDone
                            ? <Spinner style={{ margin: '1rem' }} />
                            : (
                              <Stack
                                style={{ height: 32, padding: '0 1rem' }}
                                verticalAlign="center"
                              >
                                <span className={classNames.overflowText}>Không tìm thấy</span>
                              </Stack>
                            )}
                      </Callout>
                    </>
                  ) : (
                    <></>
                  )}
                </Stack.Item>
                {(this.state.isSearchBoxShow || !isMobile) || (
                  <CommandButton
                    iconProps={{
                      iconName: this.state.isSearchBoxShow
                        ? 'Cancel'
                        : 'Search',
                      styles: { root: { color: 'black' } }
                    }}
                    onClick={() => {
                      this.setState({
                        isSearchBoxShow: !this.state.isSearchBoxShow
                      });
                    }}
                  />
                )}
              </Stack>
            </Stack.Item>
            {!this.state.isSearchBoxShow ? (
              <CommandButton
                className={classNames.findMeButton}
                iconProps={{ iconName: 'World' }}
                text='Find me'
                menuProps={{
                  className: classNames.findMeButtonMenu,
                  styles: { root: { zIndex: 1001 } },
                  items: [
                    {
                      key: 'fb',
                      text: 'Facebook',
                      iconProps: { iconName: 'facebook' },
                      href: this.context.administrator.facebook,
                      target: '_blank'
                    },
                    {
                      key: 'tw',
                      text: 'Twitter',
                      iconProps: { iconName: 'twitter' },
                      href: this.context.administrator.twitter,
                      target: '_blank'
                    },
                    {
                      key: 'ig',
                      text: 'Instagram',
                      iconProps: { iconName: 'instagram' },
                      href: this.context.administrator.instagram,
                      target: '_blank'
                    },
                    {
                      key: 'wp',
                      text: 'Wordpress',
                      iconProps: { iconName: 'wordpress' },
                      href: this.context.administrator.wordpress,
                      target: '_blank'
                    },
                    {
                      key: 'gh',
                      text: 'Github',
                      iconProps: { iconName: 'github' },
                      href: this.context.administrator.github,
                      target: '_blank'
                    }
                  ]
                }}
              />
            ) : (
              <></>
            )}
            {this.state.isSearchBoxShow ? (
              <div
                className={classNames.overlay}
                onClick={() => this.closeSearchBoxAndRelatedThing()}
              ></div>
            ) : null}
          </Stack>
        </Stack.Item>
      </Stack>
    );
  }
}

TopNav.contextType = AppContext;

export default TopNav;