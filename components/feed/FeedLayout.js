import React from "react";
import Sidenav from "../layout/Sidenav";
import Feed from "./Feed";
import NotiActions from "./NotiActions";

export default function FeedLayout() {
  return (
    <main className="flex flex-col flex-1 min-w-0 overflow-hidden bg-brand-main">
      <div className="flex flex-1 overflow-hidden">
        {/* Primary column */}
        <Feed />
        {/* Secondary column (hidden on smaller screens) */}
        <NotiActions />
      </div>
    </main>
  );
}
