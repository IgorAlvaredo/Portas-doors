import PortaModel from "../model/porta";
import React from "react";
import styles from "../styles/Porta.module.css";

interface PortaProps {
  porta: PortaModel
}

export default function Porta(props) {
  const {porta} = props
  const selecionada = props.selecionada ? styles.selecionada : '';

  return (
    <div className={styles.area}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        <div className={styles.porta}>
          <div className={styles.numero}>3</div>
          <div className={styles.macaneta}></div>
        </div>
      </div>
      <div className={styles.chao}></div>
    </div>
  );
}
