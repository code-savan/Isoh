1. Layout & Structure

Use generous white space between sections.

Keep sections vertically aligned and consistent in width.

Stick to max width of 1200px for main containers.

Use grids or flex layouts for clean alignment.

Avoid clutter; keep focus on typography and motion.

2. Colors

Primary Text: #1c1c1c

Accent Color: #201c17

Background: #ffffff or light neutral (#f9f9f9)

Glass Panels: Semi-transparent with subtle blur and tint from the accent color

Example: rgba(255, 255, 255, 0.15) with backdrop-filter: blur(10px)

Avoid gradients unless they are soft accent overlays.

3. Typography

Font Family: Use clean, geometric sans-serif fonts like Inter, Satoshi, or Neue Haas.

Body Text: #1c1c1c, 14px, line height 1.6.

Headings: Use simple hierarchy (H1-H3), weight contrast over size.

H1: 40px

H2: 28px

H3: 20px

Limit typefaces to one or two max.

Avoid letter spacing unless for buttons or labels.

4. Buttons

Combine text + icon (icons from Lucide or Feather).

Padding: 10px 18px.

Border radius: 12px.

No permanent shadows.

Add soft hover shadow (0 2px 6px rgba(0,0,0,0.1)).

Motion: smooth scale-up or color fade on hover.

If bordered, use thin 1px lines.

Example styles:

Primary: Accent background with white text.

Secondary: Transparent background with 1px border and accent text.

Glass Button (optional): Subtle blur and accent tint.

5. Motion & Interactions

All section entries should use gentle Framer Motion transitions.

Fade + translateY(20px) for entry.

Fade out + translateY(-10px) for exit.

Stagger animations for child elements.

Hover states should feel responsive and fluid.

Scroll-based reveals should use low easing (easeOutCubic) and subtle delays.

6. Imagery

Use Unsplash for all placeholder images.

Keep consistent visual tone (soft light, minimal background, human or object focus).

Use rounded corners (12px radius).

Avoid overlays or excessive blending unless it’s part of glassmorphism elements.

7. Components

Cards: Minimal border (1px), no shadow unless hover. Optional glass effect with blur.

Sections: Maintain consistent padding (top/bottom 80px).

Navbar/Footer: Transparent or glass-style with blur and accent tint.

Inputs: Minimal border, subtle focus glow matching accent color.

8. General Feel

Minimalistic.

Balanced.

Soft transitions.

No harsh contrast or aggressive shadows.

Use glassmorphism only to highlight key sections (nav, hero overlay, CTA cards).
