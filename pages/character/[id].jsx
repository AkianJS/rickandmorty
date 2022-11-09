import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../../styles/CharacterId.module.css"
import Navbar from "../../components/Navbar";

const CharacterDetail = ({character}) => {
  
  if (!character) return <p>Nada</p>
  const detailAnimation = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const pAnimation = {
    hidden: { scale: 0 },
    show: { scale: 1 }
  }

  return (
    <div className={styles.container}>
      <Navbar />
      <motion.div
      initial={{x: -200}}
      animate={{x: 0}}
      transition={{duration: 0.3}}
      >
      
      <Image
        src={character.image}
        alt={character.name}
        width={320}
        height={320}
        />
        </motion.div>
      <motion.div 
        variants={detailAnimation}
        initial="hidden"
        animate="show"
      className={styles.details}>
        <motion.p variants={pAnimation}>{character.name}</motion.p>
        <motion.p variants={pAnimation}>{character.species}</motion.p>
      </motion.div>
    </div>
  );
};

export default CharacterDetail;

export const getServerSideProps = async (context) => {
  const { params } = context
  const { id } = params
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
  const character = await res.json()

  return {
    props: {
      character
    },
  }
}
