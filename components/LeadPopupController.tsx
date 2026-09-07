"use client";

import { useEffect, useState } from "react";
import LeadPopup from "@/components/LeadPopup";

export default function LeadPopupController() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 20000); // 25 seconds after every load

    return () => clearTimeout(timer);
  }, []);

  return <LeadPopup open={open} onClose={() => setOpen(false)} />;
}
