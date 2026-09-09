import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle2, ExternalLink, Play } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { profileData } from '../data/profileData';
import { getTechIconUrl } from '../utils/badges';

// Extracts a playable YouTube embed ID from a youtu.be/ or youtube.com/ link.
function getYouTubeEmbedId(url) {
  if (!url) return null;
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{6,})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{6,})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{6,})/,
  ];
  for (const re of patterns) {
    const m = url.match(re);
    if (m) return m[1];
  }
  return null;
}
function isYouTubeUrl(url) {
  return !!getYouTubeEmbedId(url);
}

// Compact, wrapping row of monochrome technology marks.
function TechMarquee({ tags }) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      {tags.map((tag) => {
        const iconUrl = getTechIconUrl(tag);
        if (!iconUrl) return null;
        return (
          <img
            key={tag}
            src={iconUrl}
            alt={tag}
            title={tag}
            className={`w-4 h-4 object-contain ${iconUrl.startsWith('/assets/') ? 'local-tech-icon brightness-0 invert opacity-60' : 'opacity-70'}`}
          />
        );
      })}
    </div>
  );
}

// Wraps a trigger (e.g. the "Live Site" icon) with a floating, minimalist
// preview that appears on hover: a scaled-down live iframe when the page
// actually loads, or a GitHub fallback card when there's no live link, the
// project's media is a video, or the target blocks iframing (detected via
// a load timeout, since cross-origin frame refusals don't fire onError).
function LivePreviewTrigger({ url, repoUrl, title, className = '', children }) {
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const timeoutRef = useRef(null);

  const canEmbed = !!url && !isYouTubeUrl(url);

  useEffect(() => {
    if (hovered && canEmbed && !loaded) {
      timeoutRef.current = setTimeout(() => setBlocked(true), 1800);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [hovered, canEmbed, loaded]);

  const showFallback = !canEmbed || blocked;

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      {hovered && (
        <div className="pointer-events-none absolute z-50 bottom-full right-0 mb-2 animate-[fadeIn_0.15s_ease-out]">
          <div className="w-64 h-40 rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl relative">
            {canEmbed && (
              <div className={`absolute inset-0 transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
                <div style={{ width: '1280px', height: '800px', transform: 'scale(0.2)', transformOrigin: 'top left' }}>
                  <iframe
                    src={url}
                    title="Live preview"
                    className="w-[1280px] h-[800px] border-0"
                    loading="lazy"
                    sandbox="allow-scripts allow-same-origin"
                    onLoad={() => setLoaded(true)}
                  />
                </div>
              </div>
            )}
            {showFallback && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-neutral-950">
                <GithubIcon className="w-6 h-6 text-neutral-500" />
                <span className="text-[10px] font-mono text-neutral-400">
                  {url ? 'Preview unavailable' : "Not live yet"} — view source
                </span>
                <span className="text-[9px] text-neutral-600 truncate max-w-[200px]">{title}</span>
              </div>
            )}
          </div>
          <div className="mt-1.5 text-center text-[9px] font-mono text-neutral-500 bg-neutral-950/90 border border-neutral-800 rounded px-2 py-0.5 truncate">
            {showFallback ? (repoUrl || '').replace(/^https?:\/\//, '') : url.replace(/^https?:\/\//, '')}
          </div>
        </div>
      )}
    </div>
  );
}

// Feature media — YouTube embed when a video link exists, otherwise the still image.
// Fixed aspect-video height so every card's media block matches, regardless of type.
function ProjectMedia({ project }) {
  const embedId = getYouTubeEmbedId(project.videoUrl);
  if (embedId) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        title={project.title}
        className="w-full h-full border-0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return (
    <img
      src={project.previewImage}
      alt={project.title}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
  );
}

function YouTubePreview({ project, onPlay }) {
  const embedId = getYouTubeEmbedId(project.videoUrl);

  return (
    <button
      type="button"
      onClick={onPlay}
      className="absolute inset-0 w-full h-full cursor-pointer group"
      title="Play project video"
    >
      <img
        src={`https://img.youtube.com/vi/${embedId}/maxresdefault.jpg`}
        alt={project.title}
        onError={(event) => { event.currentTarget.src = project.previewImage; }}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/35 transition-colors">
        <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white text-neutral-950 shadow-xl group-hover:scale-105 transition-transform">
          <Play className="w-6 h-6 ml-0.5 fill-current" />
        </span>
      </span>
    </button>
  );
}

export function Projects({ showToast }) {
  const [selectedProject, setSelectedProject] = useState(null);
  const [videoProject, setVideoProject] = useState(null);

  const handleAction = (type, url) => {
    if (!url || url.includes('#')) {
      showToast(`${type} link coming soon!`);
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-14 relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Section watermark header */}
        <div className="flex items-end mb-6">
          <span className="section-watermark">Projects</span>
        </div>

        {/* Project Cards Grid – work-card-shell style, 2-col.
            Every card shares the exact same DOM shape (media block, overlay row,
            content block) so rows stay aligned regardless of image vs. video media. */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {profileData.projects.map((project) => {
            const hasVideo = isYouTubeUrl(project.videoUrl);
            return (
              <div key={project.id} className="work-card-shell h-full">
                <div className="work-card-inner h-full flex flex-col">

                  {/* Media — hovering anywhere on the image shows the live preview,
                      and clicking it opens the live site (when there is one) */}
                  <div className="relative w-full aspect-video overflow-hidden bg-neutral-900 rounded-t-[5px]">
                    {hasVideo ? (
                      <>
                        <YouTubePreview project={project} onPlay={() => setVideoProject(project)} />
                        <div className="absolute top-3 left-3">
                          <span className="text-[10px] font-mono px-2 py-1 rounded bg-black/60 border border-white/10 text-neutral-300 backdrop-blur-sm">
                            {project.category}
                          </span>
                        </div>
                        <div className="absolute top-3 right-3">
                          <button
                            onClick={() => handleAction('GitHub', project.repoUrl)}
                            className="p-1.5 rounded-md bg-black/60 border border-white/10 text-neutral-300 hover:text-white backdrop-blur-sm transition-colors"
                            title="GitHub Repository"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </>
                    ) : (
                      <LivePreviewTrigger
                        url={project.liveUrl}
                        repoUrl={project.repoUrl}
                        title={project.title}
                        className="w-full h-full"
                      >
                        <button
                          type="button"
                          onClick={() => handleAction('Live Site', project.liveUrl)}
                          className="absolute inset-0 w-full h-full cursor-pointer group"
                          title={project.liveUrl ? 'Open live site' : 'Live site coming soon'}
                        >
                          <ProjectMedia project={project} />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-colors duration-300 group-hover:from-black/75" />
                          <span className="absolute inset-0 flex items-center justify-center gap-2 text-xs font-mono font-bold tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <ExternalLink className="w-4 h-4" />
                            <span>View project</span>
                          </span>
                        </button>

                        <div className="absolute top-3 left-3 pointer-events-none">
                          <span className="text-[10px] font-mono px-2 py-1 rounded bg-black/60 border border-white/10 text-neutral-300 backdrop-blur-sm">
                            {project.category}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3">
                          <button
                            onClick={(e) => { e.stopPropagation(); handleAction('GitHub', project.repoUrl); }}
                            className="p-1.5 rounded-md bg-black/60 border border-white/10 text-neutral-300 hover:text-white backdrop-blur-sm transition-colors"
                            title="GitHub Repository"
                          >
                            <GithubIcon className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </LivePreviewTrigger>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-sm font-bold text-white tracking-tight leading-snug mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-neutral-500 text-xs leading-relaxed line-clamp-4 mb-3 tracking-tight">
                      {project.summary}
                    </p>

                    {/* Tech stack marquee + details link */}
                    <div className="mt-auto pt-3 border-t border-neutral-900">
                      <TechMarquee tags={project.tags} />
                      <div className="flex justify-end mt-2">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-[11px] font-mono text-neutral-400 hover:text-white underline underline-offset-4 shrink-0 transition-colors"
                        >
                          Details →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {videoProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
          onClick={() => setVideoProject(null)}
        >
          <div
            className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden border border-neutral-800 bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setVideoProject(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 text-neutral-300 hover:text-white border border-white/10 transition-colors"
              title="Close video"
            >
              <X className="w-4 h-4" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${getYouTubeEmbedId(videoProject.videoUrl)}?autoplay=1&rel=0`}
              title={videoProject.title}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Project Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-neutral-950 border border-neutral-800 rounded-2xl max-w-xl w-full p-6 relative shadow-2xl max-h-[88vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-neutral-900 text-neutral-500 hover:text-white border border-neutral-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-400 uppercase tracking-wider">
              {selectedProject.category}
            </span>

            <h3 className="text-xl font-bold text-white mt-3 tracking-tight leading-snug">
              {selectedProject.title}
            </h3>

            {/* Media — plain display in the modal (hover/click preview only lives on the homepage cards) */}
            <div className="relative w-full aspect-video overflow-hidden bg-neutral-900 rounded-xl border border-neutral-800 my-4">
              <ProjectMedia project={selectedProject} />
            </div>

            <p className="text-neutral-400 text-sm leading-relaxed tracking-tight">
              {selectedProject.description}
            </p>

            <div className="mt-4 space-y-2">
              <h4 className="text-[10px] font-mono font-bold text-neutral-600 uppercase tracking-widest">
                Technical Highlights
              </h4>
              {selectedProject.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-neutral-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h4 className="text-[10px] font-mono font-bold text-neutral-600 uppercase tracking-widest mb-2">
                Tech Stack
              </h4>
              <TechMarquee tags={selectedProject.tags} />
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-900 flex items-center gap-2">
              <div className="btn-shell">
                <button
                  onClick={() => handleAction('Repo', selectedProject.repoUrl)}
                  className="btn-surface"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub</span>
                </button>
              </div>
              {!isYouTubeUrl(selectedProject.videoUrl) && (
                <LivePreviewTrigger url={selectedProject.liveUrl} repoUrl={selectedProject.repoUrl} title={selectedProject.title}>
                  <div className="btn-shell">
                    <button
                      onClick={() => handleAction('Live', selectedProject.liveUrl)}
                      className="btn-surface"
                    >
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                      <span>Live Site</span>
                    </button>
                  </div>
                </LivePreviewTrigger>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
