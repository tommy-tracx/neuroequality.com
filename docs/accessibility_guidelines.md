# Accessibility Guidelines (WCAG 2.1)

1. **Color Contrast**
   - Maintain at least 4.5:1 contrast for text and interactive elements.
   - Provide a high-contrast theme option for users with low vision.
2. **Keyboard Navigation**
   - Ensure all interactive elements can be accessed via keyboard without traps.
   - Implement visible focus indicators and logical tab order.
3. **Screen Reader Compatibility**
   - Use semantic HTML tags (e.g., `<header>`, `<nav>`, `<main>`).
   - Provide ARIA labels and roles for complex components.
4. **Text Alternatives**
   - Supply `alt` text for all images and descriptive labels for icons.
   - Caption videos and provide transcripts for audio content.
5. **Error Handling**
   - Clearly describe form errors and suggestions for correction.
   - Avoid color-only indications by adding icons or text cues.
6. **Testing Tools**
   - Use tools like Axe, Lighthouse, and screen reader testing (NVDA, VoiceOver) during development.
