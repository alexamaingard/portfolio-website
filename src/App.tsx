// import { motion, Transition } from 'framer-motion';

import { AboutSection } from './components/AboutSection';
// import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { IntroPage } from './components/IntroPage';
import { SocialMedia } from './components/SocialMedia';
import { GlobalStyles } from './styles/GlobalStyles';
import { pageMarginStyle } from './styles/shared';

export default function App() {
  // const motionTransitionProps: Transition<unknown> | undefined = {
  //   duration: 1.5,
  //   delay: 0.3,
  //   ease: "easeInOut",
  // };

  return (
    <>
      <GlobalStyles />
      <Header />
      <main css={pageMarginStyle}>
        <SocialMedia />
        <IntroPage />
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.3,
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
        > */}
          <AboutSection />
        {/* </motion.div> */}
        {/* <ExperienceSection /> */}
      </main>
      <Footer />
    </>
  );
}

// export const App = () => {
//   return (
//     <div className="App">
//       <Header />
//       <SocialMedia />
//       <ProfilePage />
      // <motion.div
      //   initial={{ opacity: 0 }}
      //   whileInView={{ opacity: 1 }}
      //   transition={{
      //     duration: 1.5,
      //     delay: 0.1,
      //     ease: "easeInOut"
      //   }}
      //   viewport={{ once: true }}
      // >
//         <AboutPage />
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{
//           duration: 1,
//           delay: 0.1,
//           ease: "easeInOut"
//         }}
//         viewport={{ once: true }}
//       >
//         <Portfolio />
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{
//           duration: 1.5,
//           delay: 0.1,
//           ease: "easeInOut"
//         }}
//         viewport={{ once: true }}
//       >
//         <Contact />
//       </motion.div>
//       <Footer />
//     </div>
//   );
// };
