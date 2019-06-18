﻿import React, { Component } from 'react';
import MainContent from '../../components/MainContent/MainContent';
import {
  Text,
  Pivot,
  PivotItem,
  PrimaryButton,
  css,
  Spinner,
  SpinnerSize,
  Dialog, 
  DialogType,
  DialogFooter,
  DefaultButton,
  Stack
} from 'office-ui-fabric-react';
import { getstyle } from './ProjectDetail.style'
import { ProjectAPI } from '../../api/projects.api';
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
        <Stack className={classNames.outerWrapper} tokens={{ childrenGap: 20 }}>
          <Stack.Item>
            <Stack horizontal tokens={{ childrenGap: 10 }} className={classNames.basicInfoWrapper}>
              <Stack.Item>
                <div className={classNames.imagePreview}></div>
              </Stack.Item>
              <Stack.Item grow disableShrink>
                <Stack horizontal={!isMobile} style={{ height: '100%' }}>
                  <Stack.Item grow disableShrink>
                    <Stack horizontalAlign="start" verticalAlign="center" style={{ height: '100%' }}>
                      <Text variant="xxLarge">{this.state.project.name}</Text>
                      <Text variant="large">
                        {
                          this.state.project.date
                            ? new Date(this.state.project.date).toLocaleDateString()
                            : ''
                        }
                      </Text>
                      <Link
                        to={`/categories/${this.state.project.technology.nameId}`}
                        className={classNames.link}
                      >
                        <Text variant="Large">{this.state.project.technology.name}</Text>
                      </Link>
                    </Stack>
                  </Stack.Item>
                  <Stack.Item>
                    <Stack horizontalAlign="start" verticalAlign="center" style={{ height: '100%' }}>
                    <PrimaryButton
                      text="Project's Website"
                      split={true}
                      onClick={() => {
                        window.open(this.state.project.url, '_blank');
                      }}
                      menuProps={{
                        items: [
                          {
                            key: 'copyUrl',
                            text: 'Copy link',
                            iconProps: { iconName: 'Copy' },
                            onClick: this.onCopyText.bind(this)
                          },
                          {
                            key: 'shareFacebook',
                            text: 'Share link',
                            iconProps: { iconName: 'Share' }
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
          </Stack.Item>
          <Stack.Item>
            <Pivot className={classNames.othersWrapper}>
              <PivotItem headerText="Description">
                <div className={classNames.pivotItem}>
                  {this.state.isLoading
                    ? <Spinner size={SpinnerSize.large} />
                    : this.state.project.description}
                </div>
              </PivotItem>
              <PivotItem headerText="Screenshots">
                <div className={css(classNames.pivotItem, classNames.screenshotWrapper)}>
                  {this.state.project.screenshots
                    ? this.state.project.screenshots.map(
                        (screenshot, index) => (
                          <img src={screenshot} key={index} alt="Hmmmm" className={classNames.screenshot} />
                        )
                      )
                    : (<div>Không có ảnh chụp màn hình</div>)}
                </div>
              </PivotItem>
              <PivotItem headerText="Changelog" className={classNames.pivotItem}>
                Changelog
              </PivotItem>
              <PivotItem headerText="Upcoming features" className={classNames.pivotItem}>
                Upcoming features
              </PivotItem>
            </Pivot>
          </Stack.Item>
        </Stack>
      </MainContent>
    );
  }
}
ProjectDetail.contextType = AppContext;

export default ProjectDetail;