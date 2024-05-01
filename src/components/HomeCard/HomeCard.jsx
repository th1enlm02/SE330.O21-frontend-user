import React from 'react'
import PropTypes from 'prop-types';
import styles from './HomeCard.module.css'
import classNames from 'classnames';

const HomeCard = ({ className, img, title, description, handleClick }) => {
  return (
    <section 
      className={classNames(styles.main_section, className)}
      onClick={handleClick}
    >
      <div className={styles.div_image}>
        <img 
          src={img}
          alt="meeting"
          width={27}
          height={27}
        />
      </div>
      <div className={styles.div_content}>
        <h1 className={styles.div_content_h1}>{title}</h1>
        <p className={styles.div_content_p}>{description}</p>
      </div>
    </section>
  )
}

HomeCard.propTypes = {
  className: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
}
HomeCard.defaultProps = {
  className: '',
  handleClick: () => {}
}

export default HomeCard
