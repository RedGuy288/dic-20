'use client';

import { useState } from 'react';
import styles from "../styles/neon.module.css";
import stylesLogin from "../styles/ImageGrid.module.css"
import LoginModal from '../components/LoginModal';
import ThemeToggle from '../components/ThemeToggle';


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
        <ul className={styles.groupList}>
          {objectGroups.map((group) => (
            <li
              key={group}
              className={`${styles.groupItem} ${group === selectedGroup ? styles.active : ''}`}
              onClick={() => setSelectedGroup(group)}
            >
              {group}
            </li>
          ))}
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
