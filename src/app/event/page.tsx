"use client";

import Image from "next/image";
import styles from "./event.module.css";
import ProfilePicture from "/src/app/assets/profile/ton-linkedin.png";
import EventPicture from "/src/app/assets/images/2.jpg";
import ButtonEdit from "../components/button-edit/button-edit";
import ButtonCustom from "../components/button-custom/button-custom";
import StoryItem from "../components/story-item/story-item";
import React, { useEffect, useState } from "react";

export default function Event() {
  return (
    <div className={styles.event_container}>
      <div className={styles.event_picture_container}>
        <Image
          src={EventPicture}
          alt="Event Picture"
          className={styles.event_picture}
        />
      </div>
      <div className={styles.event_detail_container}>
        <div className={styles.event_title}>
          <span>Sunday, 10th July 2023</span>
          <br />
          <span>1:00PM</span>
          <br />
          <span>Badminton</span>
        </div>
        <br />
        <div className={styles.event_description}>
          <span>Location: xxxxxxx</span>
        </div>
      </div>
    </div>
  );
}
