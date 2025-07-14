// import { motion } from 'framer-motion';

import { Header } from './components/Header';
import { GlobalStyles } from './styles/GlobalStyles';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        {/* add content here */}
      </main>
      {/* <Footer /> */}
    </>
  );
}


// import { motion } from 'framer-motion';

// import { AboutPage } from './components/AboutPage';
// import { Contact } from './components/Contact';
// import { Footer } from './components/Footer';
// import { Header } from './components/Header';
// import { Portfolio } from './components/Portfolio';
// import { ProfilePage } from './components/ProfilePage';
// import { SocialMedia } from './components/SocialMedia';

// import './styles/App.css';
// import './styles/reset.css';

// export const App = () => {
//   return (
//     <div className="App">
//       <Header />
//       <SocialMedia />
//       <ProfilePage />
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
