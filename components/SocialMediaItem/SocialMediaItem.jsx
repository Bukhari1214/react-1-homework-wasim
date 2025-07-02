import { Img } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export default function SocialMediaItem({ url, title, icon }) {
  return (
    <li>
      <Image
        src={icon}
        alt={title}
        boxSize="24px"
        mr="8px"
        height={"24"}
        width={"24"}
      />
      <a href={url}>{title}</a>
    </li>
  );
}
