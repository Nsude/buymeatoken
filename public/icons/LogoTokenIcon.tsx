import { Icon } from "../../app.models";

export default function LogoTokenIcon({color, size}: Icon) {
  return (
    <svg width={ size || "25"} height={size || "25"} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.7643 0.0709229L0.765331 21.1905L4.25054 24.0709L10.7419 19.4744H6.94692L12.8069 9.03829L18.6986 19.5278H14.7579L21.3291 24.0558L24.7653 21.2157L12.7643 0.0709229Z" fill={ color || "white"} />
    </svg>
  )
}