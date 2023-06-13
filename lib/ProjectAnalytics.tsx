"use client";

import { Analytics } from "@vercel/analytics/react";

interface ProjectAnalyticsProps {
  project: string;
}

function ProjectAnalytics({ project }: ProjectAnalyticsProps) {
  return (
    <Analytics
      beforeSend={(event) => {
        console.log(event.url);

        const eventUrl = new URL(event.url);
        const prefixedPath = `/${project}/${eventUrl.pathname}`;

        return {
          ...event,
          url: new URL(prefixedPath, eventUrl.origin).toString(),
        };
      }}
    />
  );
}

export default ProjectAnalytics;
