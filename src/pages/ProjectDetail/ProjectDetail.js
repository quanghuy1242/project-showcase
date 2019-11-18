import React, { Component } from 'react';
import MainContent from '../../components/MainContent/MainContent';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';
import { Spinner, SpinnerSize } from 'office-ui-fabric-react/lib/Spinner';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Image, ImageFit } from 'office-ui-fabric-react/lib/Image';
import { css } from '@uifabric/utilities';
import { getstyle } from './ProjectDetail.style'
import { ProjectAPI } from '../../api/projects.api';
import { AppContext } from '../../context/AppContext';
import { withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './github-markdown.css';

class ProjectDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        technology: {}
      },
      seoData: {},
      isLoading: false,
      dialogTitle: "",
      dialogSubText: "",
      isDialogHidden: true
    };
  }

  onToggleLoading() {
    this.setState({ isLoading: !this.state.isLoading });
  }

  onCopyText() {
    navigator.clipboard.writeText(`${this.context.baseUrl}${this.props.match.url}`)
      .then(() => this.handleOpenDialog("Thành công", "Đã copy thành công link vào bộ nhớ tạm"));
  }

  handleCloseDialog() {
    this.setState({ isDialogHidden: true });
  }

  handleOpenDialog(title, subText) {
    this.setState({
      dialogTitle: title,
      dialogSubText: subText,
      isDialogHidden: false
    });
  }

  async componentDidMount() {
    try {
      this.onToggleLoading();
      const project = await ProjectAPI.getProject(this.props.match.params.id);
      this.setState({
        project: project,
        seoData: {
          title: `${project.name} - ${project.technology.name}`,
          description: project.description.split(' ').slice(0, 40).join(' '),
          url: `${this.context.baseUrl}${this.props.match.url}`
        }
      });
      this.onToggleLoading();
    } catch (error) {
      this.props.history.push('/404');
    }
  }

  render() {
    const classNames = getstyle({
      image: this.state.project.image
    });
    const isMobile = window.matchMedia("(max-width: 599px)").matches;
    // const isMobile2 = window.matchMedia("(max-width: 1115px)").matches;
    return (
      <MainContent isChild={true} className={classNames.projectDetailWrapper}>
        <Helmet>
          <title>{this.state.seoData.title}</title>
          <meta name="keywords" content={this.state.seoData.title} />
          <meta name="description" content={this.state.seoData.description} />
          <meta property="og:title" content={this.state.seoData.title} />
          <meta property="og:url" content={this.state.seoData.url} />
          <meta property="og:image" content={this.state.project.image} />
          <meta property="og:image:alt" content={this.state.seoData.description} />
          <meta property="og:description" content={this.state.seoData.description} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={this.state.seoData.title} />
          <meta name="twitter:text:title" content={this.state.seoData.title} />
          <meta name="twitter:image" content={this.state.project.image} />
          <meta name="twitter:image:alt" content={this.state.seoData.description} />
          <meta name="twitter:description" content={this.state.seoData.description} />
        </Helmet>
        <Dialog
          hidden={this.state.isDialogHidden}
          onDismiss={() => this.handleCloseDialog()}
          dialogContentProps={{
            type: DialogType.normal,
            title: this.state.dialogTitle,
            subText: this.state.dialogSubText
          }}
        >
          <DialogFooter>
            <DefaultButton text="Close" onClick={() => this.handleCloseDialog()} />
          </DialogFooter>
        </Dialog>
        {
          this.state.isLoading
          ? <Spinner size={SpinnerSize.large} style={{ height: 'calc(100vh - 55px)' }} />
          : (
            <Stack className={classNames.outerWrapper} tokens={{ childrenGap: 15 }}>
              <Stack.Item>
                <div className={classNames.topWrapper}>
                  <Image
                    src={this.state.project.image}
                    alt="image"
                    width="100%"
                    height={300}
                    imageFit={ImageFit.cover}
                    className={classNames.bigImage}
                  />
                  <Stack horizontal={!isMobile} tokens={{ childrenGap: 10 }} className={classNames.basicInfoWrapper}>
                    <Stack.Item>
                      <div className={classNames.imagePreview}></div>
                    </Stack.Item>
                    <Stack.Item grow disableShrink>
                      <Stack horizontal={!isMobile} style={{ height: '100%' }} tokens={{ childrenGap: 8 }}>
                        <Stack.Item grow disableShrink>
                          <Stack horizontalAlign="start" verticalAlign="center" style={{ height: '100%' }}>
                            <Text variant={isMobile ? "xLarge" : "superLarge"} className={classNames.whiteText}>{this.state.project.name}</Text>
                            {!isMobile
                              ? (
                                  <Text variant="medium" className={css(classNames.whiteText, classNames.date)}>
                                    {
                                      this.state.project.date
                                        ? new Date(this.state.project.date).toLocaleDateString()
                                        : ''
                                    }
                                  </Text>
                                )
                              : <></>}
                            <DefaultButton
                              text={this.state.project.technology.name}
                              className={classNames.buttonTech}
                              onClick={() => this.props.history.push(`/categories/${this.state.project.technology.nameId}`)}
                            />
                          </Stack>
                        </Stack.Item>
                        <Stack.Item>
                          <Stack 
                            horizontal
                            horizontalAlign="start" 
                            verticalAlign="center" 
                            style={{ height: '100%' }}
                            tokens={{ childrenGap: 5 }}
                          >
                            <PrimaryButton
                              text="Website"
                              href={this.state.project.url}
                              target="_blank"
                            />
                            <PrimaryButton
                              onRenderMenuIcon={() => false}
                              iconProps={{ iconName: 'MoreVertical' }}
                              style={{ minWidth: 0, padding: '0 0.3rem' }}
                              menuProps={{
                                items: [
                                  {
                                    key: 'copyUrl',
                                    text: 'Copy Url',
                                    iconProps: { iconName: 'Copy' },
                                    onClick: this.onCopyText.bind(this)
                                  },
                                  {
                                    key: 'repository',
                                    text: 'Repository',
                                    iconProps: { iconName: 'Repo' },
                                  }
                                ],
                                alignTargetEdge: true
                              }}
                            />
                          </Stack>
                        </Stack.Item>
                      </Stack>
                    </Stack.Item>
                  </Stack>
                </div>
              </Stack.Item>
              <Stack.Item>
                <Text block className={css(classNames.basicDes)}>
                  {this.state.project.briefDescription}
                </Text>
              </Stack.Item>
              <Stack.Item>
                <Pivot className={classNames.othersWrapper}>
                  <PivotItem headerText="Description">
                    <div 
                      className={css(classNames.pivotItem, 'markdown-body')}
                      dangerouslySetInnerHTML={{ __html: this.state.project.descriptionHTML }}
                    >
                    </div>
                  </PivotItem>
                  <PivotItem headerText="Screenshots">
                    <Stack
                      tokens={{ childrenGap: 8 }}
                      className={css(classNames.pivotItem, classNames.screenshotWrapper)}
                    >
                      {this.state.project.screenshots
                        ? this.state.project.screenshots.length !== 0
                          ? this.state.project.screenshots.map(
                                (screenshot, index) => (
                                  screenshot
                                    ? <img
                                        src={screenshot}
                                        key={index}
                                        alt="Hmmmm"
                                        className={classNames.screenshot}
                                      />
                                    : null
                                )
                              )
                            : (<div>Không có ảnh chụp màn hình</div>)
                        : <></>}
                    </Stack>
                  </PivotItem>
                </Pivot>
              </Stack.Item>
            </Stack>
          )
        }
      </MainContent>
    );
  }
}
ProjectDetail.contextType = AppContext;

export default withRouter(ProjectDetail);