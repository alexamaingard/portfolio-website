import { useState } from 'react';

import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/Contact';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { IntroPage } from './components/IntroPage';
import { PortfolioSection } from './components/PortfolioSection';
import { SocialMedia } from './components/SocialMedia';
import { GlobalStyles } from './styles/GlobalStyles';
import { pageMarginStyle } from './styles/shared';
import { ModeSidebar } from './components/mode/ModeSidebar';
import { ThemeProvider } from '@emotion/react';
import { calmTheme, playfulTheme } from './styles/themes';
import { ConstellationBackground } from './components/ConstellationBg';

export default function App() {
  const [mode, setMode] = useState<'calm' | 'playful'>('calm');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const theme = mode === 'calm' ? calmTheme : playfulTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <ModeSidebar
        mode={mode}
        setMode={setMode}
        isOpen={sidebarOpen}
        toggleOpen={() => setSidebarOpen(!sidebarOpen)}
      />
      {mode === 'playful' && <ConstellationBackground />}
      <main css={pageMarginStyle}>
        <SocialMedia />
        <IntroPage />
          <AboutSection />
        <ExperienceSection />
        {/* @todo consider adding a projects section here for apps/games etc as things pop up */}
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </ThemeProvider>
  );
}
