"use client";

import Image from "next/image";
import styles from "./profile.module.css";
import ProfilePicture from "/src/app/assets/profile/ton-linkedin.png";
import ButtonEdit from "../components/button-edit/button-edit";
import ButtonCustom from "../components/button-custom/button-custom";
import StoryItem from "../components/story-item/story-item";
import React, { useEffect, useState } from "react";

export default function Profile() {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("http://localhost:5555/read")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  //NEWWWWW

  const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);

  const handleFetchUser = async () => {
    try {
      const response = await fetch(`/api/users/${userId}`);
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  };

  return (
    <div className={styles.profile_container}>
      <div className={styles.profile_picture_container}>
        <Image
          src={ProfilePicture}
          alt="Profile Picture"
          height={100}
          width={100}
          className={styles.profile_picture}
        />
        <div className={styles.interest_box}>
          <span>
            <span className={styles.interest_box_number}>10</span>
            <br />
            <span className={styles.interest_box_word}>Interests</span>
          </span>
        </div>
      </div>
      <div className={styles.profile_description_container}>
        <h1>Ton Jiropas</h1>
        {user && <p>Name: {user.name}</p>}
        <span>
          xxxxxxxxxxx xxxx
          <br />
          xxxxxxxxxxxxx xxxxx
        </span>

        {users.length > 0 && (
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.email}</li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <ButtonEdit />
      </div>
      <div>
        <span>
          <br />
        </span>
      </div>
      <div className={styles.story_container}>
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
        <StoryItem />
      </div>
    </div>
  );
}
