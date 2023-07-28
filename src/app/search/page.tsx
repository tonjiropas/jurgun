"use client";

import Image from "next/image";
import styles from "./search.module.css";
import ProfilePicture from "/src/app/assets/profile/ton-linkedin.png";
import EventPicture from "/src/app/assets/images/2.jpg";
import ButtonEdit from "../components/button-edit/button-edit";
import ButtonCustom from "../components/button-custom/button-custom";
import StoryItem from "../components/story-item/story-item";
import React, { useEffect, useState } from "react";

export default function Event() {
  return (
    <div className={styles.event_container}>
      <div className={styles.event_picture_container}></div>
    </div>
  );
}
