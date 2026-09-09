import React, { useEffect, useState } from 'react';
import { GithubIcon } from './BrandIcons';

const GITHUB_USERNAME = 'yash-dev26';
const HEATMAP_URL = `https://ghchart.rshah.org/409ba5/${GITHUB_USERNAME}`;

export function Activity() {
  const [contributionCount, setContributionCount] = useState(null);

  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`)
      .then((response) => response.ok ? response.json() : null)
      .then((data) => {
        if (!data?.contributions) return;
        const total = data.contributions.reduce((sum, day) => sum + day.count, 0);
        setContributionCount(total);
      })
      .catch(() => setContributionCount(null));
  }, []);

  return (
    <section id="activity" className="py-14 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex items-end mb-6">
          <span className="section-watermark">Activity</span>
        </div>

        <div className="flex items-center justify-end mb-5">
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Open GitHub profile"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>

        <div className="w-full overflow-x-auto pb-1">
          <img
            src={HEATMAP_URL}
            alt={`${GITHUB_USERNAME}'s GitHub contribution activity`}
            className="w-full min-w-170 h-auto opacity-80"
          />
        </div>

        <div className="flex items-center justify-between mt-3 text-[11px] font-mono text-neutral-500">
          <span>
            {contributionCount === null ? 'Contributions in the last year' : `${contributionCount.toLocaleString()} contributions in the last year`}
          </span>
          <div className="flex items-center gap-2" aria-label="Contribution intensity: less to more">
            <span>Less</span>
            <span className="flex items-center gap-1" aria-hidden="true">
              <i className="w-2.5 h-2.5 rounded-sm bg-white" />
              <i className="w-2.5 h-2.5 rounded-sm bg-sky-300" />
              <i className="w-2.5 h-2.5 rounded-sm bg-sky-500" />
              <i className="w-2.5 h-2.5 rounded-sm bg-sky-700" />
            </span>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  );
}
