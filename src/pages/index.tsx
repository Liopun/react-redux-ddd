import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { BrowserHistory } from 'history';
import InfiniteScroll from 'react-infinite-scroller';
import { IUserOperators } from "../modules/users/redux/operators";
import { PostState } from "../modules/posts/redux/states";
import { SpecialLayout } from '../shared/layout';
import usersOperators from '../modules/users/redux/operators'
import postsOperators, { IPostOperators } from '../modules/posts/redux/operators'
import PostItem from '../modules/posts/components/Post/Item';
import { UserState } from '../modules/users/redux/states';
import { Container, Fab, Toolbar } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import debounce from 'lodash.debounce';
import {
    Tabs,
    TabList,
    Tab,
    TabPanel,
    tabClasses,
    LinearProgress,
    Typography
} from '@mui/joy';
import {
    CssVarsProvider as JoyCssVarsProvider
} from "@mui/joy/styles";
import PostHeader from '../modules/posts/components/Post/Header';
import NavBar from '../shared/components/NavBar';
import ScrollTop from '../shared/components/ScrollTop';
import ScrollElevation from '../shared/components/ScrollElevation';
import withSignoutHandling from '../modules/users/hocs/withSignoutHandlers';
import { User } from '../modules/users/models/user';
import { Post } from '../modules/posts/models/post';
import { FeedMode } from '../shared/constants/feedModes';
import { Bounce, toast } from 'react-toastify';
import { toastError, toastSuccess } from '../shared/utils/ToastUtil';

interface IndexPageProps extends IUserOperators, IPostOperators {
    users: UserState
    posts: PostState
    history: BrowserHistory
}

interface IndexPageState {
    selectedTab: string;
    hasMore: boolean;
    scrollLoading: boolean;
    // postContainer: RefObject<HTMLDivElement | null>;
    postReactionIndex: number | null;
}

let prevPage = -1

class IndexPage extends React.Component<IndexPageProps, IndexPageState> {
    constructor (props: IndexPageProps) {
        super(props);

        this.state = {
            selectedTab: FeedMode.GLOBAL,
            hasMore: true,
            scrollLoading: false,
            postReactionIndex: null
        }
    }

    getLastId (): string | undefined {
        const allPosts = this.populatePostsForSelectedTab();
        return allPosts.length > 0 ? allPosts[allPosts.length - 1].id : undefined;
    }

    setSelectedTab (tabValue: string) {
        this.setState({
            ...this.state,
            selectedTab: tabValue
        })
    }

    setPostReactionIndex (index: number | null) {
        this.setState({
            ...this.state,
            postReactionIndex: index
        })
    }

    onTabChanged (prevState: IndexPageState) {
        const currentState: IndexPageState = this.state as IndexPageState;
        if (prevState.selectedTab !== currentState.selectedTab) {
            this.requestPosts(5, this.getLastId())
        }
    }

    populatePostsForSelectedTab (): Post[] {
        if (this.state.selectedTab === FeedMode.GLOBAL) {
          return this.props.posts.globalPosts;
        } else {
          return this.props.posts.postFeed;
        }
    }

    requestPosts (pageSize: number, lastCursor?: string, reset?: boolean) {
        if (this.state === undefined) return

        if (this.state.selectedTab === FeedMode.GLOBAL) {
            if (this.props.posts.isGettingGlobalPosts) return
            this.props.getGlobalPosts(pageSize, lastCursor, reset)
        } else {
            if (this.props.posts.isGettingPostFeed) return
            this.props.getPostFeed((this.props.users.user as User).id, pageSize, lastCursor, reset)
        }
    }


    debouncedProfileFetch = debounce(() => {
        this.props.getUserProfile()
    }, 300);

    afterSuccessfulPublish (prevProps: IndexPageProps) {
        const currentProps: IndexPageProps = this.props;
        if (currentProps.posts.isPublishingPostSuccess && !prevProps.posts.isPublishingPostSuccess) {
            this.requestPosts(5, undefined, true)
            toastSuccess(this.props.posts.message)
        }
    }
  
    afterFailedPublish (prevProps: IndexPageProps) {
        const currentProps: IndexPageProps = this.props;
        if (currentProps.posts.isPublishingPostFailure && !prevProps.posts.isPublishingPostFailure) {
            toastError(`Publishing error...! ${currentProps.posts.error}`)
        }
    }

    afterSuccessfulRemoval (prevProps: IndexPageProps) {
        const currentProps: IndexPageProps = this.props;
        if (currentProps.posts.isRemovingPostSuccess && !prevProps.posts.isRemovingPostSuccess) {
            toastSuccess(this.props.posts.message)
        }
    }
  
    afterFailedRemoval (prevProps: IndexPageProps) {
        const currentProps: IndexPageProps = this.props;
        if (currentProps.posts.isRemovingPostFailure && !prevProps.posts.isRemovingPostFailure) {
            toastError(`Removing error...! ${currentProps.posts.error}`)
        }
    }

    afterSuccessfulReport (prevProps: IndexPageProps) {
        const currentProps: IndexPageProps = this.props;
        if (currentProps.posts.isReportingPostSuccess && !prevProps.posts.isReportingPostSuccess) {
            toastSuccess(this.props.posts.message)
        }
    }
  
    afterFailedReport (prevProps: IndexPageProps) {
        const currentProps: IndexPageProps = this.props;
        if (currentProps.posts.isReportingPostFailure && !prevProps.posts.isReportingPostFailure) {
            toastError(`Reporting error...! ${currentProps.posts.error}`)
        }
    }

    afterSuccessfulSub (prevProps: IndexPageProps) {
        const currentProps: IndexPageProps = this.props;
        if (currentProps.posts.isSubscribingPostSuccess && !prevProps.posts.isSubscribingPostSuccess) {
            toastSuccess(this.props.posts.message)
        }
    }
  
    afterFailedSub (prevProps: IndexPageProps) {
        const currentProps: IndexPageProps = this.props;
        if (currentProps.posts.isSubscribingPostFailure && !prevProps.posts.isSubscribingPostFailure) {
            toastError(`Subscribing error...! ${currentProps.posts.error}`)
        }
    }

    afterSuccessfulUnsub (prevProps: IndexPageProps) {
        const currentProps: IndexPageProps = this.props;
        if (currentProps.posts.isUnsubscribingPostSuccess && !prevProps.posts.isUnsubscribingPostSuccess) {
            toastSuccess(this.props.posts.message)
        }
    }
  
    afterFailedUnsub (prevProps: IndexPageProps) {
        const currentProps: IndexPageProps = this.props;
        if (currentProps.posts.isUnsubscribingPostFailure && !prevProps.posts.isUnsubscribingPostFailure) {
            toastError(`Unsubscribing error...! ${currentProps.posts.error}`)
        }
    }

    shouldComponentUpdate(nextProps: Readonly<IndexPageProps>, nextState: Readonly<IndexPageState>): boolean {
        return (nextProps.posts !== this.props.posts ||
            nextState.selectedTab !== this.state.selectedTab ||
            nextState.postReactionIndex !== this.state.postReactionIndex)
    }

    componentDidUpdate (prevProps: Readonly<IndexPageProps>) {
        this.afterSuccessfulPublish(prevProps)
        this.afterFailedPublish(prevProps);

        this.afterSuccessfulRemoval(prevProps);
        this.afterFailedRemoval(prevProps);

        this.afterSuccessfulReport(prevProps);
        this.afterFailedReport(prevProps);

        this.afterSuccessfulSub(prevProps);
        this.afterFailedSub(prevProps);

        this.afterSuccessfulUnsub(prevProps);
        this.afterFailedUnsub(prevProps);
    }
    
    componentDidMount () {
        this.debouncedProfileFetch()
    }

    componentWillUnmount() {
        this.debouncedProfileFetch.cancel()
    }

    render () {
        const { selectedTab, hasMore, postReactionIndex } = this.state

        return (
            <SpecialLayout>
                <ScrollElevation {...this.props}>
                    <NavBar activeItem="Home" username={(this.props.users.user as User).username} />
                </ScrollElevation>
                
                <Toolbar id="back-to-top-anchor" sx={{ minHeight: '.5rem !important' }} disableGutters />
                <Container
                    sx={{
                        width: { md: '42rem' }
                    }}
                    id="index-page-container"
                >
                    <JoyCssVarsProvider>
                        <PostHeader
                            isPublishing={this.props.posts.isPublishingPost}
                            isPublishingSuccess={this.props.posts.isPublishingPostSuccess}
                            publishPost={(content: string, tags: string[]) => {
                                !this.props.posts.isPublishingPost && this.props.publishPost(content, tags)
                            }}
                            prepareTags={() => this.props.getTags()}
                            getTags={() => this.props.posts.tags}
                        />
                        <Tabs aria-label="posts-tabs" value={selectedTab} 
                            sx={{
                                bgcolor: 'transparent',
                                borderColor: '#808080',
                            }}
                            onChange={(event, value) => this.setSelectedTab(value as string)}
                        >
                            <TabList
                                disableUnderline
                                sx={{
                                    p: 0.5,
                                    gap: 0.5,
                                    borderRadius: 'xl',
                                    bgcolor: '#FFFFFF',
                                    border: '1px solid rgba(128, 128, 128, .5)',
                                    [`& .${tabClasses.root}[aria-selected="true"]`]: {
                                        boxShadow: 'sm',
                                        bgcolor: 'rgba(235, 237, 239, 1)',
                                    },
                                    [`& .${tabClasses.root}:hover`]: {
                                        borderColor: '#808080',
                                    },
                                }}
                            >
                                <Tab value={FeedMode.GLOBAL} disableIndicator>Global</Tab>
                                <Tab value={FeedMode.FOLLOWING} disableIndicator>Following</Tab>
                            </TabList>
                            <TabPanel value={FeedMode.GLOBAL} sx={{ px: 0, minHeight: '30rem', overflow: "auto" }}>
                                <InfiniteScroll
                                    pageStart={0}
                                    loadMore={(page) => {
                                        if (prevPage === page || this.props.posts.isGettingGlobalPosts) return
                                        console.debug("Tttwiiiceeee::::", page, prevPage, !this.props.posts.noMoreGlobalPosts)
                                        prevPage = page
                                        this.requestPosts(5, this.getLastId())
                                    }}
                                    hasMore={!this.props.posts.noMoreGlobalPosts}
                                    loader={
                                        <LinearProgress
                                            color="neutral"
                                            size="sm"
                                            key="linear-p-p"
                                            variant="plain"
                                            sx={{
                                                "--LinearProgress-radius": "20px"
                                            }}
                                        />
                                    }
                                >
                                    {this.populatePostsForSelectedTab().map((post, index) => (
                                        !post.reportedByMe &&
                                        <PostItem
                                            key={index}
                                            myUserId={(this.props.users.user as User).id}
                                            byMe={(this.props.users.user as User).username === post.author}
                                            firstItem={index === 0}
                                            post={post}
                                            addOrUpdateReaction={(postId, reaction, type) => this.props.togglePostReaction(postId, reaction, type)}
                                            removeReaction={(postId: string) => this.props.removePostReaction(postId)}
                                            isReactionPopperShowing={() => index === postReactionIndex}
                                            onReactionMouseEnter={() => this.setPostReactionIndex(index)}
                                            onReactionMouseLeave={() => this.setPostReactionIndex(null)}
                                            history={this.props.history}
                                            removePost={(postId: string) => {
                                                !this.props.posts.isRemovingPost && this.props.removePost(postId)
                                            }}
                                            reportPost={(postId: string) => {
                                                !this.props.posts.isReportingPost && this.props.reportPost(postId)
                                            }}
                                            subscribePost={(postId: string) => {
                                                !this.props.posts.isSubscribingPost && this.props.subscribePost(postId)
                                            }}
                                            unsubscribePost={(postId: string) => {
                                                !this.props.posts.isUnsubscribingPost && this.props.unsubscribePost(postId)
                                            }}
                                        />
                                    ))}
                                </InfiniteScroll>
                                {!hasMore && <Typography level="h4" width={'100%'}>All caught up</Typography>}
                            </TabPanel>
                            <TabPanel value={FeedMode.FOLLOWING} sx={{ px: 0, minHeight: '30rem' }}>
                                <LinearProgress
                                    color="neutral"
                                    size="sm"
                                    variant="plain"
                                    sx={{
                                        "--LinearProgress-radius": "20px"
                                    }}
                                />
                            </TabPanel>
                        </Tabs>
                    </JoyCssVarsProvider>
                </Container>
                <ScrollTop {...this.props}>
                    <Fab size="small" aria-label="scroll back to top">
                        <KeyboardArrowUpIcon />
                    </Fab>
                </ScrollTop>
            </SpecialLayout>
        )
    }
}

const mapStateToProps = ({ users, posts }: { users: UserState, posts: PostState }) => {
    return {
      users,
      posts
    };
}

const mapActionCreatorsToProps = (dispatch: any) => {
    return bindActionCreators(
      {
        ...usersOperators,
        ...postsOperators,
      }, dispatch);
}
  
export default connect(mapStateToProps, mapActionCreatorsToProps)(
    withSignoutHandling(IndexPage)
);