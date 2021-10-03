import React from 'react';
import styles from './SearchResult.module.css';

export default function SearchResult(props) {
  return (
    <div className={ styles.product }>
        <div>
          <div><img src={`/pictures/${props.image}`} alt = {props.image}/></div>
          <div className={ styles.name }>{ props.name }</div>
          <div className={ styles.brand}>{ props.brand }</div>
          <div>{props.rating}</div>
          <div className={styles.fee}>
            <div className={styles.price}>${ props.price }</div>
            <div className={styles.shipping}>{ props.shipping}   </div>       
          </div>
        </div>
    </div>
  )
}
