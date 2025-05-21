'use client';

import { useState } from 'react';
import styles from "../styles/neon.module.css";
import stylesLogin from "../styles/ImageGrid.module.css"
import LoginModal from '../components/LoginModal';
import ThemeToggle from '../components/ThemeToggle';
import { FaUserAstronaut } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaDiceD20 } from "react-icons/fa";
import Link from 'next/link';



const objectGroups = ['Personnages', 'Lieux', 'Organisations', 'Cartes'] as const;
type GroupKey = typeof objectGroups[number];

const mockData: Record<GroupKey, string[]> = {
  Personnages: ['Alice la Sorcière', 'Bob le Guerrier', 'Clara l’Espionne'],
  Lieux: ['Forteresse Noire', 'Forêt d’Émeraude', 'Ville Engloutie'],
  Organisations: ['Guilde des Voleurs', 'Ordre du Soleil', 'Compagnie Noire'],
  Cartes: ['Région Nord', 'Archipel Sombre', 'Cité Souterraine'],
};

export default function UniversePage() {
  const [selectedGroup, setSelectedGroup] = useState<GroupKey>('Personnages');
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className={styles.universeContainer}>
      {/* Bouton de login */}
      <div className={styles.topControls}>
        <ThemeToggle />
        <div className={stylesLogin.loginButtonWrapper}>
          <button
            onClick={() => setShowLogin(true)}
            className={stylesLogin.loginButton}
          >
            A
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside className={styles.sidebar}>

        
        <Link href="/" className={styles.homeButton} title="Accueil">
          <FaDiceD20
            className={styles.homeIcon}
          />
        </Link>


        <ul className={styles.groupList}>
          <li
            key="Personnage"
            className={`${styles.groupItem} ${objectGroups[0] === selectedGroup ? styles.active : ''}`}
            onClick={() => setSelectedGroup(objectGroups[0])}
          >
            <FaUserAstronaut
              className={styles.objectIcon}
            />
          </li>
          <li
            key="Lieux"
            className={`${styles.groupItem} ${objectGroups[1] === selectedGroup ? styles.active : ''}`}
            onClick={() => setSelectedGroup(objectGroups[1])}
          >
            <FaMapMarkerAlt
              className={styles.objectIcon}
            />
          </li>
          <li
            key="Organisations"
            className={`${styles.groupItem} ${objectGroups[2] === selectedGroup ? styles.active : ''}`}
            onClick={() => setSelectedGroup(objectGroups[2])}
          >
            <FaHandHoldingDollar
              className={styles.objectIcon}
            />
          </li>
        </ul>
      </aside>

      {/* Page centrale */}
      <main className={styles.content}>
        <h1 className={styles.title}>{selectedGroup}</h1>
        <div className={styles.grid}>
          {mockData[selectedGroup].map((item) => (
            <div key={item} className={styles.entityCard}>
              <div className={styles.entityName}>{item}</div>
            </div>
          ))}
        </div>
      </main>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}
