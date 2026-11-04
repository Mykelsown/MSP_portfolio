import email from "../assets/icons3d/email.webp";
import github from "../assets/icons3d/github.svg";
import location from "../assets/icons3d/location.webp";
import phone from "../assets/icons3d/phone.webp";

const ICONS = { email, phone, github, location };

// Decorative 3D icon for contact details. The text next to it carries the meaning,
// so the image is hidden from assistive tech.
export default function Icon3D({ name, size = 40, className = "" }) {
  return (
    <img
      src={ICONS[name]}
      alt=""
      width={size}
      height={size}
      decoding="async"
      draggable="false"
      className={`icon-3d shrink-0 select-none object-contain ${className}`}
      style={{ width: size, height: size }}
    />
  );
}
