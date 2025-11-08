# Web Development Business Website - Design Guidelines

## Design Approach

**Selected Approach**: Reference-Based (Apple HIG)

**Justification**: Professional B2B service website requiring premium aesthetic to convey expertise and trust. Apple's design philosophy—minimalism, clarity, and product focus—perfectly aligns with showcasing technical capabilities while maintaining approachability.

**Core Principles**:
- Generous white space to create breathing room and focus attention
- Premium feel through refined typography and clean layouts
- Subtle depth through soft shadows and layering
- Content-first approach with strategic visual hierarchy

---

## Typography System

**Font Families** (via Google Fonts CDN):
- Primary: 'Inter' - Modern, highly legible sans-serif for UI and body text
- Accent: 'SF Pro Display' fallback to 'Inter' - For headlines matching Apple aesthetic

**Type Scale**:
- Hero Headline: text-6xl md:text-7xl lg:text-8xl, font-bold, tracking-tight
- Section Headings: text-4xl md:text-5xl, font-semibold, tracking-tight
- Subsection Headings: text-2xl md:text-3xl, font-semibold
- Body Large: text-xl md:text-2xl, font-normal, leading-relaxed
- Body Standard: text-base md:text-lg, font-normal, leading-relaxed
- Captions: text-sm md:text-base, font-medium

---

## Layout System

**Spacing Primitives**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm

**Section Padding**: py-16 md:py-24 lg:py-32 for major sections

**Container Strategy**:
- Full-width sections with inner max-w-7xl mx-auto px-6
- Content-focused sections: max-w-6xl
- Text-heavy content: max-w-4xl for optimal readability

**Grid System**:
- Technology showcase: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Pricing cards: grid-cols-1 md:grid-cols-3
- Feature highlights: grid-cols-1 lg:grid-cols-2

---

## Component Library

### Navigation
Sticky header with backdrop blur effect, max-w-7xl container, flex justify-between items-center, py-4 px-6. Logo left-aligned, navigation links center (hidden on mobile), CTA button right-aligned. Mobile: hamburger menu with slide-out drawer.

### Hero Section
Full-width section (min-h-screen flex items-center) with high-quality background image showing modern workspace or abstract tech visualization. Overlay with subtle gradient for text readability. Centered content (max-w-4xl) with large headline, supporting subheadline (text-xl opacity-90), and dual CTA buttons (primary + secondary outline). Buttons with backdrop-blur-lg bg-white/10 for glass effect over image.

### Technology Showcase
Grid layout with individual technology cards. Each card: rounded-2xl border with subtle shadow, p-8 spacing, icon at top (using Heroicons via CDN - code brackets, document, sparkles, etc.), technology name as heading, brief description text. Cards use hover:scale-105 transition-transform for subtle interaction feedback.

### Services Section
Two-column layout (lg:grid-cols-2) alternating image and text blocks. Text blocks include heading, paragraph description, and bulleted feature list. Images show work samples or team collaboration (described in Images section). Each row reverses column order for visual variety.

### Pricing Section
Three-column card layout with middle tier highlighted (ring-2 border, slight scale transform). Each card: rounded-3xl with shadow-xl, p-8 md:p-12 spacing. Header with tier name and large price display, feature list with checkmark icons, bottom-aligned CTA button spanning card width.

### Contact Section
Two-column split (lg:grid-cols-2 gap-16). Left column: contact form with floating label inputs, textarea for message, full-width submit button. Right column: contact information cards showing email, phone, location with corresponding icons, business hours display, embedded map placeholder or office image.

### Footer
Multi-column layout (grid-cols-2 md:grid-cols-4) with company info, quick links, services menu, and newsletter signup. Bottom bar with copyright, social media icons (Heroicons: brand icons), and legal links. Background with subtle contrast from main content.

---

## Animations

Minimal, purposeful animations only:
- Scroll-triggered fade-in for section reveals (opacity and translateY)
- Card hover states (scale and shadow)
- Button hover/active states (handled by component)
- Smooth scroll behavior for anchor links
- Navigation backdrop blur on scroll

---

## Images Section

**Hero Image**: Full-width, high-quality photograph of modern minimalist workspace with MacBook, clean desk setup, natural lighting. Alternative: Abstract geometric patterns with gradient overlays suggesting code/digital creation. Image should convey professionalism and modern technology aesthetic.

**Services Section Images**: 
- Mockup of responsive website designs on multiple devices
- Team collaboration workspace photo (bright, professional)
- Code editor screenshot showing clean, organized code
- Analytics dashboard or performance metrics visualization

**Quality Standards**: All images crisp, professional photography or high-fidelity mockups. Consistent color treatment and lighting. Images serve content, never decorative filler.