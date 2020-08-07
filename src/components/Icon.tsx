import React from "react"
import { SocialIcon } from "./styles"
import Facebook from "@material-ui/icons/Facebook"
import Linkedin from "@material-ui/icons/Linkedin"
import Email from "@material-ui/icons/Email"
import GitHub from "@material-ui/icons/GitHub"

interface IconProps {
  type: IconType
}

type IconType = "Facebook" | "Linkedin" | "Email" | "GitHub"

const icons: Record<IconType, JSX.Element> = {
  Facebook: <Facebook />,
  Linkedin: <Linkedin />,
  Email: <Email />,
  GitHub: <GitHub />,
}

const Icon = ({ type }: IconProps) => {
  return <SocialIcon>{icons[type]}</SocialIcon>
}

export default Icon
