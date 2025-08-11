# Media Logos Directory

This directory contains logo files for media outlets featured in the SocialProof component.

## Logo Guidelines

### File Format
- Use SVG format when possible for scalability
- PNG fallbacks should be at least 400px wide
- All logos should be in grayscale/monochrome

### Naming Convention
- Use lowercase with hyphens: `media-name.svg`
- Examples: `bbc.svg`, `the-atlantic.svg`, `scmp.svg`

### Required Logos
1. BBC
2. The Globe and Mail
3. The Japan Times
4. The Atlantic
5. Niskanen Center
6. Digital Journal
7. South China Morning Post (SCMP)
8. Poynter

### Usage
Import logos in the SocialProof component:
```tsx
import bbcLogo from '@/assets/logos/bbc.svg';
import atlanticLogo from '@/assets/logos/the-atlantic.svg';
// etc.
```

## Adding New Logos
1. Obtain official logo from media outlet's press kit or brand guidelines
2. Convert to grayscale/monochrome
3. Save as SVG (preferred) or high-resolution PNG
4. Update SocialProof component to import and use the new logo