"use client";
import { usePathname } from "next/navigation";
import PopupModal from "../popup/PopupModal";

export default function PopupWrapper() {
  const pathname = usePathname();
  return !["/bookwebinar", "/workshop-certificate"].includes(pathname) ? <PopupModal /> : null;
}
