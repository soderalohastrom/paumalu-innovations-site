# Privacy Policy Component

This directory contains the SMS-compliant privacy policy page component that can be easily integrated when you add React Router.

## Quick Integration

1. **Install React Router:**
   ```bash
   npm install react-router-dom
   ```

2. **Add routing to App.tsx:**
   ```tsx
   import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
   import { PrivacyPolicy } from './components/PrivacyPolicy'
   
   // Wrap your app content in Router
   <Router>
     <Routes>
       <Route path="/" element={<MainContent />} />
       <Route path="/privacy-policy" element={<PrivacyPolicy />} />
     </Routes>
   </Router>
   ```

3. **Update build settings:**
   - Add `public/_redirects` file with SPA routing (already included)

## Files in this Directory

- `PrivacyPolicy.tsx` - Complete privacy policy component
- `privacy-policy-static.html` - Static HTML fallback version
- `sms-compliance-checklist.md` - Verification checklist

## SMS Compliance Notes

The privacy policy includes all required elements for 10DLC registration:
- ✅ Data collection disclosure
- ✅ No marketing sharing statement  
- ✅ Mobile opt-in protection
- ✅ Clear opt-out instructions
- ✅ Contact information
- ✅ Professional formatting

## Deployment Notes

Once added, your privacy policy will be available at:
- `https://paumalu-innovations.com/privacy-policy`
- Automatically included in sitemap
- Linked from contact form
- Accessible to carrier reviewers
