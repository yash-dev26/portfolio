// Shields.io badge metadata for known tech-stack tags. Add an entry whenever
// a new tag needs a matching badge — tags without one still render, just as
// a plain neutral badge with no logo.
const BADGE_INFO = {
  'Python': { color: '3776AB', logo: 'python', logoColor: 'white' },
  'TypeScript': { color: '3178C6', logo: 'typescript', logoColor: 'white' },
  'JavaScript': { color: 'F7DF1E', logo: 'javascript', logoColor: 'black' },
  'Node.js': { color: '339933', logo: 'nodedotjs', logoColor: 'white' },
  'Express': { color: '000000', logo: 'express', logoColor: 'white' },
  'Fastify': { color: '000000', logo: 'fastify', logoColor: 'white' },
  'FastAPI': { color: '009688', logo: 'fastapi', logoColor: 'white' },
  'LangChain': { color: '1C3C3C', logo: 'langchain', logoColor: 'white' },
  'LangGraph': { color: '1C3C3C' },
  'Qdrant': { color: 'DC244C', logo: 'qdrant', logoColor: 'white' },
  'OpenAI API': { label: 'OpenAI', color: '412991', logo: 'openai', logoColor: 'white' },
  'LangSmith': { color: '1C3C3C' },
  'Ragas Eval': { label: 'Ragas', color: '3B3B3B' },
  'React': { color: '61DAFB', logo: 'react', logoColor: 'black' },
  'TailwindCSS': { color: '06B6D4', logo: 'tailwindcss', logoColor: 'white' },
  'MongoDB': { color: '47A248', logo: 'mongodb', logoColor: 'white' },
  'Redis': { color: 'DC382D', logo: 'redis', logoColor: 'white' },
  'Docker': { color: '2496ED', logo: 'docker', logoColor: 'white' },
  'PostgreSQL': { color: '4169E1', logo: 'postgresql', logoColor: 'white' },
  'GitHub Actions': { color: '2088FF', logo: 'githubactions', logoColor: 'white' },
};

const DEFAULT_COLOR = '3B3B3B';

const LOCAL_TECH_ICONS = {
  'LangGraph': '/assets/langgraph.svg',
  'OpenAI API': '/assets/openai.svg',
  'LangSmith': '/assets/langsmith.svg',
};

// Builds a flat-square Shields.io badge URL for a tech tag, e.g.
// getBadgeUrl('React') -> https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black
export function getBadgeUrl(tag) {
  const info = BADGE_INFO[tag] || {};
  const label = (info.label || tag)
    .replace(/-/g, '--')
    .replace(/_/g, '__')
    .replace(/ /g, '_');

  const params = new URLSearchParams({ style: 'for-the-badge' });
  if (info.logo) {
    params.set('logo', info.logo);
    params.set('logoColor', info.logoColor || 'white');
  }

  return `https://img.shields.io/badge/-${label}-${info.color || DEFAULT_COLOR}?${params.toString()}`;
}

// Returns a monochrome Simple Icons asset for compact project tech rows.
export function getTechIconUrl(tag) {
  if (LOCAL_TECH_ICONS[tag]) return LOCAL_TECH_ICONS[tag];
  const logo = BADGE_INFO[tag]?.logo;
  return logo ? `https://cdn.simpleicons.org/${logo}/a1a1aa` : null;
}
