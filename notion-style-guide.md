# Landing Page Style Guide

## 1. Design Principles

### Core Values
- **Simplicity**: Clean, minimal interface with purposeful white space
- **Flexibility**: Modular components that adapt to different contexts
- **Clarity**: Clear visual hierarchy and intuitive navigation
- **Playfulness**: Subtle animations and "Nosey" character elements add personality

## 2. Color Palette

### Primary Colors
- **Black**: `#000000` - Primary text, logos
- **White**: `#FFFFFF` - Backgrounds, reversed text
- **Blue**: Primary brand color (buttons, accents)

### Neutral Colors
- **Gray 900**: `var(--color-gray-900)` - Headings
- **Gray 800**: `var(--color-gray-800)` - Body text
- **Gray 600**: `var(--color-gray-600)` - Muted text
- **Gray 500**: `var(--color-gray-500)` - Subtle text
- **Gray 400**: Light borders and dividers

### Accent Colors (Bento Cards)
- **Red**: AI Meeting Notes card
- **Blue**: Enterprise Search card
- **Yellow**: Projects card
- **Light Gray**: Mail card
- **Teal**: Business-in-a-box card

### UI Colors
- **Shadow**: `var(--shadow-undefined)` - Subtle shadows
- **Border**: Light gray borders for cards and inputs

## 3. Typography

### Type Scale
The design uses a systematic typography scale with Sans font family:

#### Display/Hero
- **Hero Heading**: Sans 600-700 bold
- **Hero Subheading**: Sans 400-500 regular

#### Headings
- **H1**: Sans 600 bold
- **H2**: Sans 500 semibold  
- **H3**: Sans 400 semibold
- **H4**: Sans 300 medium

#### Body Text
- **Body Large**: Sans 200 regular
- **Body Regular**: Sans 150 regular
- **Body Small**: Sans 100 regular
- **Caption**: Sans 50 regular

### Font Properties
- **Font Family**: System sans-serif stack
- **Line Height**: 1.4-1.6 for body text, tighter for headings
- **Letter Spacing**: Slightly negative for large headings

## 4. Spacing System

### Base Unit
8px grid system with consistent multipliers:

- **4px**: Micro spacing
- **8px**: Small spacing
- **16px**: Default spacing
- **24px**: Medium spacing
- **32px**: Large spacing
- **48px**: Extra large spacing
- **64px**: Section spacing
- **96px+**: Hero/major section spacing

## 5. Layout & Grid

### Container Widths
- **Max Width**: 1440px for main content
- **Narrow**: 960px for focused content
- **Wide**: Full width with padding

### Grid System
- **12-column grid** for desktop
- **Responsive breakpoints**:
  - Mobile: < 740px
  - Tablet: 741px - 959px
  - Desktop: 960px - 1079px
  - Large: 1080px+

## 6. Components

### Buttons

#### Primary Button
- Background: Blue
- Text: White
- Padding: 16px 24px
- Border radius: 8px
- Hover: Darker blue
- Sizes: S, M, L

#### Secondary Button
- Background: Transparent
- Text: Current color
- Border: 1px solid
- Hover: Light background

#### Tertiary Button
- Background: Light gray
- Text: Dark gray
- No border
- Hover: Darker background

### Navigation

#### Global Navigation
- Sticky header
- Logo on left
- Navigation links center
- CTAs on right
- Dropdown menus with animations

#### Mobile Navigation
- Hamburger menu
- Full-screen overlay
- Vertical link stack

### Cards/Bento Boxes

#### Standard Card
- Background: Colored
- Padding: 32px
- Border radius: 16px
- Shadow on hover
- Icon + heading + description + link

#### Wide Card
- Spans full width
- Horizontal layout on desktop
- Same styling as standard

### Forms & Inputs

#### Text Input
- Border: 1px solid gray
- Padding: 12px 16px
- Border radius: 8px
- Focus: Blue border

### Social Proof

#### Testimonial Card
- Logo image
- Quote text
- Attribution
- Link with arrow

#### Stats
- Icon + metric
- Horizontal scroll on mobile

## 7. Icons & Imagery

### Icon System
- Line icons: 16-24px default
- Consistent 1.5-2px stroke width
- Monochrome by default

### Image Treatment
- Rounded corners (8-16px)
- High quality product screenshots
- Animated GIFs for character elements

### Nosey Character
- Animated mascot in bento cards
- Different animations per context:
  - Writing
  - Searching
  - Greeting
  - Thinking
  - Working

## 8. Motion & Animation

### Transitions
- **Duration**: 200-300ms default
- **Easing**: Ease-in-out
- **Properties**: Transform, opacity

### Hover States
- Subtle scale (1.02-1.05)
- Shadow elevation
- Color shifts

### Page Elements
- Scroll-triggered animations
- Video autoplay on scroll
- Smooth scrolling

## 9. Responsive Behavior

### Mobile Adaptations
- Stack layouts vertically
- Increase touch targets (min 44px)
- Hide non-essential elements
- Drawer navigation

### Tablet
- 2-column layouts
- Adjusted typography scale
- Touch-friendly spacing

## 10. Accessibility

### Focus States
- Visible focus rings
- High contrast (3:1 minimum)
- Skip navigation links

### ARIA Labels
- Descriptive button labels
- Landmark regions
- Screen reader announcements

### Color Contrast
- WCAG AA compliance
- Text: 4.5:1 minimum
- Large text: 3:1 minimum

## 11. Content Patterns

### Hero Section
- Large heading
- Supporting subheading
- Dual CTA buttons
- Hero image/video

### Logo Wall
- Grayscale logos
- Consistent height
- Horizontal scroll on mobile

### Feature Sections
- Alternating layouts
- Image + text combinations
- Clear visual hierarchy

### Footer
- Multi-column layout
- Grouped link categories
- Social media icons
- Language selector

## 12. Best Practices

### Performance
- Lazy load images
- Optimize video formats
- Minimize CSS/JS

### SEO
- Semantic HTML
- Descriptive alt text
- Structured data

### Consistency
- Use design tokens
- Follow naming conventions
- Document variations