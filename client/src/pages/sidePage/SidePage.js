import React, { useContext } from "react";
import "./SidePage.scss";
import { sidePages } from "./sidePages";
import FollowersSidePage from "./followersSidePage/FollowersSidePage";
import FollowingSidePage from "./followingSidePage/FollowingSidePage";
import CreatePostSidePage from "./createPostSidePage/CreatePostSidePage";
import pageContext from "../../context/page/pageContext";
import Button from "@mui/material/Button";
import Profile from "../profile/Profile";
import ViewPostSidePage from "./viewPostSidePage/ViewPostSidePage";
import Loading from "../../components/loading/Loading";
import userContext from "../../context/user/userContext";

const SidePage = props => {
  const { isLoading } = useContext(userContext);
  const { removeSidePage } = useContext(pageContext);
  const returnSidePage = () => {
    switch (props.sidePage) {
      case sidePages.FOLLOWING:
        return <FollowingSidePage userId={props.userId} />;

      case sidePages.FOLLOWERS:
        return <FollowersSidePage userId={props.userId} />;

      case sidePages.CREATE_POST:
        return <CreatePostSidePage />;

      case sidePages.VIEW_POST:
        return <ViewPostSidePage post={props.post} />;

      default:
        return null;
    }
  };

  return (
    <>
      <>
        <div className='side-page-background'> </div>
        <div className='side-page-container'>
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className='side-page-header'>
                <h1 className='side-page-title'>{props.sidePage}</h1>
                <Button
                  className='side-page-close-btn'
                  variant='text'
                  onClick={() => removeSidePage()}>
                  X
                </Button>
              </div>
              <div className='side-page-contents'>{returnSidePage()}</div>
            </>
          )}
        </div>
      </>
    </>
  );
};

export default SidePage;
