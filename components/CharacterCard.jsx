import Image from "next/image";
import Link from "next/link";
import styles from "../styles/CharacterCard.module.css";
import { motion } from "framer-motion";

const CharacterCard = ({ character }) => {
  const item = {
    hidden: { scale: 0 },
    show: { scale: 1 }
  }
  return (
    <Link href={`/character/${character.id}`}>
      <motion.li 
      variants={item}
      layoutId={character.id}
      className={styles.container}>
        <Image
          alt={character.name}
          src={character.image}
          width={256}
          height={256}
        />
        {character.name}
      </motion.li>
    </Link>
  );
};

export default CharacterCard;
