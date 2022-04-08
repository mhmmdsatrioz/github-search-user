import React from "react";
import { Avatar } from "antd";
import moment from "moment";
import toast, { Toaster } from "react-hot-toast";

const Card = ({ data, error, loading }) => {
  let {
    avatar_url,
    name,
    login,
    bio,
    following,
    followers,
    public_repos,
    created_at,
    location,
    company,
    twitter_username,
    html_url,
    blog,
  } = data;

  let date = moment(created_at).format("d MMMM  Y");

  return (
    <>
      <div className="card">
        {loading ? (
          <h1>Loading....</h1>
        ) : (
          <div className="profile">
            <div className="avatar">
              <Avatar size={100} src={avatar_url} />
            </div>

            <div className="profile-user">
              <div className="name">
                <h1>{name}</h1>
                <a className="link" target="_blank" href={html_url}>
                  @{login}
                </a>
                <div className="bio">
                  <div>
                    <p>{bio === null ? "This profile has no bio" : bio}</p>
                  </div>
                  <div className="section-info">
                  <div className="section-information">
                      <span>Repos</span>
                    <h2>{public_repos}</h2>
                  </div>
                  <div className="section-information">
                      <span>Followers</span>
                    <h2>{followers}</h2>
            </div>
            <div className="section-information">
                      <span>Following</span>
                    <h2>{following}</h2>
                  </div>
                  </div>
              </div>
                   </div>

              <div className="section-right">
                <p className="joined">Joined {date}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
